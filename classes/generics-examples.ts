class SynePerson{
    contactName:string;
    city:string;
    phone:string;
}

class SyneCustomer extends SynePerson{
    customerId:number;
}
class SyneEmployee extends SynePerson{
    employeeId:number;
}
let e1:SyneEmployee=new SyneEmployee();
e1.employeeId=2389;
e1.contactName="JohnMark";
e1.city="London";
e1.phone="2382-233-908";

let e2:SyneEmployee=new SyneEmployee();
e2.employeeId=2400;
e2.contactName="Willimas";
e2.city="Newyork";
e2.phone="1234-567-890";

interface CommonCrudOperations<T>{
    getAll():T[];
    getDetails(id:number):T;
    insert(t:T):void;
}

class CommonRepository<T> implements CommonCrudOperations<T>{
    private _collection:Array<T>=new Array<T>();
    getAll(): T[] {
        return this._collection;
    }    
    getDetails(id: number): T {
        return this._collection[0];
    }
    insert(t: T): void {
        this._collection.push(t);
    }
}

let empCrudObj:CommonCrudOperations<SyneEmployee>=new CommonRepository<SyneEmployee>();
empCrudObj.insert(e1);
empCrudObj.insert(e2);

console.log(empCrudObj.getAll());
console.log(empCrudObj.getDetails(0));