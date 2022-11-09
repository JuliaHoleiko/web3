import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '../components/Button';
import styles from './ItemPage.module.css'
import { useDispatch } from "react-redux";
import { addToCart } from '../../data/reducer';
import { useState } from 'react';

export default function ItemPage() {
    const location = useLocation();
    const state = location.state;
    const dispatch = useDispatch();
    const[count, setCount] = useState(0);
    const handleChange = event => {
        setCount(event.target.value);
        console.log(event.target.value);
    };   
    let itemToCart = {name: state.name, price: state.price, count: count};

   
    return (
        <>
            {state && (
                <div>
                <div className={styles.container}>
                    <div className={styles.mini_container}>
                      <img src={state.image} className={styles.img} alt="camera"/>
                      </div>
                    <div className={styles.description}>
                            <h2>{state.name}</h2>
                        <p className={styles.text}>Price: {state.price}</p>
                        <p className={styles.text}>Zoom: {state.zoom}</p>
                        <p className={styles.text}>Weight: {state.weight}</p>
                    </div>
                       
                </div>
                <div className={styles.container}>
                
                    <div className={styles.container}>
                    <label>
                        How many items do you want to order?
                    </label>
                    <input  type="number" name="count" className={styles.input} onChange={handleChange} value={count}>
                    </input>
                    </div>
                    {/* <div className={styles.container}>

                        <select name='color' className={styles.select_color}>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                        </select>

                    </div> */}

             </div>
                 <div className={styles.container}>
                 <Link to='/catalog'>
                     <Button className={styles.button} text = "Back"></Button>
                 </Link>
                 <Button className={styles.button} text = "Add to cart" onClick={() => { dispatch(addToCart( itemToCart)) }}></Button>
             </div>
             
             </div>
            )}
        </>
    )
}