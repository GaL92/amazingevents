let pastevents = "" ;
let cardContainer = document.getElementById("card")

for (let event of data.events){

    let currentDate= new Date(data.currentDate);
    let eventDate = new Date(event.date);
  
    if (eventDate<currentDate){
        pastevents += createCard(event);

    }
}


cardContainer.innerHTML = pastevents;