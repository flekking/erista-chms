<?php

namespace App\Requests\Ajax\Log\AuthenticationLog;

use Core\Request\FormRequest;

class StoreLoginRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => 'required',
            'password' => 'required',
        ];
    }
}
