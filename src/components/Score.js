function Score(props) {
    return (
        <div className='score-container'>
            <div className='score-text'>Current Score: {props.currentScore}</div>
            <div className='score-text'>High Score: {props.highScore}</div>
        </div>
    )
}

export default Score;