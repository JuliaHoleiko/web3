import React from 'react'
import Header from './Header';
import Heading from './Heading'
import Card from './components/Card'
import styles from './Navigation.module.css'
import Footer from './Footer';
export default function Home() {
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
