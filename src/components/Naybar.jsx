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
    /*  nav */
      <nav className={classNav}>
        {/* section 1 */}
         <div className="flex w-full justify-between items-center py-2.5 px-4 text-[18px] bg-indigo-600">
          <div>
            <Link className="home" to={'/'}><MdLaptop size={25}/> Home</Link>
          </div>
          <div className="flex gap-5">
            <Link className="border-color" to={'/envios'}><FaTruck/> Envios</Link>
            <Link className="border-color" to={'/products'}><BsBagDashFill/> Products</Link>
            <Link className="border-color" to={'/promociones'}><BsCurrencyDollar/> Promociones</Link>
          </div>
          <button onClick={signOut} className="button-salir">Sign Out <MdExitToApp size={25}/></button>
         </div>
          {/* section 2 */}
         <div className="nam flex w-full justify-between items-center py-2 px-4 text-[18px] bg-[#24292F]">
          <div className="flex gap-4 items-center">
            <img src={user.avatar_url} className="h-10 rounded-full" alt="" />
            <strong>{user.name}</strong>
          </div>
          <div>
            <FaShoppingCart/>
          </div>
         </div>
      </nav>
  )
}
