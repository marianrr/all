<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DummyController extends Controller
{
    

public function dumm() {
    $dummy = Http::get("https://dummyjson.com/posts");
    $sot = $dummy->json('posts');
    // dd($sot);
    return view('dummy', ['sot' => $sot]);
}





}
