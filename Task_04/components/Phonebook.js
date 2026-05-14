import { useState, useEffect } from 'react'
import axios from 'axios'

const Phonebook = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  // جلب البيانات من ملف db.json
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = { name: newName }
    
    // إرسال الاسم الجديد للسيرفر
    axios.post('http://localhost:3001/persons', personObject).then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={(e) => setNewName(e.target.value)} /></div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.id}>{person.name}</p>)}
    </div>
  )
}

export default Phonebook
