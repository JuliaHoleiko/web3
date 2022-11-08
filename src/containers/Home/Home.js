import {React, useState} from 'react'
import Heading from './Heading'
import Card from '../components/Card'
import styles from './Home.module.css'
import Button from '../components/Button'
export default function Home() {
const [values, changeValue] = useState([1,2,3]);

const preCatalog = values.map((item)=>
<Card key={item} number ={item}/>);
const [buttonValue, changeButton] = useState(true);
var textButton;
if(buttonValue)
  textButton = "View more"
  else textButton = "View less"



  return (
    <div className={styles.home}>
      
        <Heading/>
        <div className={styles.cards}>
       {preCatalog}
        </div>
        
          <Button className={styles.view_more} text = {textButton}  onClick = {()=> 
            {if(buttonValue) {
              changeValue([1,2,3,4,5,6]); 
              changeButton(false)} 
            else{
              changeValue([1,2,3]); 
              changeButton(true)}} 
            }
              />

        
      
        

    </div>
  )
}
