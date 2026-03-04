import * as orderForm from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as orderStorage from './order-storage.js';
import * as orderList from './order-lists.js';


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
    orderStorage.saveOrders(customOrderFormEntries);
    orderList.renderTable(customOrderFormEntries)
};



const init = function() {
    const loadedOrders = orderStorage.loadOrders();
    customOrderForm.addEventListener('submit', handleFormSubmit);
   if (loadedOrders.length > 0) {
    customOrderFormEntries.push(...loadedOrders);
    orderList.renderTable(customOrderFormEntries);
    
}
};


document.addEventListener('DOMContentLoaded', init);