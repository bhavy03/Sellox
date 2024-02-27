import { useSelector } from "react-redux"
import Login from "./Login";

const Profile = () => {
    const { isAuthenticated } = useSelector((state) => state.card);
    return (
        <>
            {
                isAuthenticated ?
                    <div className="w-full">
                        <div className="bg-yellow-100 w-full h-full flex justify-center items-start"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover' }}>
                            <div className="bg-gray-100  px-14 p-6 mt-20 rounded-lg shadow-xl h-screen w-full bg-transparent">
                                <h2 className="text-6xl font-bold mb-10 ml-8">Kunal Audichya</h2>
                                <div className="flex flex-col backdrop-blur-md shadow-lg mt-24 pb-5 px-6  rounded-xl ml-8 mr-64">
                                    <p className="ont-semibold text-xl mb-4 text-center mt-5">Your personal details :</p>
                                    <hr className="mx-5" />
                                    <p className="text-gray-700 mb-2 mt-3 text-2xl">Email : </p>
                                    <p className="text-gray-700 mb-2 mt-3 text-2xl">Enrollment No :</p>
                                    <p className="text-gray-700 mb-2 mt-3 text-2xl">Phone No :</p>
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
