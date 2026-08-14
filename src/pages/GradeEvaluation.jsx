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
    <section className="w-full bg-[#eee9e0] px-5 py-10 text-left font-sans text-[#211f1b] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-0 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pt-5 text-3xl font-bold text-[#211f1b]">STUDENT GRADE EVALUATION</h1>
        <p className="mb-6 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pb-5 pt-2 text-sm text-[#6b6259]">
          Enter the student name and score to determine the grade remarks.
        </p>
        <div className="mb-6 border-t border-[#c9652d]"></div>

        <form onSubmit={handleEvaluate} className="max-w-sm border border-[#d8d0c5] bg-white p-5">
          <div className="mb-3">
            <label htmlFor="studentName" className="mb-1 block text-sm font-medium">
              STUDENT NAME:
            </label>
            <input
              id="studentName"
              type="text"
              value={studentName}
              onChange={(event) => setStudentName(event.target.value)}
              className="w-full border border-[#cabfb2] bg-white px-2 py-2 text-[#211f1b] outline-none focus:border-[#c9652d]"
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
              className="w-full border border-[#cabfb2] bg-white px-2 py-2 text-[#211f1b] outline-none focus:border-[#c9652d]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              className="cursor-pointer border border-[#c9652d] bg-[#c9652d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#ad5425]"
            >
              EVALUATE
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="cursor-pointer border border-[#211f1b] bg-[#211f1b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#332f2a]"
            >
              CLEAR
            </button>
          </div>
        </form>

        {remarks !== '' ? (
          <div className="mt-6 max-w-sm border border-[#d8d0c5] border-l-4 border-l-[#c9652d] bg-white p-5">
            <h2 className="mb-3 text-lg font-bold text-[#211f1b]">GRADE RESULT</h2>
            <p className="mb-1"><span className="font-semibold">Student Name:</span> {studentName}</p>
            <p className="mb-1"><span className="font-semibold">Score:</span> {score}</p>
            <p><span className="font-semibold">Remarks:</span> {remarks}</p>
          </div>
        ) : null}

        {message !== '' ? (
          <div className="mt-5 max-w-sm border-l-4 border-[#a6422e] bg-[#fff3ee] px-4 py-3 text-sm text-[#8f2f20]">
            {message}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default GradeEvaluation
