import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")

  const addTodo = () => {
    if (text === "") return
    setTodos([...todos, { id: Date.now(), text }])
    setText("")
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      {todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default App