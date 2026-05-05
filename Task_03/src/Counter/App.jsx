import { useState } from "react"
import Display from "./Display"
import Button from "./Button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Display value={count} />
      <Button text="+" onClick={() => setCount(count + 1)} />
      <Button text="-" onClick={() => setCount(count - 1)} />
    </div>
  )
}

export default App