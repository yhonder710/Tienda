import { Route, Routes } from "react-router-dom"
import Home from "./page/Home.jsx"
import About from "./page/About.jsx"
import { Naybar } from "./components/Naybar.jsx"
import { supabase } from "./supabase/supabase.config.jsx"
import { useEffect } from "react"


function App() {

  useEffect(() => {
    async function datos () {
      const { data } = await supabase
      .from('users')
      .select(`*`)
      console.log(data)
    }

    datos()
  },[])


  return (
  <div className="grid place-content-center min-h-screen">
    <Naybar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
    </Routes>
  </div>

  )
}

export default App
