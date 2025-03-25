import { FcGoogle } from "react-icons/fc";
import { BsDiscord } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export function ButtonGoogle ({ click }) {
  return (
    <button onClick={click} className="saturate-0 hover:saturate-100 bg-white rounded-full p-0.5 flex text-black items-center gap-3 group justify-center button pr-1 cursor-pointer">
      <FcGoogle size={40} />
      <strong>Google</strong>
    </button>

  )
}

export function ButtonDiscord ({ click }) {
  return (
    <button onClick={click} className="saturate-0 hover:saturate-100 bg-white rounded-full p-0.5 flex text-black items-center gap-3 group justify-center button pr-1 cursor-pointer">
      <BsDiscord size={40} color="#5865F2" />
      <strong>Discord</strong>
    </button>

  )
}

export function ButtonFace ({ click }) {
  return (
    <button onClick={click} className="saturate-0 hover:saturate-100 bg-white rounded-full p-0.5 flex text-black items-center gap-3 group justify-center button pr-1 cursor-pointer">
      <BsFacebook size={40} color="#0B5AC6" />
      <strong>Facebook</strong>
    </button>

  )
}
