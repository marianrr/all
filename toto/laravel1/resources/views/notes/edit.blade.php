<p>Edit note:</p>
<form action=" {{ route('notes.update', $note) }} " method = "POST">
    @csrf
    @method('PATCH')
    <input type="text" name="note" value="{{$note->note}}">
    <input type="submit" value='Edit'>
</form>