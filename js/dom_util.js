
const nameInput = document.getElementById("name_input");
const priceInput = document.getElementById("price_input");
const weightInput = document.getElementById("weight_input");
const zoomInput = document.getElementById("zoom_input");
const itemsContainer = document.getElementById("items_container");
const editWindow = document.getElementById("edit__window");

export const EDIT_BUTTON_PREFIX = 'edit-button-';

export const getInputValues = () => {
    return{
        name : nameInput.value,
        price : priceInput.value,
        weight : weightInput.value,
        zoom : zoomInput.value,
    
    };
};

export const clearInputs = () => {
    nameInput.value = "";
    priceInput.value = "";
    weightInput.value = "";
    zoomInput.value = "";
};

export const getItemId = (id) => `item-${id}`;
const itemTemplate = ({id, name, price, weight, zoom}) => 
    `<li id = "${getItemId(id)}" class="card" draggable="true">
    <img src = "images/camera_img1.png" class="item-container__image" alt="card"> 
                        <div class="card-body">
                          <h2 class="card-title">${name}</h2>
                          <p class="card-text">Description:</p>
                          <div class="info__container">
                         <div class="info__container small">
                            <p class="card-text">Price: </p>
                            <p class="card-text">Weight: </p>
                            <p class="card-text">Zoom ratio: </p>
                        </div>
                        <div class="info__container small">
                            <p class="card-text">${price} UAN</p>
                            <p class="card-text">${weight} kg </p>
                            <p class="card-text">${zoom} </p>
                        </div>
                    </div><button id="edit-button${id}" type="button" class="btn btn-info">
                            Edit
                          </button>
                        </div>
                      </li>`;

export const addItemToPage = ({id, name, price, weight, zoom}) =>{
    itemsContainer.insertAdjacentHTML(
        "afterbegin", 
        itemTemplate({id, name, price, weight, zoom})
    );
   
    const element = document.getElementById(getItemId(id));
    const editButton = document.getElementById(`edit-button${id}`);
    editButton.addEventListener("click", (event) => {
        editWindow.style.display = "block";

        
    });
    
};

nameInput.addEventListener("input", () => {
    if (!isNaN(nameInput.value) ){
        
        nameInput.setCustomValidity("Name must start with a letter and can't be empty");
        nameInput.reportValidity();
    } else { nameInput.setCustomValidity(""); }
    
  });


export const renderItemsList = (items) =>{
    itemsContainer.innerHTML = "";
    for (const item of items){
        addItemToPage(item);
    }
};



export const sortItemsList = (list) => {
    return list.sort((a,b) => {return a.price - b.price;})
}
