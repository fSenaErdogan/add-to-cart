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
              {/* image */}
              <div className="w-2/5">
                <img src={product.images} className="w-full border" alt="" />
              </div>
              <div className="w-3/5">
                {/* name & star */}
                <div className="flex items-center mb-5">
                  <h5 className="text-3xl font-bold mb-4 text-brown-normal">
                    {product.name}
                  </h5>
                  <div className="ms-auto">
                    <Star product={product} size={20} />
                  </div>
                </div>
                {/* detail */}
                <div className="w-full">
                  {/* sizes */}
                  <div className="flex flex-wrap w-full  items-center mb-2 bg-brown-light/10">
                    <p className="p-2 ps-3 mb-1 bg-brown-light/20 w-full">Boyutlar</p>
                    {product.size.map((sizes, index) => (
                      <div className="" key={index}>
                        <div className="mb-1 w-fit px-2 flex items-center justify-center mr-2">
                          <div className="me-1 border border-brown-dark rounded-full bg-brown-dark w-1 h-1">
                          </div>
                          <p>{sizes}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* colors */}
                  <div className="flex flex-wrap w-full items-center mb-2 bg-brown-light/10">
                    <p className="p-2 ps-3 mb-1 bg-brown-light/20 w-full">Renkler</p>
                    {product.color.map((colors, index) => (
                      <div className="" key={index}>
                        <div className="mb-1 w-fit px-2 flex items-center justify-center mr-2">
                          <div className="me-1 border border-brown-dark rounded-full bg-brown-dark w-1 h-1">
                          </div>
                          <p>{colors}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* price */}
                  <div className="flex flex-wrap w-full items-center mb-2 bg-brown-light/10">
                    <p className="p-2 ps-3 mb-1 bg-brown-light/20 w-full">Fiyat</p>

                    <div className="">
                      <div className="mb-1 w-fit px-2 flex items-center justify-center mr-2">
                        <div className="me-1 border border-brown-dark rounded-full bg-brown-dark w-1 h-1">
                        </div>
                        <p>{product.price}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
                {/* buttons */}
                <div>
                  <div className="columns-2 flex gap-3">
                    <button className="bg-brown-normal/90 w-full hover:scale-105 duration-300 p-2 text-white">
                      Sepete ekle
                    </button>
                    <button className="bg-brown-normal/90 w-full hover:scale-105 duration-300 p-2 text-white">
                      Favorilere ekle
                    </button>
                  </div>
                </div>

              </div>
            </div>

          )
        }
      </div>
    </>
  )
}

export default ProductDetail
