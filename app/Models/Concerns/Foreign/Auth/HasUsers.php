<?php

namespace App\Models\Concerns\Foreign\Auth;

use App\Models\Auth\User;

trait HasUsers
{
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
