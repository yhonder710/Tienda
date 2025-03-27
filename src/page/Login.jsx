import { ButtonDiscord, ButtonFace, ButtonGoogle } from '../components/Login/button-login.jsx'
import { UserAuth } from '../context/AuthContext.jsx'
import '../components/Login/login.css'



const Login = () => {
  const { signInWithGoogle, signInWithFacebook, signInWithDiscord, signOut, user } = UserAuth()


  return (
    <div className='fondo grid place-content-center min-h-screen'>
     <div className="card">
       <section>
         <img className='imagen w-50 rounded-4xl' src="https://static.vecteezy.com/system/resources/previews/005/076/592/non_2x/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg" alt="" />
       </section>
       <section className='flex flex-col'>
         <h1 className="text-[50px] font-bold text-center title">Inicia con</h1>
       </section>
       <section className="flex gap-6 justify-center items-center">
         <ButtonGoogle click={signInWithGoogle}/>
         <ButtonFace click={signInWithFacebook}/>
         <ButtonDiscord click={signInWithDiscord}/>
       </section>
     </div>
    </div>
  )
}

export default Login
