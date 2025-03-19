import { Link } from "react-router-dom"

export function Naybar () {
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
          <Link className="border-b-3 rounded-4xl p-2" to={'/login'}>Login</Link>
         </div>
      </div>
  )
}
