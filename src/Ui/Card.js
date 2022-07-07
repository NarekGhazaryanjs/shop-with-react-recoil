import classes from '../Ui/Global.module.css'

const Card = (props) => {
    return (
        <div className={classes.Card}>
            {props.children}
        </div>
    )
}

export default Card