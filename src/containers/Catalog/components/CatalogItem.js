import {React, useState} from 'react'
import styles from "./CatalogItem.module.css"
import Button from '../../components/Button';
import cameraImg from "../../../icons/camera.jpg"
import {Link} from 'react-router-dom'


export default function CatalogItem(props) {
  const [itemList, setItemList] = useState([
    {
      name: "Canon 345",
      price: 39000,
      weight: 290,
      zoom: 7,
      image :cameraImg
    },
    {
        name: "Canon 100",
        price: 5600,
        weight: 290,
        zoom: 15,
        image :cameraImg
    },
    {
        name: "Camera be",
        price: 20980,
        weight: 290,
        zoom: 715,
        image :cameraImg
    },
  ]);
  let sortedItems = [];

  let foundItems = itemList.filter(item => item.name.toLowerCase().includes(props.searchValue.toLowerCase()));
  if(props.sortBy ==='no')
    sortedItems = foundItems;
  else if(props.sortBy === 'zoom'){
    if(props.sortOrder ==='descending')
      sortedItems = foundItems.sort((item1, item2) => { return item1.zoom < item2.zoom ? 1 : -1;});
      else   sortedItems = foundItems.sort((item1, item2) => { return item1.zoom > item2.zoom ? 1 : -1;});
  }
  else {
    if(props.sortOrder ==='descending')
      sortedItems = foundItems.sort((item1, item2) => { return item1.price < item2.price ? 1 : -1;});
    else  
      sortedItems = foundItems.sort((item1, item2) => { return item1.price > item2.price ? 1 : -1;});
}

    const listItem = sortedItems.map((camera) => 
    <li key={camera.name}className={styles.card} >
      <img src = {camera.image} className={styles.img} alt = "camera"/>
        <h3>{camera.name}</h3>
        <p className={styles.p}>Price: {camera.price}</p>
        <p className={styles.p}>Zoom: {camera.zoom}</p>
        <p className={styles.p}>Weight: {camera.weight}</p>
        <Link to='/camera' state={{ name: camera.name, price: camera.price, weight: camera.weight, zoom: camera.zoom, image: camera.image }}>
        <Button className={styles.view_more} text = "View more"/>
        </Link>
       
    </li>
    );
  return (
   <ul className={styles.catalog}> {listItem}</ul>
  )
}
