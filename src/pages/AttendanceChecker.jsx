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
    <section className="w-full bg-[#eee9e0] px-5 py-10 text-left font-sans text-[#211f1b] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-0 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pt-5 text-3xl font-bold text-[#211f1b]">EMPLOYEE ATTENDANCE CHECKER</h1>
        <p className="mb-6 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pb-5 pt-2 text-sm text-[#6b6259]">
          Enter the employee details and use a decimal time such as 8.5 for 8:30 AM.
        </p>
        <div className="mb-6 border-t border-[#c9652d]"></div>

        <form onSubmit={handleCheckAttendance} className="max-w-sm border border-[#d8d0c5] bg-white p-5">
          <div className="mb-3">
            <label htmlFor="employeeName" className="mb-1 block text-sm font-medium">
              EMPLOYEE NAME:
            </label>
            <input
              id="employeeName"
              type="text"
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
              className="w-full border border-[#cabfb2] bg-white px-2 py-2 text-[#211f1b] outline-none focus:border-[#c9652d]"
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
              className="w-full border border-[#cabfb2] bg-white px-2 py-2 text-[#211f1b] outline-none focus:border-[#c9652d]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              className="cursor-pointer border border-[#c9652d] bg-[#c9652d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#ad5425]"
            >
              CHECK ATTENDANCE
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="cursor-pointer border border-[#211f1b] bg-[#211f1b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#332f2a]"
            >
              RESET
            </button>
          </div>
        </form>

        {attendanceStatus !== '' ? (
          <div className="mt-6 max-w-sm border border-[#d8d0c5] border-l-4 border-l-[#c9652d] bg-white p-5">
            <h2 className="mb-3 text-lg font-bold text-[#211f1b]">ATTENDANCE RESULT</h2>
            <p className="mb-1"><span className="font-semibold">Employee Name:</span> {employeeName}</p>
            <p className="mb-1"><span className="font-semibold">Time In:</span> {timeIn}</p>
            <p className="mb-1"><span className="font-semibold">Attendance Status:</span> {attendanceStatus}</p>
            <p className="mt-3 border-t border-[#d8d0c5] pt-3">{message}</p>
          </div>
        ) : null}

        {message !== '' && attendanceStatus === '' ? (
          <div className="mt-5 max-w-sm border-l-4 border-[#a6422e] bg-[#fff3ee] px-4 py-3 text-sm text-[#8f2f20]">
            {message}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default AttendanceChecker
