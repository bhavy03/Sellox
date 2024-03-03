import { useSelector, useDispatch } from "react-redux"
import Cards from "../components/Cards"
import { setAllCards } from "../redux/features/cardSlice"
import { useEffect } from "react";
import { setAuthenticated } from '../redux/features/cardSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { currentCards, searchField, userdata } = useSelector((state) => state.card);
    function hasCookieInLocalStorage() {
        if (userdata.token) {
            const cookieValue = userdata.token;
            localStorage.setItem('myCookie', cookieValue);
        } else {
            // localStorage.removeItem('myCookie');
        }
        const cookieValue = localStorage.getItem('myCookie');
        if (cookieValue) {
            // console.log(cookieValue);
            return true;
        } else {
            return false;
        }
    }
    if (hasCookieInLocalStorage()) {
        dispatch(setAuthenticated(true))
    }


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER}card/all`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const cardsData = await response.json();
                dispatch(setAllCards(cardsData));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [dispatch]);


    const filteredCards = currentCards.filter((cards) => {
        return cards.productName.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
        <div className="p-6">
            <div className="flex flex-wrap gap-6 md:justify-stretch justify-center items-center">
                {
                    filteredCards.map((card, i) => (
                        <Cards
                            key={card._id}
                            card={card}
                            i={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
