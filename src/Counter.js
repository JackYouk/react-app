export const Counter = () => {
    let count = 0;

    return (
        <div>
            <h1>Current count: {count}</h1>
            <button
                onClick={() => {
                    count++;
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    count--;
                }}
            >
                -
            </button>
        </div>
    )
}