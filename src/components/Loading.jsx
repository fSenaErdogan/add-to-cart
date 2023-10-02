
import {AiOutlineLoading3Quarters} from "react-icons/ai"


const Loading = () => {


    return (
        <div className="h-screen w-full grid place-content-center">
            <AiOutlineLoading3Quarters color="#624F1D" className="animate-spin" size={24} />
        </div>
    )
}


export default Loading