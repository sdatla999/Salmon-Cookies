// Salmon - Cookies demo project using objects - Srinivasa Raju Datla
'use-strict';
var salmonCookies = {
    location: ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],
    visitingHours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
    minCustomers: Math.random(10, 20),
    maxCustomers: Math.random(21, 30),
    avgCookies: 10
};

locationName = prompt("Hi Sales team, Could you please provide the location name");

locationValidation(locationName);


function locationValidation(locationName) {
    for (i = 0; i < salmonCookies.location.length; i++) {

        if (locationName == salmonCookies.location[i]) {
            calculateHourlyTotals(locationName);
        }
    }
    msg = alert("Wrong Location, Please provide valid location");
    return msg;
}

function calculateHourlyTotals(locationName) {
    var locationStreetResults = [];
    var locationStreetHourlyTotals = [];

    for (var i = 0; i < salmonCookies.visitingHours.length; i++) {
        locationStreetResults[i] = Math.round(Math.random() * (10 - 1) + 1);
        locationStreetHourlyTotals[i] = salmonCookies.visitingHours[i] + ': ' + locationStreetResults[i] + ' cookies';
    }
    var totalCookies = 0;
   
    salmonCookies.minCustomers = Math.min.apply(null, locationStreetResults);
    salmonCookies.maxCustomers = Math.max.apply(null, locationStreetResults);
    salmonCookies.avgCookies = Math.round(avgCookiesPerHour(locationStreetResults));

    alert("Results :" + salmonCookies.avgCookies);

    
    console.log('Results :' + salmonCookies.avgCookies);
    console.log('Results2 :' + salmonCookies.minCustomers);
    console.log('Results3 :' + salmonCookies.maxCustomers);
    console.log('try ' + locationStreetHourlyTotals);
    alert("Results :" + salmonCookies.avgCookies);

    var pikeList = document.getElementById('pike-list');

    for (var k = 0; k < locationStreetHourlyTotals.length; k++) {
        // 1. Create new element
        var liEl = document.createElement('li');
        // 2. Give the element some content
        liEl.textContent = locationStreetHourlyTotals[k];
        // 3. Append the new element to its parent in the DOM
        pikeList.appendChild(liEl);

    }
}

function avgCookiesPerHour(locationStreetResults) {

    for (var i = 0; i < salmonCookies.visitingHours.length; i++) {
        totalCookies = totalCookies + locationStreetResults[i];
    }
    // avgCookies = totalCookies / (visitingHours.length - 1);
    return totalCookies / (salmonCookies.visitingHours.length - 1);
}

  