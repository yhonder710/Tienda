import { CardProducts } from "./card-products.jsx"


export function SectionProducts ({products}) {
  return (
    <section className="w-full p-5">
      <ul className="flex flex-wrap w-full justify-center gap-10">
        {
          products.slice(0, 10).map(product => {
            return (
              <li key={product.id}>
                <CardProducts title={product.title} description={product.description} price={product.price} image={product.thumbnail}/>
              </li>
            )
          })
        }
        </ul>
      </section>
  )
}
