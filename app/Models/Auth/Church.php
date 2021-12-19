<?php

namespace App\Models\Auth;

use Jenssegers\Mongodb\Eloquent\Model;
use App\Models\Concerns\Foreign\Auth\BelongsToUsers;

class Church extends Model
{
    use BelongsToUsers;
}
