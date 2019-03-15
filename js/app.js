// Salmon - Cookies demo project using objects - Srinivasa Raju Datla
'use-strict';
var salmonCookies = {
    location: ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'],
    visitingHours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
    pikeCenterCookieListId: 'hourlycookie-list-pike-center',
    seaTecCookieListId: 'hourlycookie-list-seaTec-center',
    seattleCenterCookieListId: 'hourlycookie-list-seattle-center',
    capitolHillCookieListId: 'hourlycookie-list-capitol-center',
    alkiCookieListId: 'hourlycookie-list-alki-center'
};

    var pikeCenter = {
        minimumHourlyCustomer: 6,
        maximumHourlyCustomer: 50,
        averageCookiesPerCustomer: 5,
        customersPerHour: function () {
            var min = Math.ceil(pikeCenter.minimumHourlyCustomer);
            var max = Math.floor(pikeCenter.maximumHourlyCustomer);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        cookiesPerHour: function () {

            return Math.floor(pikeCenter.customersPerHour() * pikeCenter.averageCookiesPerCustomer);
        },
        totalCookiesPerDay: function () {
            return Math.floor(pikeCenter.cookiesPerHour() * 12);
        }
    };

    var seaTecCenter = {
        minimumHourlyCustomer: 8,
        maximumHourlyCustomer: 60,
        averageCookiesPerCustomer: 5,
        customersPerHour: function () {
            var min = Math.ceil(seaTecCenter.minimumHourlyCustomer);
            var max = Math.floor(seaTecCenter.maximumHourlyCustomer);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        cookiesPerHour: function () {

            return Math.floor(seaTecCenter.customersPerHour() * seaTecCenter.averageCookiesPerCustomer);
        },
        totalCookiesPerDay: function () {
            return Math.floor(seaTecCenter.cookiesPerHour() * 12);
        }
    };

    var seattleCenter = {
        minimumHourlyCustomer: 10,
        maximumHourlyCustomer: 70,
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

    var capitolCenter = {
        minimumHourlyCustomer: 12,
        maximumHourlyCustomer: 80,
        averageCookiesPerCustomer: 5,
        customersPerHour: function () {
            var min = Math.ceil(capitolCenter.minimumHourlyCustomer);
            var max = Math.floor(capitolCenter.maximumHourlyCustomer);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        cookiesPerHour: function () {

            return Math.floor(capitolCenter.customersPerHour() * capitolCenter.averageCookiesPerCustomer);
        },
        totalCookiesPerDay: function () {
            return Math.floor(capitolCenter.cookiesPerHour() * 12);
        }
    };

    var alkiCenter = {
        minimumHourlyCustomer: 14,
        maximumHourlyCustomer: 90,
        averageCookiesPerCustomer: 5,
        customersPerHour: function () {
            var min = Math.ceil(alkiCenter.minimumHourlyCustomer);
            var max = Math.floor(alkiCenter.maximumHourlyCustomer);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        cookiesPerHour: function () {

            return Math.floor(alkiCenter.customersPerHour() * alkiCenter.averageCookiesPerCustomer);
        },
        totalCookiesPerDay: function () {
            return Math.floor(alkiCenter.cookiesPerHour() * 12);
        }
    };

    var pikeCenterContents = calculateHourySales(pikeCenter);
    generateSalesProjectionLists(pikeCenterContents, salmonCookies.pikeCenterCookieListId);

    var seaTecCenterContents = calculateHourySales(seaTecCenter);
    generateSalesProjectionLists(seaTecCenterContents, salmonCookies.seaTecCookieListId);

    var seattleCenterContents = calculateHourySales(seattleCenter);
    generateSalesProjectionLists(seattleCenterContents, salmonCookies.seattleCenterCookieListId);

    var capitoCenterContents = calculateHourySales(capitolCenter);
    generateSalesProjectionLists(capitoCenterContents, salmonCookies.capitolHillCookieListId);

    var alkiCenterContents = calculateHourySales(alkiCenter);
    generateSalesProjectionLists(alkiCenterContents, salmonCookies.alkiCookieListId);



function calculateHourySales(objName) {
    var listContents = [];
    var cookiesCount = 0;
    var total = 'Total';
    for (var i = 0; i < salmonCookies.visitingHours.length; i++) {
        var hourlyCookie = objName.cookiesPerHour();
        cookiesCount = cookiesCount + hourlyCookie;
        listContents.push(salmonCookies.visitingHours[i] + ' : ' + hourlyCookie);
        console.log("Inside calculate Hourly Sales");
    }
    listContents.push(total + ' : ' + cookiesCount);
    return listContents;
};

function generateSalesProjectionLists(cookieContents, documentId) {
    var idList = document.getElementById(documentId);

    console.log(documentId);
    console.log(cookieContents);
    console.log(idList);

    for (var i = 0; i < cookieContents.length; i++) {
        // 1. Create new element
        var liEl = document.createElement('li');
        // 2. Give the element some content
        //alert(pike.cookiesPerHour());
        liEl.textContent = cookieContents[i];
        // 3. Append the new element to its parent in the DOM
        console.log(idList);
        idList.appendChild(liEl);
    }
};