<?php

namespace App\Controllers\Ajax\Log;

use Core\Controller;
use App\Requests\Ajax\Log\AuthenticationLog\StoreLoginRequest;
use Illuminate\Http\Request;
use App\Services\Auth\{
    SanctumLoginService,
    SanctumLogoutService,
};

class AuthenticationLogController extends Controller
{
    public function storeLogin(StoreLoginRequest $request)
    {
        $this->manage(new SanctumLoginService, $request);
    }

    public function storeLogout(Request $request)
    {
        $this->manage(new SanctumLogoutService, $request);
    }
}
