
import { AuthContextProvider } from './context/AuthContext.jsx'
import { MyRouter } from './router/router.jsx'

function App() {


  return (
    <>
    <AuthContextProvider>
      <MyRouter/>
     </AuthContextProvider>
    </>
  )
}

export default App
