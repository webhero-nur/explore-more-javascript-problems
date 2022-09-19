const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iPhone', camera: 10, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'Xaomi', camera: 48, storage: '128gb', price: 23990, color: 'silverblue' },
    { name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'golden' },
    { name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'black' },
    { name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'oralblue' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        // console.log(phone);
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);