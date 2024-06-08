export const addToCart = async (id) => {
    
    const oldCart = JSON.parse(localStorage.getItem('cart')) || []
    const hasItem = oldCart.some(item => item.productId === id) 
    
    let newCart = oldCart
    if (hasItem) {
        newCart.forEach(item => {
            if (item.productId === id) {  
                item.quantity += 1
            }
        })
    } else {
        const response = await fetch(`http://localhost:3030/products/${id}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        
        newCart = [
            ...oldCart,
            {
                productId: data.id,
                productName: data.name,
                price: data.price,
                imageURL: data.imagesUrl,
                quantity: 1,
            }
        ]
    }

    localStorage.setItem('cart', JSON.stringify(newCart))
}

export const increment = (productId) => { 
    const oldCart = JSON.parse(localStorage.getItem('cart'))
    oldCart.forEach(item => {
        if (item.productId === productId) {
            item.quantity += 1
        }
    })
    localStorage.setItem('cart', JSON.stringify(oldCart))
}

export const getCart = () => {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', '[]')
    }
    const parsedCart = JSON.parse(localStorage.getItem('cart'))
    return parsedCart
}




export const decrement = (productId) => { 
    let oldCart = JSON.parse(localStorage.getItem('cart'))
    oldCart.forEach(item => {
        if ((item.productId === productId) && (item.quantity >= 1)) {
            item.quantity -= 1
        }
    })

    const newCart = oldCart.filter((product) => product.quantity > 0)
    localStorage.setItem('cart', JSON.stringify(newCart))
}

export const getQuantity = (productId) => {
    const oldCart = JSON.parse(localStorage.getItem('cart'))
    let num
    oldCart.forEach(item => {
        if (item.productId === productId) {
            num = item.quantity
        }
    })
    return num
}

export const setCart = (oldCheckoutList) => {
    localStorage.setItem('cart', JSON.stringify(oldCheckoutList))
}