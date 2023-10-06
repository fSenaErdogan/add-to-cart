import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Star = ({ product, size = 10 }) => {

    const stars = [];

    for (let i = 0; i < product.star; i++) {
        stars.push(
            <AiFillStar key={i} size={size} color="rgb(186 157 96)" />
        );
    }

    for (let a = stars.length; a < 5; a++) {
        stars.push(
            <AiOutlineStar key={a} size={size} color="rgb(186 157 96)" />
        );
    }
    return (
        <div className="flex items-center">
            {product.star > 0 ? stars : ""}
        </div>
    )
}

export default Star