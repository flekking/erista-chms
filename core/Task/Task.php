<?php

namespace Core\Task;

use Core\Database\{
    BuildWhere,
    Transaction,
};

abstract class Task
{
    // use BuildWhere, Transaction;

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    abstract public function handle($request);
}
