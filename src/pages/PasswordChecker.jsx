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
    <section className="w-full bg-[#eee9e0] px-5 py-10 text-left font-sans text-[#211f1b] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-0 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pt-5 text-3xl font-bold text-[#211f1b]">PASSWORD STRENGTH CHECKER</h1>
        <p className="mb-6 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pb-5 pt-2 text-sm text-[#6b6259]">
          Enter a password to check its strength based on length.
        </p>
        <div className="mb-6 border-t border-[#c9652d]"></div>

        <div className="max-w-sm border border-[#d8d0c5] bg-white p-5">
          <div className="mb-4">
            <label htmlFor="passwordCheck" className="mb-1 block text-sm font-medium">
              ENTER PASSWORD:
            </label>
            <input
              id="passwordCheck"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border border-[#cabfb2] bg-white px-2 py-2 text-[#211f1b] outline-none focus:border-[#c9652d]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleCheckPassword}
              className="cursor-pointer border border-[#c9652d] bg-[#c9652d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#ad5425]"
            >
              CHECK PASSWORD
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="cursor-pointer border border-[#211f1b] bg-[#211f1b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#332f2a]"
            >
              CLEAR
            </button>
          </div>
        </div>

        {strength !== '' ? (
          <div className="mt-6 max-w-sm border border-[#d8d0c5] border-l-4 border-l-[#c9652d] bg-white p-5">
            <h2 className="mb-3 text-lg font-bold text-[#211f1b]">PASSWORD RESULT</h2>
            <p className="font-semibold">Password Status</p>
            <p className="mb-3">{message}</p>
            <p className="mb-3"><span className="font-semibold">Strength Message:</span> {strength}</p>
            <p className="mb-2 font-semibold">Strength Indicator</p>
            <div className="h-3 w-full bg-[#ded6cc]">
              {strength === 'Weak Password' ? (
                <div className="h-3 w-1/3 bg-[#a6422e]"></div>
              ) : null}
              {strength === 'Medium Password' ? (
                <div className="h-3 w-2/3 bg-[#c9652d]"></div>
              ) : null}
              {strength === 'Strong Password' ? (
                <div className="h-3 w-full bg-[#39734d]"></div>
              ) : null}
            </div>
          </div>
        ) : null}

        {message !== '' && strength === '' ? (
          <div className="mt-5 max-w-sm border-l-4 border-[#a6422e] bg-[#fff3ee] px-4 py-3 text-sm text-[#8f2f20]">
            {message}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default PasswordChecker
