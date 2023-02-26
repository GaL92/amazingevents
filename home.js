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