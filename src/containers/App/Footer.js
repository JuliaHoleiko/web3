import React from 'react'
import facebookLogo from '../../icons/facebook.png';
import instLogo from '../../icons/inst.png';
import twitterLogo from '../../icons/twitter.png';
import styles from "./Footer.module.css";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
      <h3>Camera</h3>
      <div>
        <img className={styles.logo} src = {facebookLogo} alt ="facebook"/>
        <img className={styles.logo} src = {instLogo} alt = "instagram"/>
        <img className={styles.logo} src = {twitterLogo} alt = "twitter"/>
        </div>
      </div>
      <div className={styles.separated}>
     <hr></hr>
    <p className={styles.a}>2022 Copyright Yuliia Holeiko</p>
    </div>

    </footer>

  )
}
