function CreateTodoButton() {
  return (
    <div className="create-task">
      <button onClick={() => {console.log("clic")}}> New Task </button>
    </div>
  )
}

export { CreateTodoButton }