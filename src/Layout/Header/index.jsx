
import { Link } from "react-router-dom"
import { BiSolidLogInCircle } from "react-icons/bi"
import { FaHeart } from "react-icons/fa"
import { FaBasketShopping } from "react-icons/fa6"
import { HiDotsCircleHorizontal } from "react-icons/hi"

const Header = () => {

    return (
        <>
            {/* header */}
            <div className='grid grid-cols-3 gap-3 p-1 px-4 text-brown-dark'>

                <div className='flex items-center gap-4'>
                    <Link className=" underline-menu" to='/a'>Müşteri Hizmetleri</Link>
                    <Link className=" underline-menu" to='/a'>Moda Haberleri</Link>
                    <Link className=" underline-menu" to='/a'>Mağaza bul</Link>
                    <HiDotsCircleHorizontal size={22}/>
                </div>
                
                <div className='mx-auto py-1'> 
                    <Link to="/">
                        <img className="h-[54px]" src="/odrena_logo.png" alt="logo" />
                    </Link>
                </div>

                <div className='flex items-center gap-3 ms-auto '>
                    <Link to='/login' className="flex items-center gap-2 underline-menu">
                        <BiSolidLogInCircle size={21} />
                        <span>Oturum aç</span>
                    </Link>
                    <Link to='/favorites' className="flex items-center gap-2 underline-menu">
                        <FaHeart size={18}/>
                        <span>Favoriler</span>
                    </Link>
                    <Link to='/cart' className="flex items-center gap-2 underline-menu">
                        <FaBasketShopping size={19}/>
                        <span>Alışveriş Sepeti (0)</span>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Header