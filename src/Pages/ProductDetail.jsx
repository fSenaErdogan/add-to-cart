import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Star from "../components/Star"

function ProductDetail() {

  const { name } = useParams()

  const [product, setProduct] = useState(null)

  const fetchProduct = async () => {
    const products = await axios.get(`${import.meta.env.VITE_API_URL}/products?name=${name}`)
    setProduct(products.data[0])
  }


  useEffect(() => {
    fetchProduct()
  }, [])


  return (
    <>
      <div className="">
        {
          product !== null && (
            <div className=" p-4 flex gap-5 ">
              <div className="w-2/5">
                <img src={product.images} className="w-full border" alt="" />
              </div>
              <div className="w-3/5">
                <div className="flex items-center mb-5">
                  <h5 className="text-3xl font-bold mb-4">
                    {product.name}
                  </h5>
                  
                  <div className="ms-auto">
                    <Star product={product} size={20} />
                  </div>
                  
                </div>
                  ergerger
              </div>
            </div>

          )
        }
      </div>
    </>
  )
}

export default ProductDetail
