import React from 'react'
import Select from 'react-select'
import styles from "./SelectField.module.css"

const options = [
    { value: 'descending', label: 'descending order' },
    { value: 'ascending', label: 'ascending order' }
  ]


export default function SelectField() {
  return (
    <div>
        <Select options={options} />
        <label >Choose an order:</label>
        <select name="order" className={styles.select} >
            <option value="no">no order</option>
            <option value="descending">descending</option>
            <option value="ascending">ascending</option>
            
        </select>
    </div>
  )
}

