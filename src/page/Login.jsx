import { ButtonLogin } from '../components/button-login.jsx'
import { UserAuth } from '../context/AuthContext.jsx'

const Login = () => {
  const { signInWithGoogle, signOut, user } = UserAuth()

  return (
    <div className='grid place-content-center min-h-screen'>
        <h1 className="text-6xl font-bold text-center">LOGIN</h1>
        <ButtonLogin click={signInWithGoogle}/>
    </div>
  )
}

export default Login
