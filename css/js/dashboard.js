fetch("data/properties.json")
.then(response => response.json())
.then(properties => {

let totalValue = 0;
let totalRent = 0;
let totalCashFlow = 0;
let totalCapRate = 0;


properties.forEach(property => {

    totalValue += property.value;

    totalRent += property.rent;

    totalCashFlow += property.rent - property.expenses;

    totalCapRate += property.capRate;

});


document.querySelector(".portfolio-value").innerHTML =
"$" + totalValue.toLocaleString();


document.querySelector(".monthly-rent").innerHTML =
"$" + totalRent.toLocaleString();


document.querySelector(".cash-flow").innerHTML =
"$" + totalCashFlow.toLocaleString();


document.querySelector(".cap-rate").innerHTML =
(totalCapRate / properties.length).toFixed(2) + "%";


document.querySelector(".properties").innerHTML =
properties.length;


});
