function TodoCounter({ completed, total }) {
    return (
        <>
            <header>
                <h1>To - Do</h1>
                <h2>Task completed {completed} of {total}.</h2>
            </header>
        </>
    )
}

export { TodoCounter }