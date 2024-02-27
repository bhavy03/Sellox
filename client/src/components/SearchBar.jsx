import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux"
import "../index.css"
import { setSearch } from '../redux/features/cardSlice';
const SearchBar = () => {
    const dispatch = useDispatch();
    const searchChange = (e) => {
        e.preventDefault();
        dispatch(setSearch(e.target.value))
    }
    return (
        <div>
            <div className="flex m-1 p-3 shadow-xl">
                <div className="flex bg-zinc-50 w-full md:flex md:flex-row md:w-4/5 px-1">
                    <CiSearch className='my-2 h-6 w-4 ' />
                    <input type="text" placeholder="search" className="px-3 w-full" onChange={searchChange} />
                </div>
                <div className=" hidden md:flex md:space-x-3 ml-auto">
                    <Link to="/user/sell" className='bg-[#283048] px-6 py-2 text-center text-lg rounded-full text-white font-semibold hover:bg-[#1b2530] hover:text-white hover:font-bold'>Sell</Link><p></p>
                    <Link to="/user/rent" className='bg-[#283048] px-6 py-2 text-center rounded-full text-lg text-white font-semibold hover:bg-[#1b2530] hover:font-bold hover:text-white'>Rent</Link><p></p>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
