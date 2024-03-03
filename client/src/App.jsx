import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Chat from './pages/Chat'
import Sell from './pages/Sell';
import Rent from './pages/Rent';
import SearchBar from './components/SearchBar';
import Signup from './pages/Signup';
import CardDetail from './pages/CardDetail';
// import Logout from './components/Logout';
// #2c3e50
const App = () => {
  return (
    <>
      <div>
        <div>
          <div className="flex flex-col scroll-smooth relative">
            <div className=' bg-gradient-to-l from-[#616769]  to-[#000] bg-transparent relative stick shadow-md md:px-8 z-10 backdrop-blur-md'>
              <nav className="p-3 relative stick ">
                <Navbar />
              </nav>
              <search className='w-full '>
                <SearchBar />
              </search>
            </div>
            <main className=" min-h-screen h-full flex w-[100%] bg-gradient-to-b from-[#bdc3c7] to-[#212121] rounded-sm relative m-auto ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/api/user/login" element={<Login />} />
                <Route path="/api/user/logout" element={<Home />} />
                <Route path="/api/user/register" element={<Signup />} />
                <Route path="/api/chat" element={<Chat />} />
                <Route path="/api/profile" element={<Profile />} />
                <Route path="/api/user/sell" element={<Sell />} />
                <Route path="/api/user/rent" element={<Rent />} />
                <Route path="/card/:cardId" element={<CardDetail />} />
              </Routes>
            </main>
            {/* <div className='w-full bg-[#2c3e50]'> */}
            <div className='w-full bg-[#2c3e50]'></div>
            {/* <hr className='w-[70%] mx-auto' /> */}
            {/* </div> */}
            <footer className="w-full min-h-10 h-auto rounded-sm bg-gradient-to-b from-[#212121] to-[#000] text-white shadow-md">
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default App