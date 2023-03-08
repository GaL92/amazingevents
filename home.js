let home = "" ;
let cardContainer = document.getElementById("card-container")

for (let event of data.events){

    let currentDate= new Date(data.currentDate);
    let eventDate = new Date(event.date);
  
    if (eventDate>currentDate||eventDate<currentDate){
        home += createCard(event);

    }
}

cardContainer.innerHTML = home;


let checkbox = document.getElementById("checkbox");
let home2 = "";
let cardsbusqueda=[];

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
        if(checkbox.checked ){
            categories.push(checkbox.value);  
        }
        
    });

    console.log(categories);
    
    if(categories.length>0 && cardsbusqueda.length <1){ //Filtras por checkbox pero no usás la búsqueda
        data.events.filter(event => categories.includes(event.category)).forEach(event =>
            {HTMLresultados += createCard(event)});
      
            console.log(HTMLresultados);
      
            
    }else if(categories.length>0 && cardsbusqueda.length >0){ //1°Checkeas una categoría y 2° usás la búsqueda
        
        cardsbusqueda.filter(event => categories.includes(event.category)).forEach(event =>
            {HTMLresultados += createCard(event)});
      
            console.log(HTMLresultados);
            
    }else if(categories.length==0 && cardsbusqueda.length == 0){
            data.events.forEach(event =>
            {HTMLresultados += createCard(event)});
        }

        document.querySelector('div.events').innerHTML = HTMLresultados; 
    
  }  );


  let inputBusqueda=document.getElementById("search");

  document.querySelector("#form-busqueda").onsubmit = (e)=> {
     e.preventDefault();

  let resultadoBusqueda="";
  
  let textingresado = inputBusqueda.value.toLowerCase().trim();
  
  for (let event of data.events) {
     if (event.name.toLowerCase().includes(textingresado)
     ||event.description.toLowerCase().includes(textingresado)) {
        resultadoBusqueda+= createCard(event); 
        cardsbusqueda.push(event);
        categories = cardsbusqueda.category;
        }  
    }

  console.log(resultadoBusqueda);
  document.querySelector("#card-container").innerHTML=resultadoBusqueda;
  }

console.log(cardsbusqueda)
 
  




 
  

