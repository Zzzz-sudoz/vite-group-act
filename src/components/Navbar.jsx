function Navbar({ page, setPage }) {
  return (
    <nav className="border-b-4 border-[#c9652d] bg-[#211f1b] px-5 py-4 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setPage('activity1')}
          className={page === 'activity1' ? 'cursor-pointer bg-[#c9652d] px-3 py-2 font-semibold text-white' : 'cursor-pointer px-3 py-2 text-[#f5e4d2] hover:bg-[#332f2a] hover:text-white'}
        >
          Activity 1
        </button>
        <button
          type="button"
          onClick={() => setPage('activity2')}
          className={page === 'activity2' ? 'cursor-pointer bg-[#c9652d] px-3 py-2 font-semibold text-white' : 'cursor-pointer px-3 py-2 text-[#f5e4d2] hover:bg-[#332f2a] hover:text-white'}
        >
          Activity 2
        </button>
        <button
          type="button"
          onClick={() => setPage('activity3')}
          className={page === 'activity3' ? 'cursor-pointer bg-[#c9652d] px-3 py-2 font-semibold text-white' : 'cursor-pointer px-3 py-2 text-[#f5e4d2] hover:bg-[#332f2a] hover:text-white'}
        >
          Activity 3
        </button>
        <button
          type="button"
          onClick={() => setPage('activity4')}
          className={page === 'activity4' ? 'cursor-pointer bg-[#c9652d] px-3 py-2 font-semibold text-white' : 'cursor-pointer px-3 py-2 text-[#f5e4d2] hover:bg-[#332f2a] hover:text-white'}
        >
          Activity 4
        </button>
        <button
          type="button"
          onClick={() => setPage('activity5')}
          className={page === 'activity5' ? 'cursor-pointer bg-[#c9652d] px-3 py-2 font-semibold text-white' : 'cursor-pointer px-3 py-2 text-[#f5e4d2] hover:bg-[#332f2a] hover:text-white'}
        >
          Activity 5
        </button>
      </div>
    </nav>
  )
}

export default Navbar
