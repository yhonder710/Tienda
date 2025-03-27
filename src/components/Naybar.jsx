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
         <ul className="barra-arriba">
          <li>
            <Link className="home" to={'/'}><MdLaptop size={25}/> Home</Link>
          </li>
          <li className="flex gap-5">
            <Link className="border-color" to={'/envios'}><FaTruck size={25}/> Envios</Link>
            <Link className="border-color" to={'/products'}><BsBagDashFill size={25}/> Products</Link>
            <Link className="border-color" to={'/promociones'}><BsCurrencyDollar size={25}/> Promociones</Link>
          </li>
          <li>
          <button type="button" onClick={signOut} className="button-salir">Sign Out <MdExitToApp size={25}/></button>
          </li>
         </ul>
          {/* section 2 */}
         <section className="nam">
          <article className="flex gap-4 items-center">
            <img src={user.avatar_url} className="h-10 w-auto rounded-full" alt="" />
            <strong>{user.name}</strong>
          </article>
          {/* carrito */}
          <div className=" flex flex-col justify-center items-center">
            <button onClick={handleCart} type="button" className="carrito cursor-pointer pr-3">
              <FaShoppingCart size={25}/>
            </button>
            <div className={classCart}>
              <div className={classContentCart}>
                <h2>hola mundo</h2>
              </div>
            </div>
          </div>
         </section>
      </nav>
  )
}
