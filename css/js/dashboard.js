// REI Vision Dashboard Engine

fetch("data/properties.json")
.then(response => response.json())
.then(properties => {

    let totalValue = 0;
    let totalRent = 0;
    let occupied = 0;
    let totalCapRate = 0;
    let totalCashFlow = 0;


    properties.forEach(property => {

        totalValue += property.marketValue;

        totalRent += property.monthlyRent;

        totalCapRate += property.capRate;

        totalCashFlow += property.cashFlow;


        if(property.occupancy === "Occupied"){
            occupied++;
        }

    });


    let occupancyRate =
    (occupied / properties.length) * 100;


    document.querySelector(".portfolio-value").innerHTML =
    "$" + totalValue.toLocaleString();


    document.querySelector(".monthly-rent").innerHTML =
    "$" + totalRent.toLocaleString();


    document.querySelector(".occupancy").innerHTML =
    occupancyRate.toFixed(1) + "%";


    document.querySelector(".cap-rate").innerHTML =
    (totalCapRate / properties.length).toFixed(2) + "%";


    document.querySelector(".cash-flow").innerHTML =
    "$" + totalCashFlow.toLocaleString();


    document.querySelector(".properties").innerHTML =
    properties.length;


});
