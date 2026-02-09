
export const calculateTotal = function(orderData) {

    const shirtPrice = 15;

    const giftWrapPrice = 2;

    // extracts numberOfShirtts out of the orderData(param)

    const qtyOfShirts = orderData.numberOfShirts;
    
    const giftWrapChecked = orderData.giftWrap

    let totalPrice = qtyOfShirts * shirtPrice;

    if (giftWrapChecked) {
        totalPrice += giftWrapPrice;
    }
        
        return {
           totalPrice: totalPrice
        }
    
};