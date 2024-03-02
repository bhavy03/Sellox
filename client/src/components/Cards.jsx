/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setCurrentCard } from "../redux/features/cardSlice";
import { LiaRupeeSignSolid } from "react-icons/lia";

const Cards = ({ card }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setCurrentCard(card))
    }
    const image = card.imageUrl;
    // console.log(card.duration)
    // console.log(image)
    // const normalizedImagePath = card.imagePath.replace(/\\/g, '/');
    // console.log(normalizedImagePath)
    return (
        <>
            <div className="md:pl-5 pl-3">
                <div onClick={handleClick}>
                    <Link to={`/card/${card._id}`}>
                        <div className="rounded-xl my-3 mx-2 bg-white shadow-lg hover:shadow-2xl">
                            <div className="w-60 h-60 flex flex-col p-2">
                                <div className="h-2/3 overflow-hidden object-cover shadow-md rounded-lg">
                                    <img src={image} alt={card.productName} className="w-full h-full object-cover" />
                                    <div>{card.duration}</div>
                                </div>
                                <div className=" flex flex-col h-1/3 justify-start pt-3">
                                    <p className="flex text-2xl font-semibold align-top items-center">
                                        <LiaRupeeSignSolid className="text-3xl flex items-center" />{card.price}</p>
                                    <p className="text-xl font-semibold ml-2">{card.productName}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Cards
