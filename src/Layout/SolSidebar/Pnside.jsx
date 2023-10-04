import { Link } from "react-router-dom"

const Pnside = ({link, children}) => {

    return(
        <div className="text-brown-normal
         hover:bg-brown-light hover:bg-opacity-10 transition-all delay-200 ease-in hover:ease-out">
            <Link to={link} className="text-xs m-2 p-1 ">{children}</Link>
        </div>
    )
}

export default Pnside