<?php

namespace App\Services\Auth;

use Core\Service\Service;
use Illuminate\Support\Facades\Auth;
use Core\Auth\Container;
use Illuminate\Auth\AuthenticationException;
use App\Requests\Ajax\Log\AuthenticationLog\StoreLoginRequest;
use App\Models\Auth\User;

class SanctumLoginService extends Service
{
    /**
     * @param  \App\Requests\Ajax\Log\AuthenticationLog\StoreLoginRequest  $request
     * @return \App\Models\Auth\User
     */
    public function serve($request)
    {
        $user = User::where('email', $request->input('email'))->first();
        if ( ! Container::userExists($user->_id)) {
            throw new AuthenticationException;
        }

        if ( ! Auth::attempt($request->only('email', 'password')))
            throw new AuthenticationException;
        
        return $user;
    }
}
