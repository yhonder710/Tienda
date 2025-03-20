import { ButtonLogin } from '../components/button-login.jsx'
import { UserAuth } from '../context/AuthContext.jsx'

const Login = () => {
  const { signInWithGoogle, signOut, user } = UserAuth()

  return (
    <>
      <h1 className="text-6xl font-bold text-center">LOGIN</h1>
      <ButtonLogin click={signInWithGoogle}/>
    </>
  )
}

export default Login
