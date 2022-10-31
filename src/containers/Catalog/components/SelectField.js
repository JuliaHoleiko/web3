import React from 'react'
import Select from 'react-select'
import styles from "./SelectField.module.css"



export default function SelectField(props) {

const options = props.options;
const selectItem = options.map((item) => 
<option value={item.value}> {item.label}</option>)
  return (
    <div>
        
        <label >Choose an order:</label>
        <select name="order" className={styles.select}  value={props.inputValue}
        onChange={(e) => props.onInputValueChange(e.target.value)}>
          {selectItem}
            {/* <option value="no">no order</option>
            <option value="descending">descending</option>
            <option value="ascending">ascending</option>
             */}
        </select>
    </div>
  )
}


