import Button from "../Button/Button"
import Item from "../Item/Item"
import {selectedCount, selectedPrice} from '../Storage/Storage';
import { useRecoilState } from "recoil";
import classes from  '../../Ui/Global.module.css'
import Wrapper from "../../Ui/Wrapper";
const shopList = [
    {name: 'mouse cable', price: 20},
    {name: 'mouse uncable', price: 80},
    {name: "keyboard", price: 80},
    {name: "screen 16.2mm", price: 70},
    {name: "screen 17.8mm", price: 100},
    {name: 'processor', price: 200},
    {name: 'ssd 256', price: 40},
    {name: 'ssd 512', price: 60}
]

const List = () => {
   const [updatedCount,setUpdatedCount] = useRecoilState(selectedCount);
   const [updatedPrice,setUpdatedPrice] = useRecoilState(selectedPrice);

   const addItemsToHeader = (valuePrice) => {
      setUpdatedCount(updatedCount + 1)
      setUpdatedPrice(updatedPrice + valuePrice)
   }

   return (
       <Wrapper>
          <ol className={classes['shop-list-container']}>
          {shopList.map((value) => {
              return (
                 <Item className={classes['shoping-lis-item']} key={value.name}>
                    <span> product name:  {value.name} </span>
                    <br/>
                    <span> product price: {value.price}  </span>
                    <Button className={classes['shoping-list-item-button']} onClick={() => addItemsToHeader(value.price)}> add to list </Button>
                 </Item>
              ) 
          })}
         
          </ol>
          
       </Wrapper>
   )
}

export default List