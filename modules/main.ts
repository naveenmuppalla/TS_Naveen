console.log("starting of main module!");

//import {addition,multiplication  } from "./basic-math";

import * as mathObj from "./basic-math";

console.log(`Addition - ${mathObj.addition(10,20)}`);
console.log(`Multiplication - ${mathObj.multiplication(10,20)}`);
console.log("ending of main module!");