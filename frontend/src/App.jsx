import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomerLogin from './pages/Customerlogin';
import CustomerSignup from './pages/Customersignup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerLogin />} />
        <Route path="/signup" element={<CustomerSignup />} />
      </Routes>
    </Router>
  )
}

export default App
