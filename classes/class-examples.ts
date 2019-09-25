abstract class Person{
    constructor(private _socialId?:number,
        private _contactName?:string,
        public address?:string,
        public city?:string,
        public phone?:string){
            console.log("Person constructor");
        }
    get socialId():number{
        //console.log('get');
        return this._socialId;
    }
    set socialId(value:number){
        //console.log('set');
        this._socialId=value;
    }
    
    public get contactName() : string {
        return this._contactName;
    }
    public set contactName(v : string) {
        this._contactName = v;
    }

    public printPersonInformation():string{
        return `Contact name is ${this.contactName}
        who lives in city ${this.city} 
        and  contact # is ${this.phone} `;
    }
    abstract changeAddress(socialId:number,newAddress:string):boolean;
    
}

class Employee extends Person{
    constructor(private _employeeId?:number){
        super();
        console.log("Employee constructor");
    }
    
    public get employeeId() : number {
        return this._employeeId;
    }
    public set employeeId(v : number) {
        this._employeeId = v;
    }
    
    changeAddress(socialId: number, newAddress: string): boolean {
        console.log(`Employee ${this.contactName} address is changed to ${newAddress}`);
        return true;
    }

}
let person:Employee=new Employee();
person.socialId=12345;
person.contactName="Naveen kumar";
person.city="Hyderabad";
person.phone="+91 9985404396";

console.log(person.printPersonInformation());