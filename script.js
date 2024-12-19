let card = document.getElementById("card");
let elements = [];
let elements_container = document.getElementById("elements_container");
let width_inputs

let card_width = document.getElementById("width");
let card_height = document.getElementById("height");
let size_unit = document.getElementById("unit");
let size_btn = document.getElementById("save_size");

function ChangeSize() {
    card.style.width = card_width.value + size_unit.value ;
    card.style.height = card_height.value + size_unit.value ;
}

size_btn.addEventListener("click", ChangeSize);




let img_url = document.getElementById("image_url")
let save_img_btn = document.getElementById("save_img");

function add_img() {

  let element = {
    type : "img", 
    url : img_url.value, 
    width : "150px",
    height : "150px",
  } 
  elements.push(element);
  place_elements();
}

save_img_btn.addEventListener("click", add_img);






let content = document.getElementById("text");
let save_text_btn = document.getElementById("save_text");

function add_text() {
  let element = {
    type : "text", 
    content : content.value, 
    width : "150px",
    height : "150px",
    color : ""
  } 
  elements.push(element);

  place_elements();
}

save_text_btn.addEventListener("click", add_text);






function place_elements() {
    elements_container.innerHTML = ""
    card.innerHTML = "";
elements.forEach(element => {
    if (element.type === "text") {
        let text = document.createElement("p");
        text.innerHTML = element.content;
        text.style.width = element.width;   
        text.style.height = element.height; 
        
        card.appendChild(text);


        let element_details = document.createElement("div")
    element_details.innerHTML =`
      <div class="flex flex-row w-10/12 gap-2 bg-red-700 rounded-lg h-14 place-self-center">
    <p class="font-black place-self-center">TEXT</p>
    <input type="text" placeholder="${element.width}" class="self-center w-2/12 h-10 rounded-lg">
    <input type="text" placeholder="${element.height}" class="self-center w-2/12 h-10 rounded-lg">
    <input type="color" placeholder="height" class="self-center w-2/12 h-10 rounded-lg">
    <button class="self-center w-2/12 h-10 bg-green-600 rounded-lg" id="update_text">save</button>    
  </div>
    `
elements_container.appendChild(element_details)

    } else {
        let img = document.createElement("img");
        img.setAttribute("src", element.url);
        img.style.width =  element.width;
        img.style.height =  element.height;
      
        card.appendChild(img);


        let img_details = document.createElement("div")
        img_details.innerHTML = `
             <div class="flex flex-row w-10/12 gap-2 bg-red-700 rounded-lg h-14 place-self-center">
    <img src="${element.url}" alt="" class="w-16 h-14">
    <input type="text" placeholder="${element.width}" class="self-center w-2/12 h-10 rounded-lg">
    <input type="text" placeholder="${element.height}" class="self-center w-2/12 h-10 rounded-lg">
    <button class="self-center w-2/12 h-10 bg-green-600 rounded-lg" id="update_img">save</button>    
  </div>
        `
elements_container.appendChild(img_details)

    }
    
});    
}



console.log(elements);