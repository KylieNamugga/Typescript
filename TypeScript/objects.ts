// creating Objects in javascript/Typescript

// Creating Objects Literally
let customer1:object = {name:"Kylie Namugga", address:"London"} 
let customer2:object = {name:"Nina Kenyonyozi", address:"Texas"} 
let customer3:object = {name:"Arafat Magezi", address:"Kanungu"} 
console.log(customer1)

// Creating Objects using Factory a function
// here we need to define the template then use it to create the object.

// 1. Defining the Template/Blueprint
function customer(nameArg:string, addressArg:string):object{
return {name:nameArg, address:addressArg}
}

// 2. Creating objects
let customer4:object = customer("Kimono Brian", "London")
let customer5:object = customer("Kiteesa Charles", "Zzana")
// this also works even without specifying object
let customer6 = customer("Kibirige", "Vandross")

console.log(customer4)

// Constructor
// Names of constructor functions are pascal eg Customer or JumiaCustomer
// 1. Create a blue print
function JumiaCustomer(nameArg:string, addressArg:string){
    this.name = nameArg, 
    this.address = addressArg
}

// 2. Creating objects
let customer7 = new JumiaCustomer("Kimono Genesis", "London")
let customer8 = new JumiaCustomer("Kiteesa William", "Lubowa")

// we can edit customer 7 like this, we can also use this to add property
customer7.name = "Kimono Anne Genesis"
customer7.age = 12  //new property age

//

console.log(customer7)

