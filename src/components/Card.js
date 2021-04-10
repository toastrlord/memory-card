import React from 'react';

function Card(props) {
    return (
        <div className='card' onClick={() => props.onCardClicked()}>
            <img src={props.imgSource} alt='' />
            <p>{props.id}</p>
        </div>
    )
}

export default Card;