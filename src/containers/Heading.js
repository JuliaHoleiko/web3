import React from 'react';
import { StyleSheetManager } from 'styled-components';
import headerPicture from "../header_img.jpg";
import styles from "./Heading.module.css";

export default function Heading() {
  return (
    <div className={styles.container}>
        <img className = {styles.img} src = {headerPicture}/> 
        <div className={styles.text_container}> 
            <h2>Find your camera</h2>
            <a className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.
            </a>
        </div>
    </div>
  )
    
}
