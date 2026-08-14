function Home() {
  return (
    <section className="w-full bg-[#eee9e0] px-5 py-10 text-left font-sans text-[#211f1b] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-0 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pt-5 text-3xl font-bold text-[#211f1b]">REACT ACTIVITY PORTAL</h1>
        <p className="mb-6 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pb-5 pt-2 text-sm text-[#6b6259]">
          Select an available activity from the navigation menu.
        </p>
        <div className="mb-6 border-t border-[#c9652d]"></div>
        <div className="max-w-md border border-[#d8d0c5] bg-white p-5">
          <h2 className="mb-3 text-lg font-bold text-[#211f1b]">AVAILABLE ACTIVITIES</h2>
          <p className="mb-2">Activity 1 – Login Authentication</p>
          <p className="mb-2">Activity 2 – Student Grade Evaluation</p>
          <p className="mb-2">Activity 3 – Password Strength Checker</p>
          <p className="mb-2">Activity 4 – Electricity Bill Calculator</p>
          <p>Activity 5 – Employee Attendance Checker</p>
        </div>
      </div>
    </section>
  )
}

export default Home
