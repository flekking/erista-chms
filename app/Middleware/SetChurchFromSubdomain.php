<?php

namespace App\Middleware;

use Closure;
use Core\Auth\Container;

class SetChurchFromSubdomain
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        Container::setBySubdomain(explode('.', $request->getHost())[0]);
        return $next($request);
    }
}
