
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
          name: "Bot",
          price: "130 TL",
          size: ["44", "42", "40"],
          color: ["Kahverengi", "Beyaz", "Pembe", "Mor"],
          images: "bot.jpg",
          star: "4"
        },
        {
          id: 4,
          name: "Elbise",
          price: "170 TL",
          size: ["44", "42", "40"],
          color: ["Kahverengi", "Beyaz", "Pembe", "Mor"],
          images: "elbise.jpg",
          star: "1"
        },
        {
          id: 5,
          name: "Bere",
          price: "50 TL",
          size: ["büyük", "Orta", "Küçük"],
          color: ["Siyah", "Mavi", "Kırmızı", "Yeşil"],
          images: "bere.jpg",
          star: "2"
        },
        {
          id: 6,
          name: "Blazer Ceket",
          price: "250 TL",
          size: ["xxl", "xl", "l", "m", "s"],
          color: ["Siyah", "Mavi", "Kırmızı", "Yeşil"],
          images: "blazer.jpg",
          star: "4"
        },
        {
          id: 7,
          name: "Pijama",
          price: "180 TL",
          size: ["xxl", "xl", "l", "m", "s"],
          color: ["Beyaz", "Pembe", "Mor", "Siyah"],
          images: "pijama.jpg",
          star: "3"
        },
        {
          id: 8,
          name: "Sweatshirt",
          price: "150 TL",
          size: ["xxl", "xl", "l", "m", "s"],
          color: ["Siyah", "Bordo", "Gri", "Yeşil"],
          images: "sweatshirt.jpg",
          star: "2"
        },
        {
          id: 9,
          name: "Tulum",
          price: "300 TL",
          size: ["xxl", "xl", "l", "m", "s"],
          color: ["Siyah", "Beyaz", "Mavi", "Kahverengi"],
          images: "tulum.jpg",
          star: "3"
        },
        {
          id: 10,
          name: "Spor Ayakkabı",
          price: "350 TL",
          size: [ "38", "39", "40"],
          color: ["Beyaz", "Siyah", "Mavi", "Gri"],
          images: "ayakkabi.jpg",
          star: "1"
        },
        {
          id: 11,
          name: "Hırka",
          price: "200 TL",
          size: ["xxl", "xl", "l", "m", "s"],
          color: ["Gri", "Beyaz", "Siyah", "Mavi"],
          images: "hirka.jpg",
          star: "5"
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
