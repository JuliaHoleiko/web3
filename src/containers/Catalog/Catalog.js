import React from 'react'
import CatalogItem from './components/CatalogItem';
import cameraImg from "../../icons/camera.jpg"
import styles from "./Catalog.module.css"
import SelectField from './components/SelectField';
import Button from '../components/Button';
import SearchField from './components/SearchField';
const cameras = [
    {
      name: "Canon 345",
      price: 39000,
      weight: 290,
      zoom: 715,
      image :cameraImg
    },
    {
        name: "Canon 100",
        price: 5600,
        weight: 290,
        zoom: 715,
        image :cameraImg
    },
    {
        name: "Camera be",
        price: 20980,
        weight: 290,
        zoom: 715,
        image :cameraImg
    },
  ];

export default function Catalog() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SelectField />
        <SearchField/>
        <Button className={styles.apply} text = "Apply"/>
       

      </div>
    <div className={styles.catalog}>
        <CatalogItem cameras = {cameras}/>
    </div>
    </div>
  )
}
