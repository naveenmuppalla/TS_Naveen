const IndiaOffices=["Bangalore","Chennai","Hyderabad","Mumbai","Pune"];
for (const city of IndiaOffices) {
    console.log(city);
    if(city==="Hyderabad"){
        break;    
    }
}

for (let index = 0; index < IndiaOffices.length; index++) {
    const element = IndiaOffices[index];
    console.log(element);    
}

IndiaOffices.forEach(function(city,index){
    console.log(city);
})

