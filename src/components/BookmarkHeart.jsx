import { BiSolidBookmarkHeart, BiBookmarkHeart } from "react-icons/bi"


const BookmarkHeart = (props) => {
    return (
        <>
            {props.open ?
                <BiSolidBookmarkHeart {...props} />
                :
                <BiBookmarkHeart {...props} />
            }
        </>
    )
}

export default BookmarkHeart