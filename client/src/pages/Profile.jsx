import { useSelector } from "react-redux"
import Login from "./Login";

const Profile = () => {
    const { isAuthenticated, userdata } = useSelector((state) => state.card);
    // console.log(userdata);
    return (
        <>
            {
                isAuthenticated ?
                    <div className="w-full">
                        <div className="bg-white w-full h-full flex justify-center items-start"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover' }}>
                            <div className="bg-gray-100  px-14 md:p-6 mt-20 rounded-lg shadow-xl h-screen md:w-full bg-transparent">
                                <h2 className="text-3xl md:text-6xl font-bold mb-10 md:ml-8">{userdata.user.name.toUpperCase()}</h2>
                                <div className="flex flex-col backdrop-blur-md shadow-lg md:mt-24 pb-5 px-6 rounded-xl md:ml-8 md:mr-64">
                                    <p className="font-semibold text-xl mb-4 text-center mt-5">Your personal details :</p>
                                    <hr className="mx-5" />
                                    <p className="md:text-gray-700 text-gray-800 mb-2 mt-3 md:text-2xl text-lg">Email : {userdata.user.email}</p>
                                    <p className="md:text-gray-700 text-gray-800 mb-2 mt-3 md:text-2xl text-lg">Phone No : {userdata.user.phoneNo}</p>
                                    <p className="md:text-gray-700 text-gray-800 mb-2 mt-3 md:text-2xl text-lg">Enrollment No : {userdata.user.collegeId}</p>
                                </div>
                            </div>
                        </div>
                    </div >
                    : <Login />
            }
        </>
    )
}

export default Profile
