function totalCost(product) {
    let total = product;
    let sum  = 0;
    for (var i = 0; i < total.length;i++){
        let productObject = total[i];
        let productprice = productObject.price;
        sum = productprice + sum;
    }
    return sum;
};
let cart1 = [{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ];
console.log(totalCost(cart1));
let cart2 = [{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Haveit Speakers", price:2500}];
console.log(totalCost(cart2));