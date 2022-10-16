import React from 'react'
import facebookLogo from '../icons/facebook.png';
import instLogo from '../icons/inst.png';
import twitterLogo from '../icons/twitter.png';
import styled from 'styled-components';
import styles from "./Footer.module.css";
const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
      <h3>Camera</h3>
      <StyledDiv>
        <img className={styles.logo} src = {facebookLogo}/>
        <img className={styles.logo} src = {instLogo}/>
        <img className={styles.logo} src = {twitterLogo}/>
      </StyledDiv>
      </div>
      <div className={styles.separated}>
     <hr></hr>
    <a className={styles.a}>2022 Copyright Yuliia Holeiko</a>
    </div>

    </footer>

  )
}
