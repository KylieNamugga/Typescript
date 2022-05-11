// how we create class refering to class diagram
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    // Operators/ Behaviors / Methods
    function Customer(nameArg, addressArg) {
        this.name = nameArg,
            this.address = addressArg;
    }
    return Customer;
}());
// Encapsulation
// This is having one structure that has data 
// and methosd that operate on that data.
var firstName = 'Kylie';
var lastName = 'Namugga';
function concatenate(fname, lname) {
    return fname + lname;
}
console.log(concatenate(firstName, lastName));
// encapsulate, we engulf data and hide it 
var Student = /** @class */ (function () {
    function Student() {
        this.firstName = "Kylie";
        this.lastName = "Namugga";
    }
    Student.prototype.concatenate = function () {
        return this.firstName + this.lastName;
    };
    return Student;
}());
console.log(concatenate(firstName, lastName));
// INHERITANCE
// inheritance requires more than one class 
var Payment = /** @class */ (function () {
    function Payment() {
    }
    return Payment;
}());
// the keyword extends signifies inheritence
var Cash = /** @class */ (function (_super) {
    __extends(Cash, _super);
    function Cash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cash.prototype.pay = function () {
        console.log('Payment by Cash');
    };
    return Cash;
}(Payment));
var Check = /** @class */ (function (_super) {
    __extends(Check, _super);
    function Check() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Check.prototype.authorized = function () { return null; };
    Check.prototype.pay = function () {
        console.log('Payment by Check');
    };
    return Check;
}(Payment));
var Credit = /** @class */ (function (_super) {
    __extends(Credit, _super);
    function Credit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Credit.prototype.authorized = function () { return null; };
    Credit.prototype.pay = function () {
        console.log('Payment by credit');
    };
    return Credit;
}(Payment));
// multilevel inheritance is having more than one level of inheritance
// multiple inheritance is where one class inherits from more than one class.
// ACCESS CONTROL MODIFIERS
// Three key words like private, protected, public.
// private is accessed by only one parent class.
// protected is accessed by parent class and it's children.
// public is accessed by everyone.
// ABSTRACTION
var DigestiveSystem = /** @class */ (function () {
    function DigestiveSystem() {
    }
    // Methods
    DigestiveSystem.prototype.putFoodInMouth = function (food) {
        this.ingestion(food);
    };
    DigestiveSystem.prototype.ingestion = function (food) { };
    DigestiveSystem.prototype.peri = function (bolus) { };
    DigestiveSystem.prototype.absorption = function (curd) { };
    DigestiveSystem.prototype.ejestion = function (nutrients) { };
    DigestiveSystem.prototype.easeYourSelf = function (sewage) { };
    return DigestiveSystem;
}());
// We cannot instantiate an abstract class like
// abstract class Payment {
// private amount:number;
// abstract pay()
// }
// let myPaymentMethod:Payment = new Payment will give you an error.
// we can only declare an abstract method within an abstract class
// we cannot define an abstract method within an abstract class
// A class can become a type
var myPaymentMethod = new Check();
var pm1 = new Cash;
var pm2 = new Check;
var pm3 = new Credit;
pm1.pay();
pm2.pay();
pm3.pay();
// Giving the variable an ability to take on more than one value 
// instead  of the three above. that is subtyping polymorphism.
// program to an interface not an implementation
var paymentMethod;
paymentMethod = new Cash;
paymentMethod.pay();
paymentMethod = new Check;
paymentMethod.pay();
paymentMethod = new Credit;
paymentMethod.pay();
