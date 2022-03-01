import "./Card.css"

function Card(props) {
    const classes = 'card '+ props.className; // css multiple classes, reference: https://css-tricks.com/multiple-class-id-selectors/ 
    return <div className={classes}>{props.children}</div>
}

export default Card;