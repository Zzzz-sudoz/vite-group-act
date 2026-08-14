import { useState } from 'react'

function GradeEvaluation() {
  const [studentName, setStudentName] = useState('')
  const [score, setScore] = useState('')
  const [remarks, setRemarks] = useState('')
  const [message, setMessage] = useState('')

  function handleEvaluate(event) {
    event.preventDefault()
    const numericScore = Number(score)

    setRemarks('')
    setMessage('')

    if (studentName === '') {
      setMessage('Please enter student name.')
    } else if (score === '') {
      setMessage('Please enter a score.')
    } else if (isNaN(numericScore)) {
      setMessage('Invalid score')
    } else if (numericScore < 0) {
      setMessage('Invalid score')
    } else if (numericScore > 100) {
      setMessage('Invalid score')
    } else if (numericScore >= 90) {
      setRemarks('Excellent')
    } else if (numericScore >= 85) {
      setRemarks('Very Good')
    } else if (numericScore >= 80) {
      setRemarks('Good')
    } else if (numericScore >= 75) {
      setRemarks('Passed')
    } else {
      setRemarks('Failed')
    }
  }

  function handleClear() {
    setStudentName('')
    setScore('')
    setRemarks('')
    setMessage('')
  }

  return (
    <section className="w-full px-5 py-8 text-left font-sans text-[#222] sm:px-8">
      <div className="max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-[#222]">STUDENT GRADE EVALUATION</h1>
        <p className="mb-5 text-sm text-gray-600">
          Enter the student name and score to determine the grade remarks.
        </p>
        <div className="mb-6 border-t border-gray-300"></div>

        <form onSubmit={handleEvaluate} className="max-w-sm">
          <div className="mb-3">
            <label htmlFor="studentName" className="mb-1 block text-sm font-medium">
              STUDENT NAME:
            </label>
            <input
              id="studentName"
              type="text"
              value={studentName}
              onChange={(event) => setStudentName(event.target.value)}
              className="w-full border border-gray-400 bg-white px-2 py-2 text-[#222] outline-none focus:border-gray-700"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="score" className="mb-1 block text-sm font-medium">
              SCORE:
            </label>
            <input
              id="score"
              type="number"
              step="any"
              value={score}
              onChange={(event) => setScore(event.target.value)}
              className="w-full border border-gray-400 bg-white px-2 py-2 text-[#222] outline-none focus:border-gray-700"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              className="cursor-pointer border border-gray-500 bg-gray-100 px-4 py-2 text-sm font-medium text-[#222] hover:bg-gray-200"
            >
              EVALUATE
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="cursor-pointer border border-gray-500 bg-white px-4 py-2 text-sm font-medium text-[#222] hover:bg-gray-200"
            >
              CLEAR
            </button>
          </div>
        </form>

        {remarks !== '' ? (
          <div className="mt-6 max-w-sm bg-gray-100 p-5">
            <h2 className="mb-3 text-lg font-bold text-[#222]">GRADE RESULT</h2>
            <p className="mb-1"><span className="font-semibold">Student Name:</span> {studentName}</p>
            <p className="mb-1"><span className="font-semibold">Score:</span> {score}</p>
            <p><span className="font-semibold">Remarks:</span> {remarks}</p>
          </div>
        ) : null}

        {message !== '' ? (
          <div className="mt-5 max-w-sm border-l-4 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-700">
            {message}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default GradeEvaluation
