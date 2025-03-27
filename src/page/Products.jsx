import { useState } from "react"
import { apiProducts } from "../services/productApi.js"
import { useEffect } from "react"

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    apiProducts({setProducts})
  },[])

  console.log(products)


  return (
    <div className="pt-10">
      <h2 className="text-4xl text-center font-bold">Products</h2>

      <section>
        <ul>
          <li>
            <input type="text" placeholder="Busca tu producto ideal" />
          </li>
          <li>
            <div>
             <label for="fruits">Choose a fruit:</label>
              <select id="fruits" name="fruits">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="cherry">Cherry</option>
              </select>
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Products
