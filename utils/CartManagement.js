


// Retrieve the cart items
function getCart() {
    if ( typeof(window) !== "undefined") {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }
}

// Retrieve the quantity of a specific item in the cart
function getQuantity(productId) {
    if ( typeof(window) !== "undefined") {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.productId === productId);

        if (existingItem) {
            return existingItem.quantity;
        }
    }
    return 1;
}

// Example function to add an item to the cart
function addToCart(productId, quantity) {
    if ( typeof(window) !== "undefined") { 
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.productId === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({productId, quantity});
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        
    }
}

// Increment the quantity of an item in the cart
function incrementQuantity(productId) {
    if ( typeof(window) !== "undefined") {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.productId === productId);

        if (existingItem) {
            existingItem.quantity += 1;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
}

// Decrement the quantity of an item in the cart
function decrementQuantity(productId) {
    if ( typeof(window) !== "undefined") {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.productId === productId);

        if (existingItem) {
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                removeFromCart(productId);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
}


// Remove an item from the cart
function removeFromCart(productId) {
    if ( typeof(window) !== "undefined") {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cart.filter(item => item.productId !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
}


export { getCart, addToCart, incrementQuantity, decrementQuantity, removeFromCart, getQuantity };