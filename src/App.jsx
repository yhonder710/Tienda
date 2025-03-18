import { Route, Routes } from "react-router-dom"
import Home from "./page/Home.jsx"
import About from "./page/About.jsx"
import { Naybar } from "./components/Naybar.jsx"
import { useState } from "react"
import { useEffect } from "react"


function App() {
  const [data, setData] = useState()

  const datosProduct = async () => {
    const reponse = await fetch('https://dummyjson.com/products')
    const results = await reponse.json()
    setData(results)
  }

  useEffect(() => {
    datosProduct()
  },[])

  console.log(data)

  return (
  <div className="grid place-content-center min-h-screen">
  </div>

  )
}

export default App
