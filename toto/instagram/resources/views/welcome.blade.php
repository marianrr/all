<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    {{-- @vite('resources/css/app.css') --}}
<style>
*, ::before, ::after {
    margin:0;
    padding: 0;
    box-sizing: border-box;

}

html, body {
    height: 100%;
    width: 100%;
}

.container {
    height: 100%;
    width: 80%;
    display:flex;
    align-items: center;
    justify-content: center;

}

.header {
display: flex;
justify-content: space-between;
}






</style>

</head>

<body>

  










    @if (Route::has('login'))
        <x-ghin/>
    @endif


</body>

</html>
