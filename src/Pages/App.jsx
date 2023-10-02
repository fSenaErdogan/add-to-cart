
import { useEffect, useState } from "react"
import UrunKutusu from "../components/UrunKutusu"
import Loading from "../components/Loading"


function App() {

  const [products, setProducts] = useState([])


  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Kazak",
          price: "250 TL",
          size: ["xxl", "xl", "l", "m", "s"],
          color: ["Siyah", "Mavi", "Kırmızı", "Yeşil"],
          images: "kazak.jpg",
          star: "4"
        },
        {
          id: 2,
          name: "Pantolon",
          price: "120 TL",
          size: ["xl", "l", "m"],
          color: ["Siyah", "Beyaz", "Pembe", "Mavi"],
          images: "pantolon.jpg",
          star: "3"
        },
        {
          id: 3,
          name: "BotBot Bot fe Bot Bot gtf Bot gdfr hyg hytgf",
          price: "130 TL",
          size: ["44", "42", "40"],
          color: ["Kahverengi", "Beyaz", "Pembe", "Mor"],
          images: "bot.jpg",
          star: "4"
        }
      ])
    }, 1000)
  }, [])


  return (
    <>
      {
        (products.length > 0 ) ? (
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
