// how we create class refering to class diagram

class Customer{

    // Data/Attribute
      private name:string; //adding private means name can't be accessed by another class
      private address:string;

    // Operators/ Behaviors / Methods
    constructor(nameArg:string, addressArg:string){
        this.name = nameArg, 
        this.address = addressArg
    }
    // method signature
// concatenateName(fname:string, lname:string):string{return this.name}
}


// Encapsulation
// This is having one structure that has data 
// and methosd that operate on that data.

let firstName = 'Kylie'
let lastName = 'Namugga'

function concatenate(fname, lname){
 return fname + lname
}

console.log(concatenate(firstName, lastName))

// encapsulate, we engulf data and hide it 

class Student{
    firstName = "Kylie"
    lastName = "Namugga"

    public concatenate(){
        return this.firstName + this.lastName
    }
}

console.log(concatenate(firstName, lastName))

// INHERITANCE
// inheritance requires more than one class 

abstract class Payment {
   private amount:number;
   abstract pay()
//    if pay was not abstract, we would define it like pay(){}
}

// the keyword extends signifies inheritence

class Cash extends Payment{
    private cashTendered: number;
    pay() {
        console.log('Payment by Cash');
        
    }
}

class Check extends Payment {
    private name:string
    private bankID: string
    

    authorized(){return null}
    pay() {
       console.log('Payment by Check');
        
    }

}

class Credit extends Payment {
    private number:string
    private type: string
    private expDate: Date

    authorized(){return null}
    pay() {
        console.log('Payment by credit');
        
    }

}

// multilevel inheritance is having more than one level of inheritance
// multiple inheritance is where one class inherits from more than one class.


// ACCESS CONTROL MODIFIERS
// Three key words like private, protected, public.
// private is accessed by only one parent class.
// protected is accessed by parent class and it's children.
// public is accessed by everyone.

// ABSTRACTION
class DigestiveSystem{
// Data
private food;

// Methods
public putFoodInMouth(food:string){
    this.ingestion(food)
}

private ingestion(food:string){}
private peri(bolus:string){}
private absorption(curd:string){}
private ejestion(nutrients:string){}

public easeYourSelf(sewage:string){}
}

// We cannot instantiate an abstract class like

// abstract class Payment {
    // private amount:number;
// abstract pay()
// }
    // let myPaymentMethod:Payment = new Payment will give you an error.
    // we can only declare an abstract method within an abstract class
    // we cannot define an abstract method within an abstract class

// A class can become a type
let myPaymentMethod:Check = new Check()

let pm1:Cash = new Cash
let pm2:Check = new Check
let pm3:Credit = new Credit

pm1.pay()
pm2.pay()
pm3.pay()

// Giving the variable an ability to take on more than one value 
// instead  of the three above. that is subtyping polymorphism.
// program to an interface not an implementation

let paymentMethod:Payment;
paymentMethod = new Cash
paymentMethod.pay()

paymentMethod = new Check
paymentMethod.pay()

paymentMethod = new Credit
paymentMethod.pay()

