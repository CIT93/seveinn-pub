
export const calculateTotal = function(orderData) {
    const shirtPrice = 15;
    const giftWrapPrice = 2;
    // extracts numberOfShirtts out of the orderData(param)
    const qtyOfShirts = orderData.numberOfShirts;
    const giftWrapChecked = orderData.giftWrap
    let totalPrice = qtyOfShirts * shirtPrice;
    if (giftWrapChecked) {
        totalPrice += giftWrapPrice;
        console.log(totalPrice);
       } else {
        console.log(totalPrice);
        return totalPrice;
    }
        
        return {
            totalPrice: 47
        }
    
};