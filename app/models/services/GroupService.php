<?php namespace Services;
use Repositories\IGroupRepository;
use Illuminate\Support\Facades\Auth;


class GroupService {
    protected $repo;

    /**
     * @param  $repo
     */
    public function __construct(IGroupRepository $repo) {
        $this->repo = $repo;
    }

    /**
     * @param $name
     * @param $description
     * @return mixed
     */
    public function createGroup($name, $description) {
        $data = array(
            'name' => $name,
            'description' => $description,
            'userid' => Auth::user()->id
        );
        $group = $this->create($data);
        return $group;
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data) {
        return $this->repo->create($data);
    }
}