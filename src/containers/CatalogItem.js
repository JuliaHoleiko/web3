import React from 'react'
import styles from "./CatalogItem.module.css"


export default function Catalog(props) {
    const cameras = props.cameras;
    const listItem = cameras.map((camera) => 
    <li className={styles.card}>
        <h3>{camera.name}</h3>
        <p>Price: {camera.price}</p>
        <p>Zoom: {camera.zoom}</p>
        <p>Weight: {camera.weight}</p>
        <img src = {camera.image}/>
        
    </li>
    )
  return (
   <ul> {listItem}</ul>
  )
}
