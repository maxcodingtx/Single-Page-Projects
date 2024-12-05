//setting total to equal default phone price ($899)
calculateTotal()

// changes image based on what color user decides
function displayPhone(color) {
    if (color == 'black') {
        document.getElementById('phone-image').src="img/iphone-16-plus-black-default.jpg"
    } else {document.getElementById('phone-image').src="img/iphone-16-plus-white-default.jpg"}
}


function getStoragePrice(storagePrice) {
    // setting selected storage price in table
    document.getElementById('storagePrice').innerText = `$${storagePrice}`
    calculateTotal()
}

function getDeliveryPrice(deliveryPrice) {
    // setting selected delivery price in table
    document.getElementById('deliveryPrice').innerText = `$${deliveryPrice}`
    calculateTotal()
}

function calculateTotal() {
    var deliveryPrice = document.getElementById('deliveryPrice').innerText;
    var storagePrice = document.getElementById('storagePrice').innerText;
    // removing $ signs from the elements innerText, then implicitly coercing innerText into integers.
    var totalPrice = deliveryPrice.replace('$', '')*1 + storagePrice.replace('$', '')*1 + 899
    // showing total amount in totalPrice element (bottom of screen)
    document.getElementById('totalPrice').innerHTML = `Total - $${totalPrice}`
};
