import { Route, Routes } from "react-router-dom"
import Home from "./page/Home.jsx"
import About from "./page/About.jsx"
import { Naybar } from "./components/Naybar.jsx"


function App() {


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
