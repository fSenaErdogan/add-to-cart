import BookmarkHeart from "../BookmarkHeart"
import PlusCircle from "../PlusCircle"
import Star from "../Star"
import Price from "./Price"
import { useDispatch, useSelector } from "react-redux"
import { favoriteAdd, favoriteRemove } from "../../Store/favoritesStore"
import { productAdd, productRemove } from "../../Store/productStore"
import { Link } from "react-router-dom"

const UrunKutusu = ({ product }) => {

    const { id } = product

    const dispatch = useDispatch()
    const { favoriteList } = useSelector((state) => state.favoriteStore);
    const { productList } = useSelector((state) => state.productStore);

    const productToggle = () => {
        const isProduct = productList.some(ss => ss.id === product.id);
        if (isProduct) {
            dispatch(productRemove(product.id));
        } else {
            dispatch(productAdd(product));
        }
    };

    const favoriteToggle = () => {
        const isFavorite = favoriteList.some(ss => ss.id === product.id);
        if (isFavorite) {
            dispatch(favoriteRemove(product.id));
        } else {
            dispatch(favoriteAdd(product));
        }
    };

    return (
        <div className="bg-stone-100 border p-1 flex flex-col justify-between text-brown-normal">
            <div className="aspect-w-1">
                <div className="flex justify-between p-1 column-3">


                    <button onClick={productToggle} >
                        <PlusCircle open={productList.find(pitem => pitem.id === id)} size={21} color="rgb(186 157 96)" /> {/* open propu geçilirse icon değişir  */}
                    </button>

                    <Star product={product} />
                    

                    <button onClick={favoriteToggle} >
                        <BookmarkHeart open={favoriteList.find(item => item.id === id)} size={22} color="rgb(186 157 96)" />  {/* open propu geçilirse icon değişir  */}
                    </button>

                </div>

                <Link to={`/product_detail/${product.name}`}>
                    <img className="object-cover w-full h-[200px]" src={product.images} alt={product.name} />
                </Link>
            </div>
            <div className=" border-t border-brown-light h-full m-1 p-1">

                <Link to={`/product_detail/${product.name}`} className="text-sm py-1">
                    {product.name.length > 19 ? product.name.slice(0, 19) + "..." : product.name}
                </Link>

                <Price>{product.price}</Price>
            </div>
        </div>
    )
}


export default UrunKutusu