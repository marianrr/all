"use client"

import {useState} from "react";

export default function Webdev() {
const [count, setCount] = useState(0)

return (

    <>
    <p>You clicked {count} times.</p>
    <button onClick={() => setCount(count+1)}>Click me!</button>
    </>
);

}