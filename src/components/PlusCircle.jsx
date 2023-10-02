import { AiFillPlusCircle, AiOutlinePlusCircle } from "react-icons/ai"

const PlusCircle = (props) => {
    return (
        <>
            {props.open ?
                <AiFillPlusCircle {...props} />
                :
                <AiOutlinePlusCircle {...props} />
            }
        </>
    )
}

export default PlusCircle