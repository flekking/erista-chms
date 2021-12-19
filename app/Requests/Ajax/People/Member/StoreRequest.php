<?php

namespace App\Requests\Ajax\People\Member;

use Core\Request\FormRequest;

class StoreRequest extends FormRequest
{
    public function rules()
    {
        return [
            'full_name' => 'required',
            'birthplace' => 'required',
            'birthdate' => 'required'
        ];
    }
}
