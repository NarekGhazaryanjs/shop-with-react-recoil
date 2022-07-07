import { atom } from "recoil";

const selectedPrice = atom({
    key: 'priceOfSelectedProducts',
    default: 0
})

const selectedCount = atom({
    key: 'countOfSelectedItems',
    default: 0
})

const accMoney = atom({
    key: 'accMoney',
    default: 2_500
})

export {selectedCount, selectedPrice, accMoney}