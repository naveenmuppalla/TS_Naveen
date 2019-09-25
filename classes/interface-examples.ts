interface MathOne{
    addition(num1:number,num2:number):number;
    subtract(num1:number,num2:number):number;
}

interface MathTwo{
    square(num:number):number;
}

interface MathThird extends MathOne,MathTwo{
    
}
class SyneMath  implements MathOne,MathTwo{

    square(num: number): number {
        return num*num;
    }
    addition(num1: number, num2: number): number {
        return num1+num2;
    }    
    subtract(num1: number, num2: number): number {
        return num1 - num2;
    }
}

let mathObj:MathOne=new SyneMath();
console.log(mathObj.addition(10,15));
