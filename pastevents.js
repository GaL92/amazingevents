let htmlEvents = "" ;
for (let event of data.events){

    let currentDate= new Date(data.currentDate);
    let eventDate = new Date(event.date);
    console.log(currentDate);
    console.log(eventDate);

    if (eventDate<currentDate){
        console.log('pasado');
    }else{
        console.log('futuro');
    }

    htmlEvents += `
    <div class="controles p-4">
    <div class="col-12 p-2 col-md-4 col-xl-3">
    <div class="card">
      <img src="${event.image}">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <a href="#" class="btn btn-primary">Ver más</a>
      </div>
    </div>
    </div>`
}

console.log(htmlEvents);