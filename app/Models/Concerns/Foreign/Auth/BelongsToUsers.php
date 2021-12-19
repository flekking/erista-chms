<?php

namespace App\Models\Concerns\Foreign\Auth;

use App\Models\Auth\User;

trait BelongsToUsers
{
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
