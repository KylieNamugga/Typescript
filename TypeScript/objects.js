// creating Objects in javascript/Typescript
// Creating Objects Literally
var customer1 = { name: "Kylie Namugga", address: "London" };
var customer2 = { name: "Nina Kenyonyozi", address: "Texas" };
var customer3 = { name: "Arafat Magezi", address: "Kanungu" };
console.log(customer1);
// Creating Objects using Factory a function
// here we need to define the template then use it to create the object.
// 1. Defining the Template/Blueprint
function customer(nameArg, addressArg) {
    return { name: nameArg, address: addressArg };
}
// 2. Creating objects
var customer4 = customer("Kimono Brian", "London");
var customer5 = customer("Kiteesa Charles", "Zzana");
// this also works even without specifying object
var customer6 = customer("Kibirige", "Vandross");
console.log(customer4);
// Constructor
// Names of constructor functions are pascal eg Customer or JumiaCustomer
// 1. Create a blue print
function JumiaCustomer(nameArg, addressArg) {
    this.name = nameArg,
        this.address = addressArg;
}
// 2. Creating objects
var customer7 = new JumiaCustomer("Kimono Genesis", "London");
var customer8 = new JumiaCustomer("Kiteesa William", "Lubowa");
// we can edit customer 7 like this, we can also use this to add property
customer7.name = "Kimono Anne Genesis";
customer7.age = 12; //new property age
//
console.log(customer7);
