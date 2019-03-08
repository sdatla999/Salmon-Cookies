// Salmon - Cookies demo project using objects - Srinivasa Raju Datla
'use-strict';
var salmonCookies = {
    location: ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],
    visitingHours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
    seattleCenterCookieListId: 'hourlycookie-list-seattle-center'
};

locationName = prompt("Hi Sales team, Could you please provide the location name");

locationValidation(locationName);


function locationValidation(locationName) {

    for (i = 0; i < salmonCookies.location.length; i++) {
        var locationFound = 'N';
        if (locationName == salmonCookies.location[i]) {
            locationSalesReport();
            locationFound = 'Y';
        }
    }
    if (locationFound == 'N') {
        msg = alert("Wrong Location, Please provide valid location");
    }
};

function locationSalesReport() {
    var seattleCenter = {
        minimumHourlyCustomer: 8,
        maximumHourlyCustomer: 60,
        averageCookiesPerCustomer: 5,
        customersPerHour: function () {
            var min = Math.ceil(seattleCenter.minimumHourlyCustomer);
            var max = Math.floor(seattleCenter.maximumHourlyCustomer);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        cookiesPerHour: function () {

            return Math.floor(seattleCenter.customersPerHour() * seattleCenter.averageCookiesPerCustomer);
        },
        totalCookiesPerDay: function () {
            return Math.floor(seattleCenter.cookiesPerHour() * 12);
        }
    };

    var seattleCenterContents = calculateHourySales(seattleCenter);
    generateSalesProjectionLists(seattleCenterContents, salmonCookies.seattleCenterCookieListId);

};

function calculateHourySales(objName) {
    var listContents = [];
    var cookiesCount = 0;
    var total = 'Total';
    for (var i = 0; i < salmonCookies.visitingHours.length; i++) {
        var hourlyCookie = objName.cookiesPerHour();
        cookiesCount = cookiesCount + hourlyCookie;
        listContents.push(salmonCookies.visitingHours[i] + ' : ' + hourlyCookie);
    }
    listContents.push(total + ' : ' + cookiesCount);
    return listContents;
};

function generateSalesProjectionLists(cookieContents, documentId) {
    var idList = document.getElementById(documentId);

    for (var i = 0; i < cookieContents.length; i++) {
        // 1. Create new element
        var liEl = document.createElement('li');
        // 2. Give the element some content
        //alert(pike.cookiesPerHour());
        liEl.textContent = cookieContents[i];
        // 3. Append the new element to its parent in the DOM
        idList.appendChild(liEl);
    }
};