import { FcGoogle } from "react-icons/fc";
import { BsDiscord } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export function ButtonGoogle ({ click }) {
  return (
    <button onClick={click} className="bg-white rounded-full p-0.5 flex text-black items-center gap-3 group justify-center button cursor-pointer">
      <FcGoogle size={50} />
    </button>

  )
}

export function ButtonDiscord ({ click }) {
  return (
    <button onClick={click} className="bg-white rounded-full p-0.5 flex text-black items-center gap-3 group justify-center button cursor-pointer ">
      <BsDiscord size={50} color="#5865F2" />
    </button>

  )
}

export function ButtonFace ({ click }) {
  return (
    <button onClick={click} className="bg-white rounded-full p-0.5 flex text-black items-center gap-3 group justify-center button cursor-pointer ">
      <BsFacebook size={50} color="#0B5AC6" />
    </button>

  )
}
