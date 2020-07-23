import React from 'react';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import CardsContainer from "./CardsContainer/CardsContainer";
import styles from './LeftPane.module.css'

class LeftPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardsList: []
        };
        this.addCard = this.addCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.sortCards = this.sortCards.bind(this)
    }

    randInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    addCard() {
        const newCardsList = [this.randInt(0,100)].concat(this.state.cardsList);
        this.setState({cardsList: newCardsList});
        this.props.onAdd(newCardsList.length - 1)
    };

    sortCards() {
        this.setState({cardsList: this.state.cardsList.concat().sort(function (a, b) {
            return b - a;
        })});
        this.props.onSort();
    };

    deleteCard(cardIndex) {
        return () => {
            const newCardsList = this.state.cardsList.filter((item, index) => {
                    return index !== cardIndex;
                });
            this.setState({cardsList: newCardsList});
            this.props.onDelete(cardIndex)
    }};

    render() {
        return (
            <div className={styles['left-pane']}>
                <Header
                    addCard={this.addCard}
                    sortCards={this.sortCards}
                />
                <CardsContainer
                    cardsList={this.state.cardsList}
                    deleteCard={this.deleteCard}
                />
                <Footer/>
            </div>
        );
    }
}

export default LeftPane
