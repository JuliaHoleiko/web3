import React from 'react'
import { Link } from 'react-router-dom'
import SuccessImg from "../../../icons/success.png"
import Button from '../../components/Button'
import styles from "./Success.module.css"


export default function Success() {
  return (
    <div className={styles.container}>
         <img src = {SuccessImg} className={styles.img} alt = "camera"/>
         <h3>Your order was sent to processing!</h3>
         <Link to="/catalog">
         
         <Button text="Go back to catalog" className={styles.button}></Button>
         </Link>
       
    </div>
  )
}
