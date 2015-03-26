<?php
namespace Repositories;

use Repositories\Base\BaseRepository;
use Entities\Address;

class AddressRepository extends BaseRepository implements IAddressRepository {

    public function __construct(Address $model) {
        $this->model = $model;
    }


    /**
     * @param $key
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getAddressByKey($key) {
        $this->where('key', $key, '=');
        return $this->get()->first();
    }


}