<?php

namespace App\Services\Auth;

use Core\Service\Service;
use Illuminate\Support\Facades\Auth;
use App\Models\Auth\User;

class SanctumLogoutService extends Service
{
    public function serve($request)
    {
        $user = User::findOrFail($request->user()->_id);
        Auth::guard('web')->logout($user->_id);
        return $user;
    }
}
