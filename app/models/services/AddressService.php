<?php namespace Services;
use Repositories\IAddressRepository;

/**
 *
 */
class AddressService
{
    /**
     * Url for geocoding api
     */
    const GEO_CODE_URL = 'http://maps.googleapis.com/maps/api/geocode/json?address={query}&sensor=true_or_false';

    /**
     * @var IAddressRepository
     */
    protected $repo;

    /**
     * @param IAddressRepository $repo
     */
    public function __construct(IAddressRepository $repo)
    {
        $this->repo = $repo;
    }

    /**
     *
     * @param $address
     * @return bool|mixed
     * @throws \Exception
     */
    public function getGeoAddress($address) {
        $key = $this->makeAddressKey($address);
        $geoAddress = $this->getAddressBuyKey($key);
        if (is_null($geoAddress)) {
            $geoAddress = $this->makeAddress($address);
        }
        return $geoAddress;
    }

    /**
     * @param $key
     * @return bool
     */
    public function getAddressBuyKey($key) {
        if (empty($key)) {
            return false;
        }
        return $this->repo->getAddressByKey($key);
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data) {
        return $this->repo->create($data);
    }

    /**
     * @param $address
     * @return mixed
     * @throws \Exception
     */
    public function makeAddress($address) {
        $url = $this->_getGeoCodeUrl($address);
        $result = $this->getUrlData($url, false);
        $result = json_decode($result, true);
        if (!empty($result['status']) && $result['status'] == 'OK') {
            if (!empty($result['results'][0]['geometry']['location']['lat']) &&
                !empty($result['results'][0]['geometry']['location']['lng'])) {
                $data = array(
                    'latitude' => $result['results'][0]['geometry']['location']['lat'],
                    'longitude' => $result['results'][0]['geometry']['location']['lng'],
                    'address' =>
                        !empty($result['results'][0]['formatted_address']) ?
                            $result['results'][0]['formatted_address'] : $address,
                    'key' => $this->makeAddressKey($address),
                );
                return $this->create($data);
            }
        }
        throw new \Exception('Faild geocode address. Status - '.$result['status']);
    }

    /**
     * @param $text
     * @return string
     */
    public function makeAddressKey($text) {
        return md5($text);
    }

    /**
     * @param $term
     * @return mixed
     */
    protected function _getGeoCodeUrl($term) {
        $term = urlencode($term);
        return str_replace('{query}', $term, self::GEO_CODE_URL);
    }

    /**
     * @param $url
     * @param bool $show_header
     * @param bool $usecookie
     * @param bool $redirect
     * @param int $timeout
     * @param null $postfields
     * @param null $content_type
     * @param null $referer
     * @param bool $disableua
     * @return mixed|string
     */
    protected function getUrlData($url, $show_header=true, $usecookie = true, $redirect = true,
                                  $timeout=20,$postfields=null,
                                  $content_type=null, $referer=null, $disableua=false
    ) {
        $header[0] = "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
        $header[] = "Cache-Control: max-age=0";
        $header[] = "Connection: keep-alive";
        $header[] = "Keep-Alive: 300";
        $header[] = "Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.3";
        $header[] = "Accept-Language: en-US,en;q=0.5";
        $header[] = "Pragma: "; // browsers keep this blank.

        if(!empty($content_type))
            $header[] = "Content-Type: $content_type";

        if(!empty($referer))
            $header[] = 'Referer: ' . $referer;

        $options = array(
            CURLOPT_HEADER => $show_header, //for manual redirects
            CURLOPT_RETURNTRANSFER => true, // return web page
            CURLOPT_FOLLOWLOCATION => $redirect,
            CURLOPT_MAXREDIRS => 3, // max redirects
            CURLOPT_ENCODING => "", // handle all encodings
            CURLOPT_CONNECTTIMEOUT => 20, // timeout on connect
            CURLOPT_TIMEOUT => $timeout, // timeout on response
            CURLOPT_USERAGENT => "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36",
            CURLOPT_HTTPHEADER => $header,
//            CURLINFO_HEADER_OUT => true //enable tracking,
        );

        if($disableua == true && array_key_exists(CURLOPT_USERAGENT, $options))
            unset($options[CURLOPT_USERAGENT]);

        if(!empty($postfields)){
            $options[CURLOPT_POST] = true;
            $options[CURLOPT_POSTFIELDS] = $postfields;
        }

        if ($usecookie) {
            if (empty($this->_cookieFile))
                $this->_cookieFile = tempnam(sys_get_temp_dir(), '');
            $options[CURLOPT_COOKIEFILE] = $this->_cookieFile;
            $options[CURLOPT_COOKIEJAR] = $this->_cookieFile;
        }

        $ch = curl_init($url);
        curl_setopt_array($ch, $options);
        $ret = curl_exec($ch);

        if (!$redirect) {
            //return the next location if we are manually redirecting
            $info = curl_getinfo($ch);
            curl_close($ch);
            $location = "";
            if ($info['http_code'] == 301 || $info['http_code'] == 302) {
                // extract new location
                preg_match_all('|Location: (.*)\r\n|U', $ret, $matches);
                $location = implode(';', $matches[1]);
            }
            return $location;
        } else {
            return $ret;
        }
    }
}