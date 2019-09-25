function salesNetProfitNorth(cogs:number,expense:number,actualSales:number,gst?:number):number{
    let gstAmount=0;
    if(gst){
        gstAmount=actualSales*gst/100;        
    }
    return actualSales-(cogs+expense+gstAmount);
}

console.log('sales profit without gst');
salesNetProfitNorth(1000,2000,10000);
console.log('sales profit with gst');
salesNetProfitNorth(1000,2000,10000,10);

function salesNetProfitSouth(cogs:number,expense:number,actualSales:number,gst:number=0):number{
    let gstAmount=0;
    if(gst){
        gstAmount=actualSales*gst/100;        
    }
    return actualSales-(cogs+expense+gstAmount);
}

console.log('sales profit without gst');
salesNetProfitSouth(1000,2000,10000);
console.log('sales profit with gst');
salesNetProfitSouth(1000,2000,10000,10);

let gstPercent=5;
function salesNetProfit(cogs:number,expense:number=1000,actualSales:number,gst:number=gstPercent):number{
    let gstAmount=actualSales*gst/100;      
    return actualSales-(cogs+expense+gstAmount);
}

console.log('sales profit without gst');
salesNetProfit(1000,2000,10000);
console.log('sales profit default expense and without gst');
salesNetProfit(1000,undefined,10000);
console.log('sales profit with gst');
salesNetProfit(1000,2000,10000,10);