
import { useEffect, useState } from "react"
import UrunKutusu from "../components/UrunKutusu"
import Loading from "../components/Loading"
import axios from "axios"
// import OffCanvas from "../components/OffCanvas"

function App() {


  const [products, setProducts] = useState([])
  const [tabs, setTabs] = useState([])
  const [activeTab, setActiveTab] = useState(1)


  const fetchProducts = async () => {
    const products = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
    setProducts(products.data)
  }

  const fetchTabs = async () => {
    const tabs = await axios.get(`${import.meta.env.VITE_API_URL}/tabs`)
    setTabs(tabs.data)
  }

  useEffect(() => {
    fetchProducts()
    fetchTabs()
  }, [])

  return (
    <>
      {
        (tabs.length > 0) ? (
          <div className="h-fit my-2">
            <div className="tabbuttons m-3 mb-0 flex gap-3 text-white">
              {tabs.map((tab, index) => (
                <button key={index} onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1 w-fit rounded-t-md
                  ${activeTab === tab.id ? "bg-brown-light/60" : "bg-brown-normal/60"}`}>
                  {tab.name}
                </button>
              ))}
            </div>
            
              {tabs.map((tab) => (
                <div className={`${activeTab !== tab.id && "hidden"}`}>
                  <div className="bg-brown-light/60 p-4 rounded-md ">
                    children ile alınmalı tab içeriği componentine
                  </div>
                </div>
              ))}
            
          </div>
        ) : <Loading />
      }

      {
        (products.length > 0) ? (
          <div className='grid grid-cols-5 gap-2'>
            {products.map((product, index) => (
              <UrunKutusu key={index} product={product} />
            ))}
          </div>
        ) : <Loading />
      }
      {/* <OffCanvas /> */}

    </>
  )
}

export default App
