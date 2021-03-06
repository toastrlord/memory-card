import React from 'react';

function Card(props) {
    return (
        <div className='card' onClick={() => props.onCardClicked()}>
            <img src={props.imgSource} alt='' />
            <p className='card-description'>{props.title}</p>
        </div>
    )
}

export default Card;