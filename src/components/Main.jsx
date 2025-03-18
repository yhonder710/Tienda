import { Card } from "../ui/Card";

export function Main () {
  return (
    <main className=" h-full px-5 flex flex-col gap-10">
      <section className="h-[95vh] flex justify-center items-center">
        <div className="h-140 w-[80%] flex flex-col gap-10 justify-center text-center">
          <h1 className="text-7xl">Tienda de <strong className="text-indigo-500 font-bold">PC</strong></h1>
          <p className="text-left text-[20px] p-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima autem iusto rem nobis, voluptatum quis sed dignissimos? Natus odio quis veritatis, obcaecati placeat ea quaerat saepe, illum voluptas sunt maiores?</p>
        </div>
       <div className="h-140 w-full flex flex-col justify-center items-center gap-5 ">
        <img src="https://img2.rtve.es/i/?w=1600&i=1641549650594.jpg" className="rounded-3xl border-2 border-white/40 shadow-2xs" />
        <p className="text-5xl text-indigo-500 font-bold">Compra en tu sitio ideal</p>
       </div>
      </section>

    <section className="h-[95vh] flex gap-10">
      <section className="h-full w-full border-2 border-indigo-500/40 rounded-2xl">
        <div className="flex flex-col items-center justify-between h-full p-5">
        <h3 className="text-4xl font-bold">Informacion de la tienda</h3>
        <p className="text-[20px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid eius veniam cumque nihil voluptates suscipit sequi amet veritatis sapiente, modi necessitatibus consequatur blanditiis porro recusandae sit quis nemo et ducimus?</p>
        <img className="rounded-3xl" src="https://industriamusical.com/wp-content/uploads/2023/01/The_Weeknd.jpg" />
        </div>
      </section>
      <section className="h-full w-full border-2 border-indigo-500/40 rounded-2xl">
        <div className="h-full grid grid-cols-4 grid-rows-4 p-5 gap-5">
         <picture className="col-span-3 row-span-3">
         <img src="https://media.npr.org/assets/img/2022/01/13/dfm-cover-clean_sq-746b309df3f180824289be8d7b4a5e5c4b74ad14.jpg?s=1100&c=50&f=jpeg" alt="" className="rounded-3xl h-full"/>
         </picture>
          <div className="bg-indigo-500 row-span-3 rounded-3xl"></div>
          <div className="text-[18px] row-start-4 col-span-4 flex items-center">
            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dolorem est omnis incidunt voluptate nesciunt, maxime ratione quo voluptatem ab nisi, in fuga magni quibusdam suscipit ducimus. Ut, mollitia sit!</p>
          </div>
        </div>
      </section>
    </section>

    <section className="h-[95vh]">
      <div className="h-full flex flex-col gap-5">
       <h3 className="text-5xl text-center">Combos y promociones</h3>
        <div className="grid grid-cols-4 grid-rows-4 h-full gap-5 ">
          <section className="bg-indigo-500 col-span-2 row-span-3">1</section>
          <section className="bg-blue-500 row-start-4 col-span-2">2</section>
          <section className="bg-yellow-500">3</section>
          <section className="bg-green-500 row-span-3 col-start-3">4</section>
         <section className="bg-red-500 row-span-4 col-start-4 row-start-1">5</section>
        </div>
        <button>Ver mas</button>
      </div>
    </section>

    <section className="flex flex-col gap-5">
        <div className="flex gap-5 justify-between">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <button>Ver mas</button>
    </section>
    </main>
  )
}
