import { useRecoilState } from 'recoil'
import {selectedCount, selectedPrice, accMoney} from '../Storage/Storage';
import { BsFillCartDashFill, BsPersonLinesFill  } from 'react-icons/bs';
import Button from '../Button/Button';
import Card from '../../Ui/Card'
import Menu from '../../Ui/Menu';
import classes from '../../Ui/Global.module.css';


const Header = () => {
    const [updatedCount,setUpdatedCount] = useRecoilState(selectedCount);
    const [updatedPrice,setUpdatedPrice] = useRecoilState(selectedPrice);
    const [updatedAccMoney,setUpdatedAccMoney] = useRecoilState(accMoney);

    const reseting = () => {
      setUpdatedCount(0);
      setUpdatedPrice(0);
    }
    
    const onOrderHandleClick = () => {
       if(updatedAccMoney >= updatedPrice) {
         setUpdatedAccMoney(updatedAccMoney - updatedPrice);
         reseting()
       } 
    }

    const OnResetOrderingItems = () => {
      if(selectedCount) {
        reseting()
      } 
    }

    return (
        <Menu>
          <Card>
            <BsPersonLinesFill />
            <span> profile money {updatedAccMoney} $ </span>
            <Button onClick={OnResetOrderingItems} className={classes['menu-button']}> Reset order Items </Button>
          </Card>
          <Card> 
            <span> selected items: {updatedCount} </span>
            <span> price of selected items: {updatedPrice} $ </span>
            <BsFillCartDashFill/>
            <Button onClick={onOrderHandleClick} className={classes['menu-button']}> Order Products </Button>
          </Card>
        </Menu>
    )
}

export default Header;
