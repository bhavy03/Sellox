/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setCurrentCard } from "../redux/features/cardSlice";

const Cards = ({ card }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setCurrentCard(card))
    }
    const image = card.imageName;
    // console.log(image)
    // const normalizedImagePath = card.imagePath.replace(/\\/g, '/');
    // console.log(normalizedImagePath)
    return (
        <>
            <div onClick={handleClick}>
                <Link to={`/card/${card._id}`}>
                    <div className="rounded-md bg-slate-100 shadow-md">
                        <div className="w-60 h-60 flex flex-col p-2">
                            <div className="h-2/3">
                                <img src={`../images/${image}`} alt={card.productName} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p>{card.price}</p>
                                <p>{card.productName}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Cards
