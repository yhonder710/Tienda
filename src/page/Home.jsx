import { useApi } from '../hook/useApi.js'


const Home = () => {
  const {data} = useApi()

  console.log(data)

  return (
    <>
    <div className=''>
      <h1 className="text-center text-5xl font-bold pt-5">Bienvenido querido usuario</h1>
      </div>
    </>
  )
}

export default Home
