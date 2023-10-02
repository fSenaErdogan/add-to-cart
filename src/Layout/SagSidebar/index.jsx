import { useState } from "react"


const SagSidebar = () => {

  const [isOpen, setIsOpen] = useState(null);

  



  return (
    <>
      {/* SAĞ SİDEBAR */}
      <div className=' w-1/5 p-2'>

        <div className="border p-1 px-2 relative mb-4">
          <button 
          onClick={() => setIsOpen(1)}
          className="text-sm text-brown-dark">
            Alışveriş Sepeti (0)
          </button>
          {/* burada şu an manü açık mı açıksa neler listelenecek bunları yazmalısın */}
          <div className={`${isOpen !== 1 && "hidden" }`}>
            wergrte
          </div>
        </div>

        <div className="border p-1 px-2 relative">
          <button 
          onClick={() => setIsOpen(2)}
          className="text-sm text-brown-dark">
            Favoriler (0)
          </button>
          {/* burada şu an manü açık mı açıksa neler listelenecek bunları yazmalısın */}
          <div className={`${isOpen !== 2 && "hidden" }`}>
            wergrte
          </div>
        </div>

      </div>
    </>
  )
}

export default SagSidebar