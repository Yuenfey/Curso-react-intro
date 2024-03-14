function TodoItems(props) {
  return (
    <>

      <span className="completed">✅</span>
      <li>
        {props.text}
      </li>
      <span className="deleted">❌</span>

    </>
  )
}

export { TodoItems } 