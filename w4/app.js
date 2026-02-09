import * as orderForm from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";


const customOrderFormEntries = [];

const customOrderForm = document.getElementById('order-form');

const orderSummary = document.querySelector('order-summary');


const handleFormSubmit = function(event) {
    event.preventDefault();
    const orderFormData = orderData.cal
    console.log(event);
    orderForm.getOrderInputs();
};

const init = function() {
    customOrderForm.addEventListener('submit', handleFormSubmit);
};

document.addEventListener('DOMContentLoaded', init);