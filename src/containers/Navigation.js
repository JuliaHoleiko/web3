import React from 'react'
import Heading from './Heading'
import Card from './components/Card'
import styles from './Navigation.module.css'
export default function Navigation() {
  return (
    <div>
        <Heading/>
        <div className={styles.cards}>

        <Card number = '1'/>
        <Card number = '1'/>
        <Card number = '1'/>
        </div>

    </div>
  )
}
