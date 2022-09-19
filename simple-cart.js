const shoppingCart = [
    { name: 'shoe', price: 2290 },
    { name: 'shirt', price: 1490 },
    { name: 'pant', price: 1450 },
    { name: 'belt', price: 790 },
    { name: 'shocks', price: 190 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum += product.price;
    }
    return sum;
}

const billingPrice = totalCost(shoppingCart);
console.log(billingPrice);