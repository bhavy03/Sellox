// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import Login from "./Login";

const CardDetail = () => {
    // const { cardId } = useParams();
    const { currentId, isAuthenticated } = useSelector((state) => state.card);
    // console.log(cardId)
    console.log(currentId)
    return (
        <>
            {isAuthenticated ?
                <div className="flex justify-center text-center w-full bg-transparent h-screen p-4">
                    <div className="w-full grid grid-cols-5 grid-rows-7  gap-3 shadow-lg px-4">
                        <div className="col-start-1 col-end-4 row-start-1 row-span-5 bg-white rounded-lg shadow-xl p-3 border border-[#dadada]">
                            <img src={`../images/${currentId.imageName}`} alt=
                                {currentId.productName} className="w-full h-full object-cover" />
                        </div>
                        <div className="col-start-4 col-end-6 row-start-1 row-span-2 bg-white rounded-lg shadow-xl p-3 border border-[#dadada]">
                            <div className="text-xl font-bold">{currentId.price}</div>
                            <div>{currentId.productName}</div>
                        </div>
                        <div className="col-start-4 col-end-6 row-start-3 row-span-2 bg-white rounded-lg shadow-xl p-3 border border-[#dadada]">
                            <div>
                                {currentId.sellerName}
                            </div>
                            <div>
                                {currentId.phoneNo}
                            </div>
                        </div>
                        <div className="col-start-1 col-span-3 row-start-6 row-span-3 bg-white py-7 rounded-lg shadow-xl p-3 mb-7 border border-[#dadada]">{currentId.details}</div>
                    </div>
                </div>
                : <Login />
            }
        </>
    )
}

export default CardDetail
