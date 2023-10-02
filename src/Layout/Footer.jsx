

import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"



const Footer = () => {

    return (
        <>
            {/* footer */}
            <div className='text-center p-5 shadow-inner text-brown-dark'>
                <div className="flex gap-3 justify-center pb-4">
                    <Link to='/instagram' className="">
                        <AiOutlineInstagram size={22} />
                    </Link>
                    <Link to='/facebook' className="">
                        <AiOutlineFacebook size={22} />
                    </Link>
                    <Link to='/youtube' className="">
                        <AiOutlineYoutube size={22} />
                    </Link>
                    <Link to='/twitter' className="">
                        <FaXTwitter size={20} />
                    </Link>
                </div>
                <p className="pb-3 text-sm">
                    Bu sayfanın içeriği telif hakları ile korunmaktadır Odrena’ya aittir.
                </p>

                <div className='flex justify-center pb-3'> 
                    <Link to="/">
                        <img className="h-[54px]" src="odrena_logo.png" alt="logo" />
                    </Link>
                </div>
                <p className=" text-sm">
                    Türkiye | TL
                </p>

            </div>

        </>
    )
}

export default Footer