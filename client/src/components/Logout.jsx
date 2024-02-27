import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Login from "../pages/Login";

const Logout = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.card);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/user/logout", {
                credentials: "include"
            });
            if (response.ok) {
                const responseData = await response.json()
                console.log(responseData);
            } else {
                console.error("Logging out failed");
            }
            navigate("/");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };
    return (
        <>{
            isAuthenticated ?
                <div onClick={handleSubmit}>
                    <div className='md:flex hidden'>
                        <li className='bg-zinc-50 text-black text-sm font-semibold hover:text-white hover:bg-[#1b2530] hover:font-bold px-2 py-1 rounded-md'><Link to="/user/logout">LOGOUT</Link></li>
                    </div>
                </div>
                : <Login />
        }
        </>
    )
}

export default Logout
