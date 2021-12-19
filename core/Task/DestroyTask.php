<?php

namespace Core\Task;

abstract class DestroyTask extends Task
{
    /**
     * @return string
     */
    abstract protected function model();

    /**
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $id
     * @return void
     */
    public function handle($request, $id = null)
    {
        $this->model()::destroy($id);
    }
}
