
import { useEffect, useState } from "react"
import UrunKutusu from "../components/UrunKutusu"
import Loading from "../components/Loading"
import axios from "axios"


function App() {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const products = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
    setProducts(products.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <>
      {
        (products.length > 0) ? (
          <div className='grid grid-cols-5 gap-2'>
            {products.map((product, index) => (
              <UrunKutusu key={index} product={product} />
            ))}
          </div>
        ) : <Loading />
      }

    </>
  )
}

export default App
