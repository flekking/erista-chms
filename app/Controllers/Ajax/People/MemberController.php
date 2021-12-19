<?php

namespace App\Controllers\Ajax\People;

use Core\Controller;
use App\Models\People\Member;
use App\Requests\Ajax\People\Member\StoreRequest;
use App\Tasks\People\Member\StoreTask;

class MemberController extends Controller
{
    public function index()
    {
        return Member::all();
    }

    public function store(StoreRequest $request)
    {
        return response()->json(
            $this->transmit(new StoreTask, $request),
            201,
        );
    }
}
