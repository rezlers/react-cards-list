import React, { useState } from 'react';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import CardsContainer from "./CardsContainer/CardsContainer";
import styles from './LeftPane.module.css'

function LeftPane(props) {
    const {onDelete, onSort, onAdd} = props;
    const [cardsList, setCardsList] = useState([]);

    function randInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const addCard = () => {
        const newCardsList = [randInt(0,100)].concat(cardsList);
        setCardsList(newCardsList);
        onAdd(newCardsList.length - 1)
    };

    const sortCards = () => {
        setCardsList(cardsList.concat().sort());
        onSort();
    };

    const deleteCard = (cardIndex) => () => {
        const newCardsList = cardsList.filter((item, index) => {
            return index !== cardIndex;
        });
        setCardsList(newCardsList);
        onDelete(cardIndex)
    };

    return (
        <div className={styles['left-pane']}>
            <Header
                addCard={addCard}
                sortCards={sortCards}
            />
            <CardsContainer
                cardsList={cardsList}
                deleteCard={deleteCard}
            />
            <Footer/>
        </div>
    );
}

export default LeftPane
