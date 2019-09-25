const products:any[]=[
    {
        productId:1299,
        productName:"Apple 6",
        price:40000,
        stock:120,
        companyName:"Apple"
    },
    {
        productId:1300,
        productName:"ipad",
        price:78000,
        stock:10,
        companyName:"Apple"
    },
    {
        productId:1301,
        productName:"Samsung AS",
        price:18000,
        stock:120,
        companyName:"Samsung"
    }
];

function searchproducts(stock:number):string[];
function searchproducts(companyName:string):string[];

function searchproducts(propertyName:any):string[]{
    //same copy will be allocated,if you modified available products original products will be updated
    //const availableProducts=...products;

    //duplicate copy,will not modify the original one
    const availableProducts=[...products];
    const foundProducts:string[]=[];
    if(typeof propertyName === "number"){
        for(const prod of availableProducts){
            if(prod.stock === propertyName){
                foundProducts.push(prod.productName);
            }
        }
    }else{
        for(const prod of availableProducts){
            if(prod.companyName === propertyName){
                foundProducts.push(prod.productName);
            }
        }
    }

    return foundProducts;
}

console.log(searchproducts(120));
console.log(searchproducts("Apple"));
