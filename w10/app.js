import * as orderForm from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as orderStorage from './order-storage.js';
import * as orderList from './order-lists.js';


const customOrderFormEntries = [];

const customOrderForm = document.getElementById('order-form');

const orderSummary = document.querySelector('order-summary');


const handleFormSubmit = function(event) {
    event.preventDefault();

    const orderData = orderForm.getOrderInputs();
    const calculatedPrice = priceCalculator.calculateTotal(orderData);

    const hiddenOrderId = document.getElementById('order-id').value;

    if (hiddenOrderId) {
        const indexToUpdate = customOrderFormEntries.findIndex(function(entry) {
            return entry.id === hiddenOrderId;
        });

        if (indexToUpdate !== -1) {
            customOrderFormEntries[indexToUpdate] = {
                ...customOrderFormEntries[indexToUpdate],
                ...orderData,
                ...calculatedPrice
            };

            console.log(`Updated entry id: ${hiddenOrderId}`);
        }
    } else {
        const newOrder = {
            id: Date.now().toString(),
            ...orderData,
            ...calculatedPrice,
            timestamp: new Date().toISOString()
        };

        customOrderFormEntries.push(newOrder);
        console.log(`Added new entry id: ${newOrder.id}`);
    }

    orderStorage.saveOrders(customOrderFormEntries);

    orderList.renderTable(customOrderFormEntries, {
        onDelete: handleDelete,
        onEdit: handleEdit
    });

    document.getElementById('order-id').value = '';
    customOrderForm.reset();
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
        console.log(`Deleted entry id: ${id}`);
    }
};

const handleEdit = function(id) {
    console.log("App.js: Requesting edit for order", id);
    const entryToEdit = customOrderFormEntries.find(function(entry){
        return entry.id === id;
    })
     if(entryToEdit) {
            orderForm.populateFormEdit(entryToEdit);
            console.log(`Editing entry id is ${id} form populated`);
        }
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