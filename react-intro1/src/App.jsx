
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItems } from './TodoItems'
import { CreateTodoButton } from './CreateTodoButton'

function App() {
  const defaultTodos = 
  [
    {text: 'cebolla', completed: false},
    {text: 'ajo', completed: false},
    {text: 'brocoli', completed: false},
    {text: 'espinaca', completed: false},
    {text: 'rabano', completed: false},
    {text: 'cilantro', completed: false}
  ]
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItems key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App
