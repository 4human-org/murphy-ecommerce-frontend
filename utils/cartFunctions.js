export const addToCart = (productName, price, imageURL, id) => {
    console.log(`added ${productName} to cart`);

    const oldCart = JSON.parse(localStorage.getItem('cart')) || []
    const hasItem = oldCart.some(item => item.productName === productName) 

    let newCart = oldCart
    if (hasItem) {
        console.log(`${productName} is already in the cart`)
        newCart.forEach(item => {
            if (item.productName === productName) {
                console.log(`old ${productName} quantity: ${item.quantity}`);
                item.quantity += 1
                console.log(`new ${productName} quantity: ${item.quantity}`);
            }
        })
    } else {
        newCart = [
            ...oldCart,
            {
                productId: id,
                productName: productName,
                price: price,
                imageURL: imageURL,
                quantity: 1,
            }
        ]
    }

    localStorage.setItem('cart', JSON.stringify(newCart))
}

export const getCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || []
}

// designed to only work given that we know that cart is nonempty
export const incrementWithProdName = (productName) => {
    const oldCart = JSON.parse(localStorage.getItem('cart'))
    oldCart.forEach(item => {
        if (item.productName === productName) {
            item.quantity += 1
        }
    })
    localStorage.setItem('cart', JSON.stringify(oldCart))
}

// designed to only work given that we know that cart is nonempty
export const decrementWithProdName = (productName) => {
    const oldCart = JSON.parse(localStorage.getItem('cart'))
    oldCart.forEach(item => {
        if (item.productName === productName) {
            item.quantity -= 1
        }
    })
    localStorage.setItem('cart', JSON.stringify(oldCart))
}

export const getQuantityWithProdNume = (productName) => {
    const oldCart = JSON.parse(localStorage.getItem('cart'))
    let num
    oldCart.forEach(item => {
        if (item.productName === productName) {
            num = item.quantity
        }
    })
    return num
}

export const setCart = (oldCheckoutList) => {
    localStorage.setItem('cart', JSON.stringify(oldCheckoutList))
}