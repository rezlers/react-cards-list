import React from 'react';
import Card from "./Card/Card";
import styles from './CardsContainer.module.css'

function CardsContainer(props) {
    const {cardsList, deleteCard} = props;

    return (
        <div className={`${styles['cards-container']} overflow-auto border border-secondary`}>
            {
                cardsList.map((item, index) => {
                    return (
                        <>
                            <Card
                                value={item}
                                deleteCard={deleteCard(index)}
                                key={index}
                            />
                        </>
                    )
                })
            }
        </div>
    );
}

export default CardsContainer
