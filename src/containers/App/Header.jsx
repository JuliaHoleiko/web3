
import styles from "./Header.module.css"
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import ItemPage from "../Catalog/ItemPage";
import Checkout from "../Cart/Checkout/Checkout";
import Success from "../Cart/Checkout/Success";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


export default function Header(props) {
    return (
        
        <div>
        <header className={styles.header}>
            <div className={styles.logo}>
                <h2>Cameras</h2> 
            </div>
            </header>
            <Router>
            <div className={styles.nav}>
                <ul className={styles.ul}>
                <li >
                    <Link className={styles.link} to="/">Home</Link>
                </li>
                <li>
                    <Link className={styles.link} to="/catalog">Catalog</Link>
                </li>
                <li>
                    <Link className={styles.link} to="/cart">Cart</Link>
                </li>
                </ul>
            </div>
            <div></div>

      
            <div>
          
            <Routes>
                <Route  exact path="/" element = {<Home/>}/>
                <Route  exact path="/catalog" element = {<Catalog/>} />
                <Route  exact path="/cart"  element = {<Cart/>}/>
                <Route exact path='/camera' element={<ItemPage />} />
                <Route exact path='/checkout' element={<Checkout />} />
                <Route exact path='/success' element={<Success/>} />
            </Routes>
            
            </div>
            </Router>
            
            </div>
        
                
            );
        }