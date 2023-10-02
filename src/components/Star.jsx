import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Star = ({product}) => {

    const stars = [];
    
    for (let i = 0; i < product.star; i++) {
        stars.push(
            <AiFillStar key={i} size={10} color="rgb(186 157 96)" />
        );
    }

    for (let a = stars.length; a < 5; a++) {
        stars.push(
            <AiOutlineStar key={a} size={10} color="rgb(186 157 96)" />
        );   
    }
    
    return product.star > 0 ? stars : ""
}

export default Star