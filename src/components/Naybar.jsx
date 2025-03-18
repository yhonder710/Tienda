import { Link } from "react-router-dom";

export function Naybar () {
  return (
    <div className="flex gap-5">
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    </div>
  )
}
