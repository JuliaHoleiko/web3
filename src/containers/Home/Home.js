import {React, useState} from 'react'
import Heading from './Heading'
import Card from '../components/Card'
import styles from './Home.module.css'
import Button from '../components/Button'
export default function Home() {
const [values, changeValue] = useState([1,2,3]);
const preCatalog = values.map((item)=>
<Card key={item} number ={item}/>)


  return (
    <div className={styles.home}>
      
        <Heading/>
        <div className={styles.cards}>
       {preCatalog}
        </div>
        <Button className={styles.view_more} text = "View more"  onClick = {()=> {changeValue([1,2,3,4,5,6])}}/>
        

    </div>
  )
}
