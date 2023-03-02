let home = "" ;
let cardContainer = document.getElementById("card")

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
    
    
    data.events.filter(event => categories.includes(event.category)).forEach(event =>
      {HTMLresultados += createCard(event)});

      console.log(HTMLresultados);
     
    document.querySelector('div.resultados').innerHTML = HTMLresultados;
  
  });

  

