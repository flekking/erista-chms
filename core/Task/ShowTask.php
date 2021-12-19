<?php

namespace Core\Task;

abstract class ShowTask extends Task
{
    /**
     * @return string
     */
    abstract protected function model();

    /**
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function handle($request, $id = null)
    {
        return $this->model()::findOrFail($id);
    }
}
