import React from 'react'
import styles from "./SearchField.module.css"

export default function SearchField(props) {
  return (
   
    <form >
         <div className={styles.form}>
        <p >
            Name:
        </p>
        <input type="text" name="name" className={`${styles.input} ${props.className}`}  value={props.inputValue}
        onChange={(e) => props.onInputValueChange(e.target.value)}/>
        
        </div>
    </form>
  )
}
