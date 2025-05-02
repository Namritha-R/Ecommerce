import { Routes, Route } from 'react-router-dom'
import CustomerLogin from './pages/CustomerLogin'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CustomerLogin />} />
      {/* We'll add more pages later */}
    </Routes>
  )
}

export default App
