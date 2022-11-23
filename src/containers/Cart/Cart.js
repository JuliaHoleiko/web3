import React  from 'react'
import styles from "./Cart.module.css"
import {useDispatch } from "react-redux"
import { Link} from 'react-router-dom'
import Button from '../components/Button'
import { useSelector } from "react-redux"
import { clearCart } from '../../data/reducer'
import CartItem from './CartItem'

export default function Cart() {
    const cart = useSelector((state) => state.items.cart);
    const dispatch = useDispatch();
    let totalSum = 0 ;
    cart.map(camera => {totalSum = camera.sum + totalSum})
  return (
    <div className={styles.container}>
        <h1>Your Cart</h1>
         <div className={styles.cart_list}>
            {cart.length > 0 ? cart.map(camera =>
             <CartItem key={camera.item.name} element={camera.item} sum={camera.sum}/>) 
            : <div>Buy something</div>}
        </div>
        
        
        <div className={styles.sum_container}>
            <h3>Total sum</h3>
            <h3>{totalSum}</h3>
        </div>
        <Button className={styles.button} text="clear the cart" onClick={()=> dispatch(clearCart())}></Button>
        <Link to='/catalog'>
            <Button className={styles.button} text = "Back"></Button>
        </Link>
        <Link to= '/checkout'>
            <Button className={styles.button} text="Buy"></Button>
        </Link>

        
    </div>
  )
}
