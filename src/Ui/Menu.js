import classes from '../Ui/Global.module.css'

const Menu = (props) => {
  return (
      <div className={classes.Menu}>
          {props.children}
      </div>
  )
}

export default Menu