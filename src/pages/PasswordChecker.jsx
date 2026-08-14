import { useState } from 'react'

function PasswordChecker() {
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState('')
  const [message, setMessage] = useState('')

  function handleCheckPassword() {
    if (password === '') {
      setStrength('')
      setMessage('Please enter a password.')
    } else if (password.length < 6) {
      setStrength('Weak Password')
      setMessage('Status: Weak – Create a stronger password.')
    } else if (password.length < 10) {
      setStrength('Medium Password')
      setMessage('Status: Weak – Create a stronger password.')
    } else {
      setStrength('Strong Password')
      setMessage('Status: Strong – You can use this password.')
    }
  }

  function handleClear() {
    setPassword('')
    setStrength('')
    setMessage('')
  }

  return (
    <section className="w-full px-5 py-8 text-left font-sans text-[#222] sm:px-8">
      <div className="max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-[#222]">PASSWORD STRENGTH CHECKER</h1>
        <p className="mb-5 text-sm text-gray-600">
          Enter a password to check its strength based on length.
        </p>
        <div className="mb-6 border-t border-gray-300"></div>

        <div className="max-w-sm">
          <div className="mb-4">
            <label htmlFor="passwordCheck" className="mb-1 block text-sm font-medium">
              ENTER PASSWORD:
            </label>
            <input
              id="passwordCheck"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border border-gray-400 bg-white px-2 py-2 text-[#222] outline-none focus:border-gray-700"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleCheckPassword}
              className="cursor-pointer border border-gray-500 bg-gray-100 px-4 py-2 text-sm font-medium text-[#222] hover:bg-gray-200"
            >
              CHECK PASSWORD
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="cursor-pointer border border-gray-500 bg-white px-4 py-2 text-sm font-medium text-[#222] hover:bg-gray-200"
            >
              CLEAR
            </button>
          </div>
        </div>

        {strength !== '' ? (
          <div className="mt-6 max-w-sm bg-gray-100 p-5">
            <h2 className="mb-3 text-lg font-bold text-[#222]">PASSWORD RESULT</h2>
            <p className="font-semibold">Password Status</p>
            <p className="mb-3">{message}</p>
            <p className="mb-3"><span className="font-semibold">Strength Message:</span> {strength}</p>
            <p className="mb-2 font-semibold">Strength Indicator</p>
            <div className="h-3 w-full bg-gray-300">
              {strength === 'Weak Password' ? (
                <div className="h-3 w-1/3 bg-red-600"></div>
              ) : null}
              {strength === 'Medium Password' ? (
                <div className="h-3 w-2/3 bg-yellow-500"></div>
              ) : null}
              {strength === 'Strong Password' ? (
                <div className="h-3 w-full bg-green-600"></div>
              ) : null}
            </div>
          </div>
        ) : null}

        {message !== '' && strength === '' ? (
          <div className="mt-5 max-w-sm border-l-4 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-700">
            {message}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default PasswordChecker
