import React from 'react'
import Heading from './Heading'
import Card from '../components/Card'
import styles from './Home.module.css'
import Button from '../components/Button'
export default function Home() {
  return (
    <div className={styles.home}>
      
        <Heading/>
        <div className={styles.cards}>

        <Card number = '1'/>
        <Card number = '1'/>
        <Card number = '1'/>
        </div>
        <Button className={styles.view_more} text = "View more"/>
        

    </div>
  )
}
