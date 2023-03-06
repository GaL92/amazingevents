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
        data.events.filter(event => categories.includes(event.category)).forEach(event =>
            {HTMLresultados += createCard(event)});
      
            console.log(HTMLresultados);
      
            
    }else{
        data.events.forEach(event =>
            {HTMLresultados += createCard(event)});
    }

        document.querySelector('div.events').innerHTML = HTMLresultados; 
    
    
     
     
  }  );

  


 
  

