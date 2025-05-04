import { useState } from 'react';
import './CustomerLogin.css';
import { FaUser, FaLock, FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

export default function CustomerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    navigate('/home');
  };

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

          <div className="forgot">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button type="submit" className="login-btn">LOGIN</button>
        </form>

        <div className="divider">Or Sign Up Using</div>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaGoogle />
        </div>
        <div className="signup-link">
          Or Sign Up Using <Link to="/signup"><b>SIGN UP</b></Link>
        </div>
      </div>
    </div>
  );
}
