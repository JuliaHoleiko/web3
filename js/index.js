import {
    EDIT_BUTTON_PREFIX,
    addItemToPage,
    clearInputs,
    sortItemsList,
    getInputValues,
    renderItemsList,
    getItemId,
  } from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const submitChanges = document.getElementById("submit_button1");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById( "cancel_find_button");
const findInput = document.getElementById( "find_input");
const sortButton = document.getElementById( "sort_button");
const totalPrice = document.getElementById("total_price");
const nameInput = document.getElementById("name_input");
let cameras = [];
const closeButton = document.getElementById("close_button");


const addItem = ({name ,price, weight, zoom}) => {
    const generatedId = uuid.v1();
    const newItem = {
        id: generatedId,
        name ,price, weight, zoom,
    };
    cameras.push(newItem);
    addItemToPage(newItem);
    countPrice();
};


submitButton.addEventListener("click", (event)=>{
    
    event.preventDefault();
   
    if(nameInput.value==""){
        // alert("enter camera name");
    
    
  
    }
    else{

    const {name ,price, weight, zoom} = getInputValues();
    clearInputs();
    addItem({
        name ,price, weight, zoom
    });}
});

findButton.addEventListener("click",() => {
    const foundCameras = cameras.filter(camera => camera.name.search(findInput.value) !== -1);
    
    renderItemsList(foundCameras);

} );

cancelFindButton.addEventListener("click", () =>{
    renderItemsList(cameras);
    findInput.value = "";

});

const countPrice = () => {
    totalPrice.innerHTML ="";
    totalPrice.insertAdjacentHTML("afterbegin",
    `<p>Total price: </p>
                <p class="total_price" >${cameras.reduce(function(sum, current){
                    return parseInt(sum) + parseInt(current.price)
                },0)} </p>`)};
    

    sortButton.addEventListener("click", () => {
        const filteredCameras = sortItemsList(cameras);
        renderItemsList(filteredCameras);
;})
    renderItemsList(cameras);