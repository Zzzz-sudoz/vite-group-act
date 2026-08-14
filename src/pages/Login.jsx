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
    <section className="w-full bg-[#eee9e0] px-5 py-10 text-left font-sans text-[#211f1b] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-0 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pt-5 text-3xl font-bold text-[#211f1b]">LOGIN AUTHENTICATION</h1>
        <p className="mb-6 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pb-5 pt-2 text-sm text-[#6b6259]">
          Enter your username and password to access the activity portal.
        </p>
        <div className="mb-6 border-t border-[#c9652d]"></div>

        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="max-w-sm border border-[#d8d0c5] bg-white p-5">
            <div className="mb-3">
              <label htmlFor="username" className="mb-1 block text-sm font-medium">
                ENTER USERNAME:
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="w-full border border-[#cabfb2] bg-white px-2 py-2 text-[#211f1b] outline-none focus:border-[#c9652d]"
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
                className="w-full border border-[#cabfb2] bg-white px-2 py-2 text-[#211f1b] outline-none focus:border-[#c9652d]"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer border border-[#c9652d] bg-[#c9652d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#ad5425]"
            >
              LOGIN
            </button>

            <p className="mt-3 text-xs text-[#6b6259]">Demo account: admin / 1234</p>

            {message !== '' ? (
              <div className="mt-5 border-l-4 border-[#a6422e] bg-[#fff3ee] px-4 py-3 text-sm text-[#8f2f20]">
                {message}
              </div>
            ) : null}
          </form>
        ) : (
          <div className="max-w-sm border border-[#d8d0c5] border-l-4 border-l-[#c9652d] bg-white p-5">
            <h2 className="mb-2 text-xl font-bold text-[#211f1b]">Welcome, {username}!</h2>
            <p className="mb-4 text-[#39734d]">{message}</p>
            <button
              type="button"
              onClick={handleLogout}
              className="cursor-pointer border border-[#211f1b] bg-[#211f1b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#332f2a]"
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
