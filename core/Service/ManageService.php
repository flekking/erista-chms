<?php

namespace Core\Service;

trait ManageService
{
    public function manage(Service $service, $request, ...$args)
    {
        return $service->serve($request, ...$args);
    }
}
