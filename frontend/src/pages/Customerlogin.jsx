import { useState } from 'react'
import './CustomerLogin.css'
import { FaUser, FaLock, FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa'

export default function CustomerLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FaUser />
            <input
              type="text"
              placeholder="Type your username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FaLock />
            <input
              type="password"
              placeholder="Type your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="forgot">Forgot password?</div>
          <button type="submit" className="login-btn">LOGIN</button>
        </form>
        <div className="divider">Or Sign Up Using</div>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaGoogle />
        </div>
        <div className="signup-link">Or Sign Up Using <b>SIGN UP</b></div>
      </div>
    </div>
  )
}
