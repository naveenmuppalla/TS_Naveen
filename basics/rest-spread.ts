//rest parameter packs parameter into an array
// 2 rest parameters will not be available
//rest parameter always at end
// function synechronGlobalOffices(...countryNames:string[],name):void{
//     console.log(countryNames);
// }

function synechronAsiaOffices(...countryNames:string[]):void{
    console.log(countryNames);
}
let names:string[]=["A","B","C"];
synechronAsiaOffices("A","B");

//spread operator unpack the array/object values 
//spread operator we use while calling
synechronAsiaOffices(...names);
synechronAsiaOffices("A","B","C","D","E");
synechronAsiaOffices("A","B","C","D");


const PizzaOrder={
    orderId:3433,
    customerId:3489,
    orderDate:new Date(),
    status:"order recieved succesfully"
}

const PizzaInOven={
    ...PizzaOrder,
    status:"pizza is getting baked"
}

const PizzaOnTheWay={
    ...PizzaInOven
}

console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaOnTheWay);