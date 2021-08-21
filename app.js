// Extra Memory 
const ram8GB = document.getElementById('8gb-ram');
const ram16GB = document.getElementById('16gb-ram');

// Extra Storage Button
const rom256GB = document.getElementById('256gb-rom');
const rom512GB = document.getElementById('512gb-rom');
const rom1TB = document.getElementById('1tb-rom');

// Extra Shipping Button
const freeDelivery = document.getElementById('free-shipping');
const expressDelivery = document.getElementById('express-shipping');

// Extra Memory Field
const extraMemoryField = document.getElementById('memory-cost');

// Extra Storaage Field
const extraStorageField = document.getElementById('storage-cost');

// Extra Shipping Field
const extraShippingField = document.getElementById('shipping-cost');

// Best Price Field
const bestPriceText = document.getElementById('best-price');

// Price
const price = document.getElementById('price');

// Grand Total Field
const grandTotal = document.getElementById('grand-total');

// Active NonActive Function
function isContain(elem) {
    return elem.classList.contains('active');
}

// Promo Code Function
function usePromo() {
    if (document.getElementById('Promo').value == 'stevekaku') {
        grandTotal.innerText = price.innerText * 0.8;
    } else {
        document.getElementById('promo-text').innerText = 'Sorry! Promo Code Not Valid!';
    }
};


// Update Total Function
function updateTotal() {
    const bestPrice = Number(bestPriceText.innerText);
    const extraMemoryCost = Number(extraMemoryField.innerText);
    const extraStorageCost = Number(extraStorageField.innerText);
    const extraShippingCost = Number(extraShippingField.innerText);
    const total = bestPrice + extraMemoryCost + extraStorageCost + extraShippingCost;
    price.innerText = total;
    grandTotal.innerText = total;
}

// 8GB Unified Memory
ram8GB.addEventListener('click', function() {
    // Active or Non Active Check
    if (!isContain(ram8GB)) {
        ram8GB.classList.add('active');
        ram16GB.classList.remove('active');
    }
    // Add Extra Memory Cost
    extraMemoryField.innerText = '0';
    // Update Price
    updateTotal()
})

// 16GB Unified Memory
ram16GB.addEventListener('click', function() {
    // Active or Non Active Check
    if (!isContain(ram16GB)) {
        ram8GB.classList.remove('active');
        ram16GB.classList.add('active');
    }
    // Add Extra Memory Cost
    extraMemoryField.innerText = '180';
    // Update Price
    updateTotal()
})

// 256GB SSD Storage
rom256GB.addEventListener('click', function() {
    // Active or Non Active Check
    if (!isContain(rom256GB)) {
        rom256GB.classList.add('active');
        rom512GB.classList.remove('active');
        rom1TB.classList.remove('active');
    }
    // Add Extra Storage Cost
    extraStorageField.innerText = '0';
    // Update Price
    updateTotal()
})

// 512GB SSD Storage
rom512GB.addEventListener('click', function() {
    // Active or Non Active Check
    if (!isContain(rom512GB)) {
        rom256GB.classList.remove('active');
        rom512GB.classList.add('active');
        rom1TB.classList.remove('active');
    }
    // Add Extra Storage Cost
    extraStorageField.innerText = '100';
    // Update Price
    updateTotal()
})

// 1TB SSD Storage
rom1TB.addEventListener('click', function() {
    // Active or Non Active Check
    if (!isContain(rom1TB)) {
        rom256GB.classList.remove('active');
        rom512GB.classList.remove('active');
        rom1TB.classList.add('active');
    }
    // Add Extra Storage Cost
    extraStorageField.innerText = '180';
    // Update Price
    updateTotal()
})

// Free Prime Delivery
freeDelivery.addEventListener('click', function() {
    console.log('jdgfi');
    // Active or Non Active Check
    if (!isContain(freeDelivery)) {
        freeDelivery.classList.add('active');
        expressDelivery.classList.remove('active');
    }
    // Add Extra SHipping Cost
    extraShippingField.innerText = '0';
    // Update Price
    updateTotal()
})

// Express Delivery
expressDelivery.addEventListener('click', function() {
    // Active or Non Active Check
    if (!isContain(expressDelivery)) {
        freeDelivery.classList.remove('active');
        expressDelivery.classList.add('active');
    }
    // Add Extra SHipping Cost
    extraShippingField.innerText = '20';
    // Update Price
    updateTotal()
})