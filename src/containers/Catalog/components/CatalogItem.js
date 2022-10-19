import React from 'react'
import styles from "./CatalogItem.module.css"
import Button from '../../components/Button';




export default function CatalogItem(props) {
    const cameras = props.cameras;
    const listItem = cameras.map((camera) => 
    <li className={styles.card} >
      <img src = {camera.image} className={styles.img} alt = "camera"/>
        <h3>{camera.name}</h3>
        <p className={styles.p}>Price: {camera.price}</p>
        <p className={styles.p}>Zoom: {camera.zoom}</p>
        <p className={styles.p}>Weight: {camera.weight}</p>
        <Button className={styles.view_more} text = "View more"/>
       

        
        
        
    </li>
    )
  return (
   <ul className={styles.catalog}> {listItem}</ul>
  )
}
