import { useSelector, useDispatch } from "react-redux"
import Cards from "../components/Cards"
import { setAllCards } from "../redux/features/cardSlice"
import { useEffect } from "react";
import { setAuthenticated } from '../redux/features/cardSlice';

const Home = () => {
    const dispatch = useDispatch();
    function hasCookieInLocalStorage() {
        const token = document.cookie.split("; ").find(row => row.startsWith("token="));
        if (token) {
            const cookieValue = token.split('=')[1];
            localStorage.setItem('myCookie', cookieValue);
            // console.log(localStorage.getItem('myCookie'));
        } else {
            // console.log('Cookie not found or received');
            localStorage.removeItem('myCookie');
        }
        const cookieValue = localStorage.getItem('myCookie');
        if (cookieValue) {
            // console.log(cookieValue);
            return true;
        } else {
            // console.log('Cookie not in localStorage');
            return false;
        }
    }
    // console.log(hasCookieInLocalStorage())
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
        if (hasCookieInLocalStorage()) {
            dispatch(setAuthenticated(true))
        }
    }, [dispatch]);

    const { currentCards, searchField } = useSelector((state) => state.card);
    // console.log(currentCards)
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
