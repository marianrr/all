import {createPost} from '../actions';

export default function Page() {

    createPost("miau")
    return (
        <p>This is world page.{createPost("dudu")}</p>
    )
}