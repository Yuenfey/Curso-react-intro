function TodoItems(props) {
  return (
    <>
      <section>
        <span className={`completed-preview ${props.completed && "completed"}`}>✅</span>
        <li>
          <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>
          {props.text}
          </p>
        </li>
        <span className="deleted">❌</span>
      </section>
    </>
  )
}

export { TodoItems } 