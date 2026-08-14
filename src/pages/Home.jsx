function Home({ setPage }) {
  return (
    <section className="w-full bg-[#eee9e0] px-5 py-10 text-left font-sans text-[#211f1b] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-0 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pt-5 text-3xl font-bold text-[#211f1b]">
          GROUP 404 NOT FOUND
        </h1>
        <p className="mb-6 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pb-5 pt-2 text-sm text-[#6b6259]">
          React Activity Portal
        </p>
        <div className="mb-6 border-t border-[#c9652d]"></div>

        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="w-full max-w-sm border border-[#d8d0c5] border-l-8 border-l-[#c9652d] bg-white p-5">
            <h2 className="mb-4 text-xl font-bold text-[#211f1b]">GROUP MEMBERS</h2>
            <p className="mb-2">Raphael Sinangote</p>
            <p className="mb-2">Angelo Quinto</p>
            <p className="mb-2">Wayne Candelario</p>
            <p>Ian Lance Gamao</p>
          </div>

          <div className="w-full max-w-md border border-[#d8d0c5] bg-white p-5">
            <h2 className="mb-4 text-xl font-bold text-[#211f1b]">ACTIVITY LIST</h2>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setPage('activity1')}
                className="cursor-pointer border border-[#d8d0c5] bg-[#faf6ef] px-4 py-3 text-left font-semibold text-[#211f1b] hover:border-[#c9652d] hover:text-[#c9652d]"
              >
                Activity 1 – Login Authentication
              </button>
              <button
                type="button"
                onClick={() => setPage('activity2')}
                className="cursor-pointer border border-[#d8d0c5] bg-[#faf6ef] px-4 py-3 text-left font-semibold text-[#211f1b] hover:border-[#c9652d] hover:text-[#c9652d]"
              >
                Activity 2 – Student Grade Evaluation
              </button>
              <button
                type="button"
                onClick={() => setPage('activity3')}
                className="cursor-pointer border border-[#d8d0c5] bg-[#faf6ef] px-4 py-3 text-left font-semibold text-[#211f1b] hover:border-[#c9652d] hover:text-[#c9652d]"
              >
                Activity 3 – Password Strength Checker
              </button>
              <button
                type="button"
                onClick={() => setPage('activity4')}
                className="cursor-pointer border border-[#d8d0c5] bg-[#faf6ef] px-4 py-3 text-left font-semibold text-[#211f1b] hover:border-[#c9652d] hover:text-[#c9652d]"
              >
                Activity 4 – Electricity Bill Calculator
              </button>
              <button
                type="button"
                onClick={() => setPage('activity5')}
                className="cursor-pointer border border-[#d8d0c5] bg-[#faf6ef] px-4 py-3 text-left font-semibold text-[#211f1b] hover:border-[#c9652d] hover:text-[#c9652d]"
              >
                Activity 5 – Employee Attendance Checker
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
