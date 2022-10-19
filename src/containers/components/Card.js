import React from 'react';
import styles from './Card.module.css';
import cameraImg from '../../icons/camera.jpg';

export default function Card(props) {
    
        const {
            number
        } = props
        return (
            <div className={styles.card}>
                <img className={styles.img} src = {cameraImg}/>
               
                <h2>Tile {number} Camera</h2>
                <p>
                Sed efficitur, ipsum eget tristique vestibulum, velit erat interdum metus, 
                quis eleifend eros enim ut diam. Vestibulum non commodo nunc, in laoreet purus. 
                Mauris at erat scelerisque, egestas odio ut, posuere erat. 
                </p>
                </div>
        )
    
}
