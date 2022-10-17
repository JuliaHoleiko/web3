
import styles from "./Header.module.css"
import Home from "./Home";
import Catalog from "./Catalog";

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
                <Route  exact path="/cart"  />
            </Routes>
            </div>
            </Router>
            
            </div>
        
                
            );
        }