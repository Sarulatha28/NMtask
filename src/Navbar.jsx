import React from 'react'

 const Navbar = () => {
  return (
    <div>
        <nav className="bg-[#2D2F33] font-mono flex items-center justify-between text-white font-bold text-xl px-10 w-full h-16 fixed top-0 z-50">
        <span>ShopNest</span>
        <div className="flex items-center gap-3">
          <button className="text-white rounded flex gap-2">🤍</button>
          <button className="rounded hover:bg-[#2563EB] px-2 py-1">
            <span className="block sm:hidden">🛒</span>
            <span className="hidden sm:block">🛒 Cart</span>
          </button>
          <button className="px-2 py-1 rounded hover:bg-[#2563EB]">
            <span className="block sm:hidden">Log in</span>
            <span className="hidden sm:block">Log in</span>
          </button>
        </div>
      </nav>

    </div>
  )
}
export default Navbar;