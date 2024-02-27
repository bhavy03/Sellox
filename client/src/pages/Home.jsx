import { useSelector, useDispatch } from "react-redux"
import Cards from "../components/Cards"
import { setAllCards } from "../redux/features/cardSlice"
import { useEffect } from "react";
import { setAuthenticated } from '../redux/features/cardSlice';

const Home = () => {
    const dispatch = useDispatch();
    function hasToken() {
        const token = document.cookie.split("; ").find(row => row.startsWith("token="));
        return token !== undefined;
    }
    // console.log(hasToken())
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://sellox.vercel.app/card/all');
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
        if (hasToken()) {
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
