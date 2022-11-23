import {React, useState, useEffect} from 'react'
import styles from "./CatalogItem.module.css"
import Button from '../../components/Button';
import cameraImg from "../../../icons/camera.jpg"
import {Link} from 'react-router-dom'
import { getCameras } from '../../../api';
import Loader from './Loader';


export default function CatalogItem(props) {
  let sortBy = props.sortBy;
  let sortOrder = props.sortOrder;
  const [loading, setLoading] = useState(false);
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    getCameras(sortBy, sortOrder).then(res => {
        
        let itemList = [];
        for (let i of res.data.cameras) {
            itemList.push({id: i[0], name: i[1], price: i[2], weight: i[3], zoom: i[4]})
        }
        setItemList(itemList);
        
    })
}, [sortBy, sortOrder]);

   let foundItems = itemList.filter(item => item.name.toLowerCase().includes(props.searchValue.toLowerCase()));

  const listItem = foundItems.map((camera) => 
    <li key={camera.name}className={styles.card} >
      <img src = {cameraImg} className={styles.img} alt = "camera"/>
        <h3>{camera.name}</h3>
        <p className={styles.p}>Price: {camera.price}</p>
        <p className={styles.p}>Zoom: {camera.zoom}</p>
        <p className={styles.p}>Weight: {camera.weight}</p>
        <Link to='/camera' state={{ name: camera.name, price: camera.price, weight: camera.weight, zoom: camera.zoom, image: cameraImg }}>
          <Button className={styles.view_more} text = "View more"/>
        </Link>
       
    </li>
    );
  return (

    <div>
      {loading ? <Loader/>:

   <ul className={styles.catalog}> {listItem}</ul>
  }

   </div>
   

  )
}
