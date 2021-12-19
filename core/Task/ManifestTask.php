<?php

namespace Core\Task;

abstract class ManifestTask extends Task
{
    /**
     * @return string
     */
    abstract protected function model();

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function handle($request)
    {
        return $this->model()::all();
    }
}
