import React, {useState,useContext, useEffect} from 'react'
import CatalogItem from './components/CatalogItem';
import cameraImg from "../../icons/camera.jpg"
import styles from "./Catalog.module.css"
import SelectField from './components/SelectField';
import Button from '../components/Button';
import SearchField from './components/SearchField';


const options1 = [
  {value: 'no', label: 'no order'},
  { value: 'descending', label: 'descending order' },
  { value: 'ascending', label: 'ascending order' }
];
const options2 = [
  {value: 'no', label: 'no sort'},
  { value: 'price', label: 'by price' },
  { value: 'zoom', label: 'by zoom' }
]



export default function Catalog() {

const [order, changeOrder] = useState('no');

const [searchValue, changeSearchValue] = useState("");

const [sortBy, changeSortBy] = useState('no')

    
  
  return (
   
    <div className={styles.container}>
      <div className={styles.header}>
      
      <SelectField inputValue={sortBy} onInputValueChange={changeSortBy}  options={options2} />
      <SelectField inputValue={order} onInputValueChange={changeOrder}  options={options1} />
      <SearchField className inputValue={searchValue} onInputValueChange={changeSearchValue} />
      <Button className={styles.apply} text = "Cancel"  onClick = {()=> {changeOrder('no'); changeSearchValue(''); changeSortBy('no')}}/> 
      </div>
     
    <div className={styles.catalog}>
        <CatalogItem sortBy={sortBy} searchValue = {searchValue} sortOrder = {order}/>
        
    </div>
    </div>
    
  )
}
