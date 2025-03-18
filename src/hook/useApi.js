import { useState } from "react"
import { useEffect } from "react"

export function useApi () {
  const [data, setData] = useState()

  const datosProduct = async () => {
    const reponse = await fetch('https://dummyjson.com/products')
    const results = await reponse.json()
    setData(results)
  }

  useEffect(() => {
    datosProduct()
  },[])

  return { data }
}
