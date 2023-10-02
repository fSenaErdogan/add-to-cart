import { Link } from "react-router-dom"



const NotFound = () => {


    return (
         <div className="w-full h-[50dvh] grid place-content-center text-center">
            <h1 className="text-xl">
            Aradiginiz sayfa bulunamadi. <br />
            Lutfen <Link style={{
                "color": "rgb(186 157 96)"
            }} to="/">buraya</Link> tiklayarak anasayfa donebilirsiniz.
        </h1>
        </div>
    )
}



export default NotFound