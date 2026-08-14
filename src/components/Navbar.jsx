function Navbar({ page, setPage }) {
  return (
    <nav className="border-b border-gray-300 bg-gray-100 px-5 py-4 sm:px-8">
      <div className="flex max-w-5xl flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="button"
          onClick={() => setPage('home')}
          className={page === 'home' ? 'cursor-pointer font-semibold text-red-600' : 'cursor-pointer text-[#222] hover:text-red-600'}
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => setPage('activity1')}
          className={page === 'activity1' ? 'cursor-pointer font-semibold text-red-600' : 'cursor-pointer text-[#222] hover:text-red-600'}
        >
          Activity 1
        </button>
        <button
          type="button"
          disabled
          className="cursor-not-allowed text-gray-400"
          title="Activity 2 is not available yet"
        >
          Activity 2
        </button>
        <button
          type="button"
          disabled
          className="cursor-not-allowed text-gray-400"
          title="Activity 3 is not available yet"
        >
          Activity 3
        </button>
        <button
          type="button"
          disabled
          className="cursor-not-allowed text-gray-400"
          title="Activity 4 is not available yet"
        >
          Activity 4
        </button>
        <button
          type="button"
          onClick={() => setPage('activity5')}
          className={page === 'activity5' ? 'cursor-pointer font-semibold text-red-600' : 'cursor-pointer text-[#222] hover:text-red-600'}
        >
          Activity 5
        </button>
      </div>
    </nav>
  )
}

export default Navbar
