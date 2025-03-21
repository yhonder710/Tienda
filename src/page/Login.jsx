import { ButtonLogin } from '../components/button-login.jsx'
import { UserAuth } from '../context/AuthContext.jsx'

const Login = () => {
  const { signInWithGoogle, signOut, user } = UserAuth()

  return (
    <div className='bg-indigo-900'>
     <div className="grid place-content-center min-h-screen">
       <section>
         <img className='w-50 rounded-4xl' src="https://static.vecteezy.com/system/resources/previews/005/076/592/non_2x/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg" alt="" />
       </section>
       <section>
         <h1 className="text-6xl font-bold text-center">LOGIN</h1>
       </section>
       <section>
         <ButtonLogin click={signInWithGoogle}/>
       </section>
     </div>
    </div>
  )
}

export default Login
