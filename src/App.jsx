import { useApi } from './hook/useApi.js'

function App() {

  const { data } = useApi()

  console.log(data)


  return (
  <div className="grid place-content-center min-h-screen">
  </div>

  )
}

export default App
