
let pasteventslist= [];

for (let event of data.events){

    let currentDate= new Date(data.currentDate);
    let eventDate = new Date(event.date);
  
    if (eventDate<currentDate){
        pasteventslist.push(event);
    }
}

console.log(pasteventslist);



//////////////// EVENT STATISTICS



let tableEventstats = document.getElementById("eventsstatstable");

 async function getEventsStats() {  
        
    let tableBodyHTML = "";
       
    tableBodyHTML += `<tr>
        <td>${getBigger().name}</td>
        <td>${getSmaller().name}</td>
        <td>${getLarger().name} </td>
    </tr>`;

    tableEventstats.innerHTML = tableBodyHTML ;

    };
   
getEventsStats(); 


function getBigger(pastevents){
    return pasteventslist.reduce((bigger, current) => {
        if ((current.assistance/current.capacity) > (bigger.assistance/bigger.capacity)){
            return current;
        } else {
            return bigger;
        }
    });
}


console.log(getBigger().name);



function getSmaller(pastevents){
    return pasteventslist.reduce((smaller, current) => {
        if ((current.assistance/current.capacity) < (smaller.assistance/smaller.capacity)){
            return current;
        } else {
            return smaller;
        }
    });
}

console.log(getSmaller());


function getLarger(events){
    return data.events.reduce((larger, current) => {
        if (current.capacity > larger.capacity){
            return current;
        } else {
            return larger;
        }
    });
}

console.log(getLarger());







//////////////// UPCOMING EVENTS STATISTICS

let upcomingeventslist=[];

for (let event of data.events){

    let currentDate= new Date(data.currentDate);
    let eventDate = new Date(event.date);
  
    if (eventDate>currentDate){
        upcomingeventslist.push(event);
    }
}

let tableBodyUpcoming = document.getElementById("upcomingeventstable");

async function getUpcomingEvents() {
        
    let tableBodyHTML = "";
    categories.forEach(category => {

        let filteredEvents = getEventsbycategory(category,upcomingeventslist);
        let ganancias = Ganancias(filteredEvents);  
        let porcentajeAsistencia = PorcentajeAsistencia(filteredEvents);

        tableBodyHTML += `<tr>
        <td>${category}</td>
        <td>${ganancias}</td>
        <td>${porcentajeAsistencia} </td>
    </tr>`;

    console.log(tableBodyHTML);
    });

    tableBodyUpcoming.innerHTML = tableBodyHTML;

}

getUpcomingEvents();




//////////////// PAST EVENTS STATISTICS


let tableBodyPast = document.getElementById("pasteventstable");
async function getPastEvents() {
        
        let tableBodyHTML = "";
        categories.forEach(category => {
    
            let filteredEvents = getEventsbycategory(category,pasteventslist);
            console.log(getEventsbycategory(category,pasteventslist));
            let ganancias = Ganancias(filteredEvents);  
            let porcentajeAsistencia = PorcentajeAsistencia(filteredEvents);

            tableBodyHTML += `<tr>
            <td>${category}</td>
            <td>${ganancias}</td>
            <td>${porcentajeAsistencia} </td>
        </tr>`;
        });

        tableBodyPast.innerHTML = tableBodyHTML;

    }

getPastEvents();

function getEventsbycategory(category,events) {
    return events.filter(event => {
        if (event.category.includes(category)) {
            return true;
        } else {
            return false;
        }
    });
}


function Ganancias(events){   
    let sumarGanancias= 0;
    events.forEach(event => {if (event.assistance != null){
         sumarGanancias += (event.price * event.assistance);
        } else{
            sumarGanancias += (event.price * event.estimate);
        }
        })
    return sumarGanancias;

}

function PorcentajeAsistencia(events){   
    let sumarAsistencia = 0;
    let sumarEstimacion = 0;
    let sumarCapacidad = 0
    events.forEach(event => {if (event.assistance != null){
        (sumarAsistencia += event.assistance) && (sumarCapacidad += event.capacity)
    } else{
        (sumarAsistencia += event.estimate) && (sumarCapacidad += event.capacity)
    }
    })
    return Math.round((sumarAsistencia/sumarCapacidad)*100) + "%" ;

}
