import { Link, useLocation } from "react-router-dom"
import { UserAuth } from "../context/AuthContext.jsx"
import { useState } from "react"
import { useEffect } from "react"



export function Naybar () {
  const { signOut } = UserAuth()
  const location = useLocation()
  const [button, setButton] = useState(true)



  useEffect(() => {
  if (location.pathname === '/login'){
    setButton(false)
  }
 },[location])
 const boton = button ? <button onClick={signOut} className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 cursor-pointer w-auto"> Sign Out</button> : ''



  return (
      <div className="flex justify-between items-center text-3xl font-bold bg-transparent p-5">
         <div>
          <Link className="border-b-3 rounded-4xl p-1.5" to={'/'}>Home</Link>
         </div>
         <div className="flex gap-10 border-3 rounded-4xl p-3 justify-items-center">
          <Link to={'/envios'}>Envios</Link>
          <Link to={'/products'}>Products</Link>
          <Link to={'/promociones'}>Promociones</Link>
         </div>
         <div>
         {boton}
         </div>
      </div>
  )
}
