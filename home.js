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
    let checkcategories = [];
    itemsCheckboxes.forEach(checkbox => {
        if(checkbox.checked ){
            checkcategories.push(checkbox.value);  
        }
        
    });

    console.log(checkcategories);

    let textoingresado = inputBusqueda.value.toLowerCase().trim();
    HTMLresultados = Busqueda(checkcategories,textoingresado)


    document.querySelector('div.events').innerHTML = HTMLresultados; 
    
  }  );


  function Busqueda(categories,textoingresado){

    let HTMLresultados="";

    if(categories.length>0 && textoingresado == ""){ //Filtras por checkbox pero no usás la búsqueda
        data.events.filter(event => categories.includes(event.category)).forEach(event =>
            {HTMLresultados += createCard(event)
                
                });
      
            console.log(HTMLresultados);
            
    }else if(categories.length>0 && textoingresado != ""){ //1°Checkeas una categoría y 2° usás la búsqueda
        
       data.events.filter(event => categories.includes(event.category)).filter(event =>event.name.toLowerCase().includes(textoingresado) || event.description.toLowerCase().includes(textoingresado)).forEach(event =>
            {HTMLresultados += createCard(event)

                    
            });

            if(HTMLresultados == ""){
                HTMLresultados += `<div class="caja-section"><h2>No hay resultados para esta búsqueda.</h2></div>";`
    
            };
            
      
            console.log(HTMLresultados);
            
    }else if(categories.length==0 && textoingresado == ""){
            data.events.forEach(event =>
            {HTMLresultados += createCard(event)});

            if(HTMLresultados == ""){
                HTMLresultados += `<div class="caja-section"><h2>No hay resultados para esta búsqueda.</h2></div>";`
    
            };

    }
        

        return HTMLresultados;
  }

  let inputBusqueda=document.getElementById("search");

  document.querySelector("#form-busqueda").onsubmit = (e)=> {
     e.preventDefault();
     let HTMLresultados = "";
     let checkcategories = [];
     itemsCheckboxes.forEach(checkbox => {
         if(checkbox.checked ){
             checkcategories.push(checkbox.value);  
         }
         
     });
 
     console.log(checkcategories);
 
     let textoingresado = inputBusqueda.value.toLowerCase().trim();
     HTMLresultados = Busqueda(checkcategories,textoingresado);
 
 
     document.querySelector('div.events').innerHTML = HTMLresultados; 
   

  }


 
  




 
  

