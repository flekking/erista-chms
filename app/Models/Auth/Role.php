<?php

namespace App\Models\Auth;

use Jenssegers\Mongodb\Eloquent\Model;
use App\Models\Concerns\Foreign\Auth\HasUsers;

class Role extends Model
{
    use HasUsers;
}
