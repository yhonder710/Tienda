import { Link } from "react-router-dom"

export function Naybar () {
  return (
    <div className="flex gap-5">
      <Link to={'/'}>Home</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/envios'}>Envios</Link>
      <Link to={'/products'}>Products</Link>
      <Link to={'/promociones'}>Promociones</Link>
    </div>
  )
}
