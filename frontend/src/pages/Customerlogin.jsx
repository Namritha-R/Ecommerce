import { useState } from 'react'

export default function CustomerLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // You will later send a request to the Spring Boot backend here
    console.log('Logging in with:', { email, password })
  }

  return (
    <div className="login-container">
      <h2>Customer Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

