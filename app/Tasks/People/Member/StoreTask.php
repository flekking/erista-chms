<?php

namespace App\Tasks\People\Member;

use Core\Task\Task;
use App\Models\People\Member;
use Core\Auth\Container;

class StoreTask extends Task
{
    public function handle($request)
    {
        $member = new Member;
        $member->full_name = $request->input('full_name');
        $member->birthplace = $request->input('birthplace');
        $member->birthdate = $request->input('birthdate');
        $member->church_id = Container::id();
        $member->save();

        return $member;
    }
}
