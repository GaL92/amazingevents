
let dataamazing=[];

async function getData(){
  await fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(respuesta => respuesta.json())
  .then(json => data=json)
  localStorage.setItem("data",JSON.stringify(data))
} 

getData();

let data=localStorage.getItem("data");
  data = JSON.parse(data);
console.log(data);



function createCard(event){
  return `<div class="col-12 p-2 col-md-4 col-xl-3" id="${event.id}">
  <div class="card h-100">
    <img src="${event.image}">
    <div class="card-body">
      <h5 class="${event.name}">${event.name}</h5>
      <p class="${event.description}">${event.description}</p>
      <div class="d-grid gap-2 d-md-flex" id="precio-vermas">
          <p>Price: US$ ${event.price}</p>  
          <a href="./details.html?id=${event._id}" class="btn  btn-outline-secondary ">Ver más..</a>
        </div>
    </div>
  </div>
  </div>`
}

let categories = [];
data.events.forEach(evento => {
  if (!categories.includes(evento.category)){
    categories.push(evento.category)
  }
});
console.log(categories); 


function crearCheckbox(category) {
  return `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="checkbox${category}" value="${category}" name="category">
  <label class="form-check-label" for="checkbox${category}">${category}</label>
</div>`;
} 

