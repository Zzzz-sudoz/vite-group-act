function Home() {
  return (
    <section className="w-full px-5 py-8 text-left font-sans text-[#222] sm:px-8">
      <div className="max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-[#222]">REACT ACTIVITY PORTAL</h1>
        <p className="mb-5 text-sm text-gray-600">
          Select an available activity from the navigation menu.
        </p>
        <div className="mb-6 border-t border-gray-300"></div>
        <div className="max-w-md bg-gray-100 p-5">
          <h2 className="mb-3 text-lg font-bold text-[#222]">AVAILABLE ACTIVITIES</h2>
          <p className="mb-2">Activity 1 – Login Authentication</p>
          <p>Activity 5 – Employee Attendance Checker</p>
        </div>
      </div>
    </section>
  )
}

export default Home
