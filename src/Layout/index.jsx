
import Header from "./Header"
import Footer from "./Footer"
import Solsidebar from "./SolSidebar"
import SagSidebar from "./SagSidebar"
import { Outlet } from "react-router-dom"

const Layout = () => {


    return (
        <div className='bg-stone-50'>
            <Header />
            {/* main */}
            <div className='shadow-inner gap-1 flex min-h-screen'>
                <Solsidebar />
                <div className="w-3/5 p-2 ">
                <Outlet />

                </div>
                <SagSidebar />
            </div>
            <Footer />
        </div>

    )
}


export default Layout