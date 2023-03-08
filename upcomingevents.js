let upcomingevents = "" ;
let cardContainer = document.getElementById("card-container");
let upcomingeventslist=[];

for (let event of data.events){

    let currentDate= new Date(data.currentDate);
    let eventDate = new Date(event.date);
  
    if (eventDate>currentDate){
        upcomingevents += createCard(event);
        upcomingeventslist.push(event);

    }
}

cardContainer.innerHTML = upcomingevents;

let checkbox = document.getElementById("checkbox");
let home2 = "";

for(let category of categories){
    home2 += crearCheckbox(category);
}

checkbox.innerHTML = home2;

let itemsCheckboxes = document.querySelectorAll(".form-check-input");
console.log(itemsCheckboxes);

itemsCheckboxes.forEach(checkbox => checkbox.onchange = () =>{
    let HTMLresultados = "";
    let categories = [];
    itemsCheckboxes.forEach(checkbox => {
        if(checkbox.checked){
            categories.push(checkbox.value);
            
        }  
        
    });

    console.log(categories);
    
    if(categories.length>0){
        upcomingeventslist.filter(event => categories.includes(event.category)).forEach(event =>
            {HTMLresultados += createCard(event)});
      
            console.log(HTMLresultados);
      
            
    }else{
            upcomingeventslist.forEach(event =>
            {HTMLresultados += createCard(event)});
        }

        document.querySelector('div.events').innerHTML = HTMLresultados; 
    
  }  );
  
  
let cardsbusqueda=[];

let inputBusqueda=document.getElementById("search");
document.querySelector("#form-busqueda").onsubmit = (e)=> {
   e.preventDefault();

let resultadoBusqueda="";

let textingresado = inputBusqueda.value.toLowerCase().trim();

for (let event of upcomingeventslist) {
    if (event.name.toLowerCase().includes(textingresado)
    ||event.description.toLowerCase().includes(textingresado)) {
       resultadoBusqueda+= createCard(event); 
       cardsbusqueda.push(event);

    }
 }

 console.log(resultadoBusqueda);
 document.querySelector("#card-container").innerHTML = resultadoBusqueda;
 
 }

 