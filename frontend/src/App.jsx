import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomerLogin from './pages/Customerlogin'
import CustomerSignup from './pages/Customersignup'
import Home from './pages/Home'
import ForgotPassword from './pages/ForgotPassword';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerLogin />} />
        <Route path="/signup" element={<CustomerSignup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App
