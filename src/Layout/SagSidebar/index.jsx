import { useState } from "react"
import { useSelector } from "react-redux"
import Star from "../../components/Star";
import Price from "../../components/UrunKutusu/Price";


const SagSidebar = () => {

  const [isOpen, setIsOpen] = useState(null);

  const { favoriteList } = useSelector((state) => state.favoriteStore);


  return (
    <>
      {/* SAĞ SİDEBAR */}
      <div className=' w-1/5 p-2'>

        <div className="p-2 relative mb-4 bg-brown-light bg-opacity-30">
          <button
            onClick={() => setIsOpen(1)}
            className="text-sm text-brown-dark p-1">
            Alışveriş Sepeti (0)
          </button>
          
          <div className={`${isOpen !== 1 && "hidden"}`}>
            
          </div>
        </div>

        <div className="p-2 relative bg-brown-light bg-opacity-30">

          <button
            onClick={() => setIsOpen(2)}
            className="text-sm text-brown-dark p-1">
            Favoriler ({favoriteList.length})
          </button>

          <div className={`${isOpen !== 2 && "hidden"}`}>
            {
              favoriteList.map((item, index) => (
                <div className="flex justify-center items-center gap-6 mt-3 bg-stone-100 bg-opacity-90">
                  <div>
                    <img src={item.images} className="w-12 h-12 object-cover ml-2" alt={item.name} />
                  </div>
                  <div className="text-sm text-brown-dark">
                    {item.name}
                  </div>
                  <div>
                    <div className="p-1 text-brown-normal">
                      <Price>
                        {item.price}
                      </Price>
                    </div>
                    <div className="flex p-1">
                      <Star product={item} />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

        </div>

      </div>
    </>
  )
}

export default SagSidebar