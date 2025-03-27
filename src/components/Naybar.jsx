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
  const [cart, setCart] = useState(false)


  useEffect(() => {
  if (location.pathname === '/login'){
    setNav(false)
  }
 },[location])

  const classNav = nav ? 'nav on' : 'nav'
  const classCart = cart ? 'cart on' : 'cart'
  const classContentCart = cart ? 'contentCard on' : 'contentCard'

 const handleCart = () => {
  setCart(!cart)
 }

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
          <button type="button" onClick={signOut} className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#000000]  cursor-pointer w-auto gap-2">Sign Out <MdExitToApp size={25}/></button>
         </div>
          {/* section 2 */}
         <div className="nam flex w-full justify-between items-center py-2 px-5 text-[18px] bg-[#24292F]">
          <section className="flex gap-4 items-center">
            <img src={user.avatar_url} className="h-10 w-auto rounded-full" alt="" />
            <strong>{user.name}</strong>
          </section>
          <section className=" flex flex-col justify-center items-center">
            <button onClick={handleCart} type="button" className="cursor-pointer pr-3">
              <FaShoppingCart size={25}/>
            </button>
            <div className={classCart}>
              <article className={classContentCart}>
                <h2>hola mundo</h2>
              </article>
            </div>
          </section>
         </div>
      </nav>
  )
}
