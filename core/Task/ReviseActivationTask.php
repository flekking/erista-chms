<?php

namespace Core\Task;

abstract class ReviseActivationTask extends Task
{
    /**
     * @return string
     */
    abstract protected function model();

    /**
     * @param  \Illuminate\Http\Request  $request
     * @param  bool  $state
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function handle($request, bool $state = true)
    {
        $model = $this->model()::findOrFail($request->input('id'));
        $this->transaction(
            function () use ($request, $model, $state) {
                $model->active = $state;
                $model->save();
            }
        );

        return $model;
    }
}
