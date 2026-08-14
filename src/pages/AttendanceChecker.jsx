import { useState } from 'react'

function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState('')
  const [timeIn, setTimeIn] = useState('')
  const [attendanceStatus, setAttendanceStatus] = useState('')
  const [message, setMessage] = useState('')

  function handleCheckAttendance(event) {
    event.preventDefault()

    if (employeeName === '') {
      setAttendanceStatus('')
      setMessage('Please enter employee name.')
    } else if (timeIn === '') {
      setAttendanceStatus('')
      setMessage('Please enter a time in.')
    } else if (isNaN(Number(timeIn))) {
      setAttendanceStatus('')
      setMessage('Please enter a valid numeric value.')
    } else if (Number(timeIn) <= 8) {
      setAttendanceStatus('On Time')
      setMessage('Status: On Time – Good job!')
    } else if (Number(timeIn) <= 9) {
      setAttendanceStatus('Late')
      setMessage('Status: Late – Please be on time tomorrow.')
    } else {
      setAttendanceStatus('Very Late')
      setMessage('Status: Very Late – Report to your supervisor.')
    }
  }

  function handleReset() {
    setEmployeeName('')
    setTimeIn('')
    setAttendanceStatus('')
    setMessage('')
  }

  return (
    <section className="w-full px-5 py-8 text-left font-sans text-[#222] sm:px-8">
      <div className="max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-[#222]">EMPLOYEE ATTENDANCE CHECKER</h1>
        <p className="mb-5 text-sm text-gray-600">
          Enter the employee details and use a decimal time such as 8.5 for 8:30 AM.
        </p>
        <div className="mb-6 border-t border-gray-300"></div>

        <form onSubmit={handleCheckAttendance} className="max-w-sm">
          <div className="mb-3">
            <label htmlFor="employeeName" className="mb-1 block text-sm font-medium">
              EMPLOYEE NAME:
            </label>
            <input
              id="employeeName"
              type="text"
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
              className="w-full border border-gray-400 bg-white px-2 py-2 text-[#222] outline-none focus:border-gray-700"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="timeIn" className="mb-1 block text-sm font-medium">
              TIME IN:
            </label>
            <input
              id="timeIn"
              type="number"
              step="0.1"
              value={timeIn}
              onChange={(event) => setTimeIn(event.target.value)}
              className="w-full border border-gray-400 bg-white px-2 py-2 text-[#222] outline-none focus:border-gray-700"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              className="cursor-pointer border border-gray-500 bg-gray-100 px-4 py-2 text-sm font-medium text-[#222] hover:bg-gray-200"
            >
              CHECK ATTENDANCE
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="cursor-pointer border border-gray-500 bg-white px-4 py-2 text-sm font-medium text-[#222] hover:bg-gray-200"
            >
              RESET
            </button>
          </div>
        </form>

        {attendanceStatus !== '' ? (
          <div className="mt-6 max-w-sm bg-gray-100 p-5">
            <h2 className="mb-3 text-lg font-bold text-[#222]">ATTENDANCE RESULT</h2>
            <p className="mb-1"><span className="font-semibold">Employee Name:</span> {employeeName}</p>
            <p className="mb-1"><span className="font-semibold">Time In:</span> {timeIn}</p>
            <p className="mb-1"><span className="font-semibold">Attendance Status:</span> {attendanceStatus}</p>
            <p className="mt-3 border-t border-gray-300 pt-3">{message}</p>
          </div>
        ) : null}

        {message !== '' && attendanceStatus === '' ? (
          <div className="mt-5 max-w-sm border-l-4 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-700">
            {message}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default AttendanceChecker
