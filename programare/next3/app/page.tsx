import Image from "next/image";
import {createPost} from './actions';

export default function Home() {
createPost("dudu")

  return (
    <p>This is Home. {createPost("dudu")}</p>
  );
}
