import React, { useState } from 'react';
import './App.css'
function App() {
  const [formData, setFormData] = useState({ url: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const jsonData = JSON.stringify(formData)
    try {
      const response = await fetch('http://localhost:4000/submit', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: jsonData
      })
      const data = await response.text()
      console.log(data.data)
      setMessage('URL shortened successfully! Your shortened URL is: http://localhost:4000/' + data)
    } catch (err) {
      console.error(err)
      setMessage('Error shortening URL. Please try again.')
    }
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <form onSubmit={handleSubmit}>
            <input name="url" placeholder="shortenme.com" onChange={handleChange} value={formData.url} />
            <button type="submit">Submit</button>
          </form>
          {message && <p>{message}</p>}
        </header>
      </div>
    </>
  );
}

export default App;
