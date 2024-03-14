function TodoList({ children }) {
  return (
    <>
      <h2>Task list</h2>
      <ul>
        {children}
      </ul>
    </>
  )
}

export { TodoList }