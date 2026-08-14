import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLogin(event) {
    event.preventDefault()

    if (username === '' && password === '') {
      setMessage('Please enter username and password.')
    } else if (username === 'admin' && password === '1234') {
      setMessage('Login successful!')
      setIsLoggedIn(true)
    } else {
      setMessage('Invalid username or password.')
    }
  }

  function handleLogout() {
    setUsername('')
    setPassword('')
    setMessage('')
    setIsLoggedIn(false)
  }

  return (
    <section className="w-full px-5 py-8 text-left font-sans text-[#222] sm:px-8">
      <div className="max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-[#222]">LOGIN AUTHENTICATION</h1>
        <p className="mb-5 text-sm text-gray-600">
          Enter your username and password to access the activity portal.
        </p>
        <div className="mb-6 border-t border-gray-300"></div>

        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="max-w-sm">
            <div className="mb-3">
              <label htmlFor="username" className="mb-1 block text-sm font-medium">
                ENTER USERNAME:
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="w-full border border-gray-400 bg-white px-2 py-2 text-[#222] outline-none focus:border-gray-700"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="mb-1 block text-sm font-medium">
                ENTER PASSWORD:
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border border-gray-400 bg-white px-2 py-2 text-[#222] outline-none focus:border-gray-700"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer border border-gray-500 bg-gray-100 px-4 py-2 text-sm font-medium text-[#222] hover:bg-gray-200"
            >
              LOGIN
            </button>

            <p className="mt-3 text-xs text-gray-500">Demo account: admin / 1234</p>

            {message !== '' ? (
              <div className="mt-5 border-l-4 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-700">
                {message}
              </div>
            ) : null}
          </form>
        ) : (
          <div className="max-w-sm bg-gray-100 p-5">
            <h2 className="mb-2 text-xl font-bold text-[#222]">Welcome, {username}!</h2>
            <p className="mb-4 text-green-700">{message}</p>
            <button
              type="button"
              onClick={handleLogout}
              className="cursor-pointer border border-gray-500 bg-white px-4 py-2 text-sm font-medium text-[#222] hover:bg-gray-200"
            >
              LOGOUT
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Login
