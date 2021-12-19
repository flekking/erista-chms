<?php

namespace App\Middleware;

use Closure;
use Core\Auth\Container;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\AuthenticationException;

class VerifyUserOnChurch
{
    public function handle($request, Closure $next)
    {
        if (Container::userExists(Auth::id())) {
            return $next($request);
        } else {
            throw new AuthenticationException;
        }
    }
}
