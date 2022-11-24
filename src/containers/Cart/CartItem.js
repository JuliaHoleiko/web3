import React from 'react'
import {useDispatch } from "react-redux"
import styles from "./CartItem.module.css"
import Button from '../components/Button'
import { setNewPrice, removeFromCart } from '../../data/reducer'


export default function CartItem(props) {
    const dispatch = useDispatch();
    
    return (
        <div className={styles.container}>
            <div className={styles.item_name}>
                <h3>
                {props.element.name}
                </h3>
            </div>
            <h4>Total price: </h4>
            {props.sum}
           
            <div className={styles.change_count_container}>
                <Button className={styles.button} onClick={() => dispatch(setNewPrice({ item: props.element, sum: props.sum -  props.element.price }))} text="-"></Button>
                <div className={styles.count}>{props.element.count}</div>
                <Button className={styles.button} onClick={() => dispatch(setNewPrice({ item: props.element, sum: props.sum + props.element.price, count: parseInt( props.element.count) + 1 }))} text="+"></Button>
            </div>
                <Button className={styles.remove_button} onClick={() =>dispatch(removeFromCart(props.element))} text = "remove from cart" > </Button>
            
        </div>
            
    )
}

