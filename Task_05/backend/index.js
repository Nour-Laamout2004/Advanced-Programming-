const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

let persons = [
  { id: "1", name: "Arto Hellas", number: "040-123456" },
  { id: "2", name: "Ada Lovelace", number: "39-44-5323523" }
]

app.get('/api/persons', (req, res) => res.json(persons))

app.post('/api/persons', (req, res) => {
  const body = req.body
  if (!body.name || !body.number) return res.status(400).json({ error: 'الاسم أو الرقم مفقود' })
  if (persons.find(p => p.name === body.name)) return res.status(400).json({ error: 'الاسم موجود مسبقاً' })

  const person = { id: String(Math.floor(Math.random() * 10000)), name: body.name, number: body.number }
  persons = persons.concat(person)
  res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
  persons = persons.filter(p => p.id !== req.params.id)
  res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

