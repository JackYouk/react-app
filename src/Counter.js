import { useState } from "react";


export const Counter = () => {
    const [count, setCount] = useState(0);
    console.log(count);

    return (
        <div>
            <h1>Current count: {count}</h1>
            <button
                onClick={() => setCount(count + 1)}
            >
                +
            </button>
            <button
                onClick={() => setCount(count - 1)}
            >
                -
            </button>
        </div>
    )
}