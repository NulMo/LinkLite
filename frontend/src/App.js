import React, { useState } from 'react';
import {ThreeDots} from 'react-loader-spinner'
import './App.css'
function App() {
  const [formData, setFormData] = useState({ url: '' })
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!formData.url.includes('.')) {
      setMessage('Please enter a valid URL')
      return;
    }
    const jsonData = JSON.stringify(formData)
    setIsLoading(true);
    try {
      setMessage('Loading')
      const response = await fetch('https://linklite-i09t.onrender.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: jsonData
      })
      const data = await response.text()
      console.log(data.data)
      setMessage('URL shortened successfully! Your shortened URL is: https://linklite-i09t.onrender.com/' + data)
    } catch (err) {
      console.error(err)
      setMessage('Error shortening URL. Please try again.')
    } finally {
      setIsLoading(false);
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
          {isLoading && <p><ThreeDots visible={true} height="10" width="30" color="#3498db" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} wrapperClass="" /> </p>}
          {message && <p>{message}</p>}
        </header>
      </div>
    </>
  );
}

export default App;
