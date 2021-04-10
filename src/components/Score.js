function Score(props) {
    return (
        <div>
            <div>Current Score: {props.currentScore}</div>
            <div>High Score: {props.highScore}</div>
        </div>
    )
}

export default Score;