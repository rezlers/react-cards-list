import React from 'react';

function OperationCard(props) {
    const {msg} = props;

    return (
        <div className='card'>
            <p>{msg}</p>
        </div>
    );
}

export default OperationCard
