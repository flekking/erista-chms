<?php

namespace App\Models\Concerns\Foreign\People;

use App\Models\People\Member;

trait BelongsToMembers
{
    public function members()
    {
        return $this->belongsToMany(Member::class);
    }
}
