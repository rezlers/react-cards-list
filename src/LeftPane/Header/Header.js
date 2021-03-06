import React from 'react';

function Header(props) {
    const {sortCards, addCard} = props;

    return (
        <div className="d-flex justify-content-start align-items-center">
            <button className='btn btn-secondary mx-1' onClick={sortCards}>Sort cards</button>
            <button className='btn btn-secondary mx-1' onClick={addCard}>Add card</button>
        </div>
    );
}

export default Header
