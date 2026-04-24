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
        id: Date.now().toString(),
        ...orderData,
        ...calculatedPrice,
        timestamp: new Date().toISOString()
    }

    customOrderFormEntries.push(newOrder);
    orderStorage.saveOrders(customOrderFormEntries);
     orderList.renderTable(customOrderFormEntries, {
    onDelete: handleDelete,
    onEdit: handleEdit
});
};



const handleDelete = function(id) {
    console.log("App.js: Requesting delete for order", id);
    const indexToDelete = customOrderFormEntries.findIndex(function(entry) {
        return entry.id === id;
    });

    if (indexToDelete !== -1) {
        customOrderFormEntries.splice(indexToDelete, 1);
        orderStorage.saveOrders(customOrderFormEntries);
        orderList.renderTable(customOrderFormEntries, {
            onDelete: handleDelete,
            onEdit: handleEdit
        });
    if (customOrderFormEntries.length === 0) {
        orderStorage.clearOrders();
    }
}
};

const handleEdit = function(id) {
    console.log("App.js: Requesting edit for order", id);
};


const init = function() {
    const loadedOrders = orderStorage.loadOrders();
    customOrderForm.addEventListener('submit', handleFormSubmit);
   if (loadedOrders.length > 0) {
    customOrderFormEntries.push(...loadedOrders);
    orderList.renderTable(customOrderFormEntries, {
    onDelete: handleDelete,
    onEdit: handleEdit
});
}
};


document.addEventListener('DOMContentLoaded', init);