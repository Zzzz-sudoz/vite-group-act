import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import AttendanceChecker from './pages/AttendanceChecker'

function App() {
  const [page, setPage] = useState('home')
  let content

  if (page === 'activity1') {
    content = <Login />
  } else if (page === 'activity5') {
    content = <AttendanceChecker />
  } else {
    content = <Home />
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <Navbar page={page} setPage={setPage} />
      <main>{content}</main>
    </div>
  )
}

export default App
