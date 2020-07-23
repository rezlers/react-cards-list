import React from 'react';
import styles from './Card.module.css'

function Card(props) {
    const {deleteCard, value} = props;
    return (
        <div className={`${styles['custom-card']}`}>
            <i className={`fa fa-close ${styles['delete-icon']}`} onClick={deleteCard}></i>
            {value}
        </div>
    );
}

export default Card
