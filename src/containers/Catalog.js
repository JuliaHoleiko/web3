import React from 'react'
import CatalogItem from './CatalogItem'
import cameraImg from "../icons/camera.jpg"
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
    <div>
        <CatalogItem cameras = {cameras}/>
    </div>
  )
}
