import { deleteCamera, getAllCameras, postCamera, updateCamera } from "./api.js";
import {
    
    addItemToPage,
    clearInputs,
    sortItemsList,
    getInputValues,
    renderItemsList,
    getInputValuesEdit,
  } from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById( "cancel_find_button");
const findInput = document.getElementById( "find_input");
const sortButton = document.getElementById( "sort_button");
const totalPrice = document.getElementById("total_price");
const submitEdit = document.getElementById("submit_button1");

const deleteItem = document.getElementById("delete_item");

let cameras = [];
const closeButton = document.getElementById("close_button");
const closeButtonEdit = document.getElementById("close_button_on_edit");
const modalWindow = document.getElementById("modal");
const editWindow = document.getElementById("edit__window");

closeButton.addEventListener("click", (event) =>{
    modalWindow.style.display = "none";
});
closeButtonEdit.addEventListener("click", (event) =>{
    editWindow.style.display = "none";
});


deleteItem.addEventListener("click", (event) => {
    const id = deleteItem.className;
    deleteCamera(id).then(refetchAllCameras);
    });


submitEdit.addEventListener("click", (event) => {
    const id = submitEdit.className;
    const {name ,price, weight, zoom} = getInputValuesEdit();
    updateCamera(id,{
        name,
        price,
        weight,
        zoom
      } ).then(refetchAllCameras);
    })


 export const refetchAllCameras =  async () => {
    var newCameras = await getAllCameras()
    cameras = []
    for(const [id, item] of Object.entries(newCameras)) {
        cameras.push({ id, name: item.name, price: item.price, weight: item.weight, zoom: item.zoom })
    }
    renderItemsList(cameras);
    countPrice();
}


submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    const {name ,price, weight, zoom} = getInputValues();
    if(name=="" || price=="" ||weight=="" || zoom==""){
        modalWindow.style.display = "block";
    }
    else{
    clearInputs();
    postCamera({
        name,
        price,
        weight,
        zoom
      }).then(refetchAllCameras);
  
    ;}
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


refetchAllCameras();
   
    