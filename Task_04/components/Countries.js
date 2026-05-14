import { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    if (value) {
      axios.get(`https://restcountries.com`).then(response => {
        const filtered = response.data.filter(c => 
          c.name.common.toLowerCase().includes(value.toLowerCase())
        )
        setCountries(filtered)
      })
    }
  }, [value])

  return (
    <div>
      find countries <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>
        {countries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          countries.map(c => <p key={c.cca3}>{c.name.common}</p>)
        )}
      </div>
    </div>
  )
}

export default Countries
