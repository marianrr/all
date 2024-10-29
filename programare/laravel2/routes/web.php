<?php

use Illuminate\View\View;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DummyController;

Route::get('/', function () {
    return view('welcome');
});

Route::View("/unul", "unul");
Route::get('/dummy', [DummyController::class, 'dumm']);