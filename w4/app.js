import * as orderForm from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";


const customOrderFormEntries = [];

const customOrderForm = document.getElementById('order-form');

const orderSummary = document.querySelector('order-summary');


const handleFormSubmit = function(event) {
    event.preventDefault();
    //creates variables for my object
    const orderData = orderForm.getOrderInputs();
    //creates a variable for my calculations then must pass previous variable through param to use in calc
    const calculatedPrice = priceCalculator.calculateTotal(orderData);
    console.log(calculatedPrice);
    orderForm.getOrderInputs();

    const newOrder = {
        ...orderData,
        ...calculatedPrice,
        timestamp: new Date().toISOString()
    }

    customOrderFormEntries.push(newOrder);
    console.log(customOrderFormEntries);
};

const init = function() {
    customOrderForm.addEventListener('submit', handleFormSubmit);
};

document.addEventListener('DOMContentLoaded', init);