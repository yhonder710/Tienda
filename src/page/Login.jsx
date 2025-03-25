import { ButtonDiscord, ButtonFace, ButtonGoogle } from '../components/Login/button-login.jsx'
import { UserAuth } from '../context/AuthContext.jsx'
import '../components/Login/login.css'



const Login = () => {
  const { signInWithGoogle, signInWithFacebook, signInWithDiscord, signOut, user } = UserAuth()


  return (
    <div className='fondo grid place-content-center min-h-screen'>
     <div className="card flex flex-col gap-5 px-40 p-20 rounded-2xl">
       <section>
         <img className='imagen w-50 rounded-4xl' src="https://static.vecteezy.com/system/resources/previews/005/076/592/non_2x/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg" alt="" />
       </section>
       <section>
         <h1 className="text-6xl font-bold text-center title">LOGIN</h1>
       </section>
       <section className="flex flex-col gap-2.5">
         <ButtonGoogle click={signInWithGoogle}/>
         <ButtonFace click={signInWithFacebook}/>
         <ButtonDiscord click={signInWithDiscord}/>
       </section>
     </div>
    </div>
  )
}

export default Login
