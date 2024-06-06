export const addToCart = (productName, price, imageURL, id) => {
    const oldCart = JSON.parse(localStorage.getItem('cart')) || []
    const hasItem = oldCart.some(item => item.productName === productName) // change to id when backend finished

    let newCart = oldCart
    if (hasItem) {
        newCart.forEach(item => {
            if (item.productName === productName) {   // change to id when backend finished
                item.quantity += 1
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
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', '[]')
    }
    const parsedCart = JSON.parse(localStorage.getItem('cart'))
    return parsedCart
}

// designed to only work given that we know that cart is nonempty
export const incrementWithProdName = (productName) => { // change to id when backend finished
    const oldCart = JSON.parse(localStorage.getItem('cart'))
    oldCart.forEach(item => {
        if (item.productName === productName) {// change to id when backend finished
            item.quantity += 1
        }
    })
    localStorage.setItem('cart', JSON.stringify(oldCart))
}

// designed to only work given that we know that cart is nonempty
export const decrementWithProdName = (productName) => { // change to id when backend finished
    console.log('func called');
    let oldCart = JSON.parse(localStorage.getItem('cart'))
    console.log(oldCart);
    oldCart.forEach(item => {
        if ((item.productName === productName) && (item.quantity >= 1)) {// change to id when backend finished
            item.quantity -= 1
        }
    })

    const newCart = oldCart.filter((product) => product.quantity > 0)
    console.log(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart))
}

export const getQuantityWithProdNume = (productName) => {// change to id when backend finished
    const oldCart = JSON.parse(localStorage.getItem('cart'))
    let num
    oldCart.forEach(item => {
        if (item.productName === productName) {// change to id when backend finished
            num = item.quantity
        }
    })
    return num
}

export const setCart = (oldCheckoutList) => {
    localStorage.setItem('cart', JSON.stringify(oldCheckoutList))
}