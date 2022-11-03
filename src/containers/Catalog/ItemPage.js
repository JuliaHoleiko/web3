import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '../components/Button';
import styles from './ItemPage.module.css'

export default function ItemPage() {
    const location = useLocation();
    const state = location.state;
   
    return (
        <>
            {state && (
                <div>
                <div className={styles.container}>
                    <div className={styles.mini_container}>
                      <img src={state.image} className={styles.img} />
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
                    <input  type="text" name="count" className={styles.input} >
                    </input>
                    </div>
                    <div className={styles.container}>

                        <select name='color' className={styles.select_color}>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                        </select>

                    </div>

             </div>
                 <div className={styles.container}>
                 <Link to='/catalog'>
                     <Button className={styles.button} text = "Back"></Button>
                 </Link>
                 <Button className={styles.button} text = "Add to cart"></Button>
             </div>
             
             </div>
            )}
        </>
    )
}