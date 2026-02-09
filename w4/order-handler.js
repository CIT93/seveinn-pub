 

const numberOfShirts = document.getElementById('qty');

const shirtSizeInput = document.querySelectorAll('input[name="size"]');

const giftWrap = document.querySelector('#gift-wrap'); 

const getSelectedSize = function (size) {
    for (const radio of size) {
        if (radio.checked) {
            return radio.value;
        }
    }
};

const selectShirtSize = getSelectedSize(shirtSizeInput);

export const getOrderInputs = function (orderData) {
    console.log('Get Order Inputs');

getSelectedSize(selectShirtSize);

    return {
        // key: values,
        numberOfShirts: parseInt(numberOfShirts.value) || 1,
        shirtSize: getSelectedSize(shirtSizeInput),
        giftWrap: giftWrap.checked
    };

    
};

