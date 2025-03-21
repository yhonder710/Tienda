import { Link, useLocation } from "react-router-dom"
import { UserAuth } from "../context/AuthContext.jsx"
import { useState } from "react"
import { useEffect } from "react"



export function Naybar () {
  const { signOut } = UserAuth()
  const location = useLocation()
  const [nav, setNav] = useState(true)



  useEffect(() => {
  if (location.pathname === '/login'){
    setNav(false)
  }
 },[location])

 const classNav = nav ? 'nav on' : 'nav'



  return (
      <div className={classNav}>
         <div>
          <Link className="border-b-3 rounded-4xl p-1.5" to={'/'}>Home</Link>
         </div>
         <div className="flex gap-10 border-3 rounded-4xl p-3 justify-items-center">
          <Link to={'/envios'}>Envios</Link>
          <Link to={'/products'}>Products</Link>
          <Link to={'/promociones'}>Promociones</Link>
         </div>
         <div>
         <button onClick={signOut} className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 cursor-pointer w-auto"> Sign Out</button>
         </div>
      </div>
  )
}
