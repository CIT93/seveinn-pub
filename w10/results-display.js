const resultsContainer = document.getElementById('order-summary');

const totalAmountCostDisplay = resultsContainer.querySelector('#display-total');
const totalAmountShirtsDisplay = resultsContainer.querySelector('#display-qty');
const giftWrappedSelected = resultsContainer.querySelector('#display-gift');

export const displayOrder = function(order) {
    
    totalAmountCostDisplay.textContent = `${order.totalPrice.toFixed(0)} Total Cost:`;
    totalAmountShirtsDisplay.textContent = `${order.qtyOfShirts} Total Amount Of Shirts:`;
    if (order.giftWrapChecked) {
        giftWrappedSelected.textContent = "Gift Wrap: Yes";
    } else {
        giftWrappedSelected.textContent = "Gift Wrap: No";
    }
    resultsContainer.style.display = 'block';
};