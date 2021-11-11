
const Card = (props) => {

    const classes = "card " + props.classNames;

    return <div className={classes}>{props.children}</div>

}

export default Card;