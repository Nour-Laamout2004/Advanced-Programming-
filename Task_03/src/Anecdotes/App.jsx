import { useState } from "react"

const anecdotes = ["A", "B", "C", "D"]

function App() {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const vote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }

  const next = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const maxIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>

      <button onClick={vote}>Vote</button>
      <button onClick={next}>Next</button>

      <h3>Most Popular</h3>
      <p>{anecdotes[maxIndex]}</p>
    </div>
  )
}

export default App