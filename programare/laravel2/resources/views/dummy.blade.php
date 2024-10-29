<h1>This is Dummy View.</h1>
{{-- @dd($sot[0]['title']) --}}

@foreach($sot as $ff) 
    <p>{{$ff['body']}}</p>
@endforeach