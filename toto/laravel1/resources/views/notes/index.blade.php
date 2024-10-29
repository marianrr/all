<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <style>
        .material-symbols-outlined {
          font-variation-settings:
          'FILL' 0,
          'wght' 400,
          'GRAD' 0,
          'opsz' 24
        }
        </style>


</head>
<body>
    
    <p>This are the notes:</p>
    <form action="{{route('notes.store')}}" method="POST">
    @csrf
    <input type="text" name="note">
    <input type="submit" value='note'>
    </form>
    
    {{-- @if($notes!='') --}}
    {{-- { --}}
    @foreach ($notes as $note)
        
    {{$note->note}}
    <a href="{{ route('notes.edit', $note) }}">
        <span class="material-symbols-outlined">
            edit_note
            </span>
    </a>
    <form action=" {{route('notes.destroy', $note)}} " method="POST">
        @csrf
        @method('DELETE')
        <input type="text" name='note'>
        <input type="submit" value='Delete'>
    <a href=" {{route('notes.destroy', $note)}} " onclick="event.preventDefault(); this.closest('form').submit();">
        <span class="material-symbols-outlined">
            delete
            </span>
        </a>
    </form>

    @endforeach

    {{-- } --}}



</body>
</html>