import React from 'react';

function Card(props) {
    return (
        <div className='card-container'>
            <img src={props.imgSource} alt='' />
        </div>
    )
}

export default Card;