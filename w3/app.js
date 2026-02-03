import * as orderForm from "./order-handler.js"

const customOrderForm = document.getElementById('order-form');

const orderSummary = document.querySelector('order-summary');


const handleFormSubmit = function(event) {
    event.preventDefault();
    const orderForm = orderHandler.getOrderInputs();
}

const init = function() {
    customOrderForm.addEventListener('submit', handleFormSubmit);
};

document.addEventListener('DOMContentLoaded', init);