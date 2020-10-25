class Grocery {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number){
        this.name = name;
        this.quantity = quantity;
    }
}

var groceryList: Grocery[] = [

    {name: 'apple', quantity: 5}, 
    {name: 'bread', quantity: 1},
    {name: 'eggs', quantity: 1}
];

let printData = 'name *** quantity</br>'
groceryList.forEach(function (value) {
    printData += value.name + ' *** ' + value.quantity + '</br>'
});

document.body.innerHTML = printData;




