import { useState, useEffect, useContext, createContext } from "react";
import { supabase } from "../supabase/supabase.config.jsx";
import { useNavigate } from "react-router-dom";

const  AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([])
  const navigate = useNavigate()

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

      if (error) throw new Error('A ocurrido un error en la autenticacion')
      return data;
    } catch (error) {
      console.error(error)
    }

  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    navigate(0)
    if (error) throw new Error('A ocurrido un error durante el cierre de seccion')
  }

  useEffect(() => {
    const {data:authListener} = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session == null){
        navigate('/login', {replace:true})
      } else {
        setUser(session?.user.user_metadata)
        navigate('/', {replace:true})
      }
    })

    return ()=>{
      //se esta suscribiendo a el useEffect
      authListener.subscription
    }
  },[])

  return (
    <AuthContext.Provider value={{signInWithGoogle, signOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}


export const UserAuth=()=>{
  return useContext(AuthContext)
}
