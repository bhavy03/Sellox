import logo from "../assets/logo3.svg"

const Footer = () => {
    return (
        <div>
            <div className="flex p-3 flex-col justify-center">
                <hr className="mx-40 mb-10  border-gray-700" />
                <img src={logo} alt="" className="h-10 object-contain m-4 " />
                {/* <hr className="border-gray-800  mx-40 mt-3"/> */}
                <div className="flex justify-center">
                    <div className="flex w-[80%] justify-between my-9 ">
                        <p>twitter</p>
                        <p>Github</p>
                        <p>linkedIn</p>
                        <p>email</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
