export function Header () {
  return (
    <header>
      <nav className="w-full py-3 px-5 text-[20px] font-bold">
        <ul className="flex justify-between items-center">
          <li className="bg-indigo-500 py-1.5 px-4 rounded-3xl">
            <a href="#">Home</a>
          </li>
          <li className="flex gap-8 bg-indigo-500 py-1.5 px-5 rounded-3xl">
            <a href="#">Quienes somos</a>
            <a href="#">Category</a>
            <a href="#">Promociones</a>
          </li>
          <li className="bg-indigo-500 py-1.5 px-4 rounded-3xl flex gap-3">
            <button>Sign In</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
