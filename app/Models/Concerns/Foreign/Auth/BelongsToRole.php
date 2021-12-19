<?php

namespace App\Models\Concerns\Foreign\Auth;

use App\Models\Auth\Role;

trait BelongsToRole
{
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
