import { Link, useLocation } from "react-router-dom"
import { UserAuth } from "../context/AuthContext.jsx"
import { useState, useEffect } from "react"
import { MdExitToApp } from "react-icons/md";
import { MdLaptop } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsBagDashFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



export function Naybar () {
  const { signOut, user } = UserAuth()
  const location = useLocation()
  const [nav, setNav] = useState(true)


  useEffect(() => {
  if (location.pathname === '/login'){
    setNav(false)
  }
 },[location])

 const classNav = nav ? 'nav on' : 'nav'



  return (
      <nav className={classNav}>
         <div className="flex w-full justify-between items-center py-2 px-4 text-[18px] bg-indigo-600">
          <div>
            <Link className="flex items-center gap-1.5" to={'/'}><MdLaptop size={25}/> Home</Link>
          </div>
          <div className="flex gap-5">
            <Link className="flex items-center gap-1.5" to={'/envios'}><FaTruck/> Envios</Link>
            <Link className="flex items-center gap-1.5" to={'/products'}><BsBagDashFill/> Products</Link>
            <Link className="flex items-center 0.5" to={'/promociones'}><BsCurrencyDollar/> Promociones</Link>
          </div>
          <button onClick={signOut} className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30  cursor-pointer w-auto gap-2">Sign Out <MdExitToApp size={25}/></button>
         </div>

         <div className="flex w-full justify-between items-center py-2 px-4 text-[18px] bg-indigo-600">
          <div className="flex gap-2 items-center">
            <img src={user.avatar_url} className="h-8 rounded-full" alt="imagen del usuario" />
            <strong>{user.name}</strong>
          </div>
          <div>
            <FaShoppingCart/>
          </div>
         </div>
      </nav>
  )
}
