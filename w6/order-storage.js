 const LOCAL_STORAGE_KEY = 'tshirt_orders_data';

 export const saveOrders = function(orders){
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
        console.log('Data saved to localStorage!')
    } catch (error) {
        console.log(`Error saving data to localStorage: ${error}`);
    }
 };

 export const loadOrders = function(){
    try {
        const previousData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (previousData) {
            return JSON.parse(previousData);
        }
            return [];
    } catch (e) {
        console.error(`Error loading entries from localStorage: ${e}`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
 };