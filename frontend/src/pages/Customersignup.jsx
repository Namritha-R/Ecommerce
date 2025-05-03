import { useState } from 'react'
import './Customersignup.css'

export default function CustomerSignup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    pincode: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Customer signup data:', form)
    // You'll later send this to backend
  }

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Customer Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <textarea name="address" placeholder="Address" onChange={handleChange} required />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <b>Login</b></p>
      </div>
    </div>
  )
}
