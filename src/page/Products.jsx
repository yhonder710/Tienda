import { useState } from "react"
import { apiProducts } from "../services/productApi.js"
import { useEffect } from "react"
import { SectionProducts } from "../components/products/section-products.jsx"
import { useFilter } from "../hook/useFilter.js"

const Products = () => {
  const [products, setProducts] = useState([])
  const {filterProducts} = useFilter()

  useEffect(() => {
    apiProducts({setProducts})
  },[])




  return (
    <div className="pt-10 flex flex-col gap-10">
      <h2 className="text-4xl text-center font-bold">Products</h2>

      <section>
        <ul className="flex justify-between px-5 items-center">
          <li>
            <input type="text" placeholder="Busca tu producto ideal" className="border-2 border-white" />
          </li>
          <li className="flex gap-8">
            <div className="flex gap-2">
             <label htmlFor="fruits">Categoria:</label>
              <select id="fruits" name="fruits" className="rounded-2xl">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="cherry">Cherry</option>
              </select>
            </div>
            <div>
              <input type="text" placeholder="valor" className="w-20 border-white border-2"/>
            </div>
          </li>
        </ul>
      </section>

      <SectionProducts products={products}/>
    </div>
  )
}

export default Products
