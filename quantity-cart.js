const shoppingCart = [
    { name: 'shoe', price: 2290, quantity: 2 },
    { name: 'shirt', price: 1490, quantity: 5 },
    { name: 'pant', price: 2450, quantity: 4 },
    { name: 'belt', price: 790, quantity: 2 },
    { name: 'shocks', price: 190, quantity: 3 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}

const billingPrice = totalCost(shoppingCart);
console.log(billingPrice);