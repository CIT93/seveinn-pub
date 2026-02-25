import * as orderForm from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as resultsDisplay from './results-display.js';
import * as orderStorage from './order-storage.js';


const customOrderFormEntries = [];

const customOrderForm = document.getElementById('order-form');

const orderSummary = document.querySelector('order-summary');


const handleFormSubmit = function(event) {
    event.preventDefault();
    //creates variables for my object
    const orderData = orderForm.getOrderInputs();
    //creates a variable for my calculations then must pass previous variable through param to use in calc
    const calculatedPrice = priceCalculator.calculateTotal(orderData);

    const newOrder = {
        ...orderData,
        ...calculatedPrice,
        timestamp: new Date().toISOString()
    }

    customOrderFormEntries.push(newOrder);
    resultsDisplay.displayOrder(newOrder);
};

const init = function() {
    const loadedData = orderStorage.loadOrders();
    customOrderForm.addEventListener('submit', handleFormSubmit);
    if (loadedData.length > 0) {
        customOrderFormEntries.push(...loadedData);
        console.log(`Entrties loaded from localStorage`)
    } else {
        console.log('No entries found in localStorage');
    }
};


document.addEventListener('DOMContentLoaded', init);