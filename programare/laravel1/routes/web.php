<?php

use Illuminate\View\View;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/one', function() {
    return "<h1>This is One page!</h1>";
});

Route::View("/two", "three");

Route::View("/five", "five");