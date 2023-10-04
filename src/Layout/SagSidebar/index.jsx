import { useState } from "react"
import { useSelector } from "react-redux"
import Star from "../../components/Star";
import Price from "../../components/UrunKutusu/Price";
import Acordion from "../../components/Acordion";


const SagSidebar = () => {

  const [isOpen, setIsOpen] = useState(null);

  const { favoriteList } = useSelector((state) => state.favoriteStore);
  const { productList } = useSelector((state) => state.productStore);


  return (
    <>
      {/* SAĞ SİDEBAR */}
      <div className=' w-1/5 p-1 pr-2 pt-2'>

        <Acordion isOpen={isOpen} setIsOpen={setIsOpen} id={1} title={`Sepet (${productList.length})`} >
          {
            productList.map((item, index) => (
              <div key={index} className="flex items-center gap-5 px-1 mt-3 bg-stone-100 bg-opacity-90">
                <div>
                  <img src={item.images} alt={item.name} className="w-12 h-12 object-cover ml-2" />
                </div>
                <div className="text-sm text-brown-dark">
                  {item.name}
                </div>
                <div className="ms-auto">
                  <div className="p-1 text-brown-normal">
                    <Price>
                      {item.price}
                    </Price >
                  </div>
                  <div className="flex p-1">
                    <Star product={item} />
                  </div>
                </div>
              </div>
            ))
          }
        </Acordion>

        <Acordion isOpen={isOpen} setIsOpen={setIsOpen} id={2} title={`Favoriler (${favoriteList.length})`} >
          {
            favoriteList.map((item, index) => (
              <div key={index} className="flex items-center gap-5 px-1 mt-3 bg-stone-100 bg-opacity-90">
                <div>
                  <img src={item.images} alt={item.name} className="w-12 h-12 object-cover ml-2" />
                </div>
                <div className="text-sm text-brown-dark">
                  {item.name}
                </div>
                <div className="ms-auto">
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
        </Acordion>

        {/*
        <Acordion number="1" title="alişşşverişş" list={productList} >
          <div className="border-brown-light border-t border-opacity-50 mt-2">
            {
              productList.map((item, index) => (
                <div key={index} className="flex justify-center items-center gap-5 px-1 mt-3 bg-stone-100 bg-opacity-90">
                  <div>
                    <img src={item.images} alt={item.name} className="w-12 h-12 object-cover ml-2" />
                  </div>
                  <div className="text-sm text-brown-dark">
                    {item.name}
                  </div>
                  <div>
                    <div className="p-1 text-brown-normal">
                      <Price>
                        {item.price}
                      </Price >
                    </div>
                    <div className="flex p-1">
                      <Star product={item} />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </Acordion>
        */}

      </div>
    </>
  )
}

export default SagSidebar