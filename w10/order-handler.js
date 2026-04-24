const numberOfShirts = document.getElementById('qty');
const shirtSizeInput = document.querySelectorAll('input[name="size"]');
const giftWrap = document.querySelector('#gift-wrap'); 
const orderIdInput = document.getElementById('order-id');

const getSelectedSize = function(size) {
    for (const radio of size) {
        if (radio.checked) {
            return radio.value;
        }
    }
};

const setSelectedSize = function(sizeInputs, savedSize) {
    for (const radio of sizeInputs) {
        if (radio.value === savedSize) {
            radio.checked = true;
        }
    }
};

export const getOrderInputs = function() {
    console.log('Get Order Inputs');

    return {
        numberOfShirts: parseInt(numberOfShirts.value) || 1,
        shirtSize: getSelectedSize(shirtSizeInput),
        giftWrap: giftWrap.checked
    };
};

export const populateFormEdit = function(entry) {
    numberOfShirts.value = entry.numberOfShirts;
    giftWrap.checked = entry.giftWrap;
    setSelectedSize(shirtSizeInput, entry.shirtSize);
    orderIdInput.value = entry.id;

    console.log(`Form populated for editing entry id: ${entry.id}`);
};