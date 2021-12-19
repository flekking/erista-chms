<?php

namespace Core\Request;

use Illuminate\Foundation\Http\FormRequest as BaseFormRequest;

class FormRequest extends BaseFormRequest
{
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            $this->afterValidation();
        });
    }

    protected function afterValidation()
    {
        
    }
}
