/* 
They are part of ES6 but are only a syntactical sugar. Under the hood it works as protoype chain.
classes are functions and hoisted in same way
class can have 1 constructor function inside them.
get and set keywords and fucntions, they also move in prototype of the class.
extends to exdend a class for inheritance and Super keyword
Static keyword
*/

console.log("-----------------Classes under the hood are Prototype chain-------------------");
class Person {
    constructor(name) { // constructor automatically excutes when class instance is intialized.  it moves to class prototype.
        this.name = name;
    }
    simpleFunction() {   // it moves to class prototype.
        console.log("I'm a simple function.",this.name)
    }
    arrowfunction = () => { // will move to Instance.
      console.log("I'm a Arrow function.", this.name);
    }
    lastname = "abc" // will move to Instance.

    get getName() {  // goes in prototype
        console.log(this.name)
    }
    set setName(val) {  // goes in prototype
        this.name = val;
        console.log(this.name)
    }
}

var per1 = new Person("Jhon");
console.log(per1.name = "david") // name val changed;
per1.getName;
per1.setName = "ABC"
per1.simpleFunction(); // present in class Person prototype
per1.arrowfunction();  // present on per1 instance
console.dir(per1);


/* 
only simple functions defined in the class body are move to the prototype of the Class.
Arrow fucntions and other datatypes are moved to Instances.
*/

console.log("-----------------Classes Inheritance-------------------");
class people{
    constructor(name) {
        this.name = name;
        this.occupation = "human";
    }
    greet() {
        console.log("Hi,", this.name, "the",this.occupation)
    }
}

class students extends people{ // extends get all the property from people class
    constructor(name) {
        super(name);       // super calls the parent consturctor and asign the vlaues 
        this.occupation = "student human"  // overrides the value from super
    }
    greet() { // overrides the greet from people
        console.log("Hi student,", this.name); 
    }
}
var stu1 = new students("jhonny");
stu1.greet();

console.log("-----------------Classes with Static-------------------");

//static representaion in old js syntax, here xyz is only accessaable via 
// static variables are being called by only static methods.
function abc() { }
abc.xyz = function () { // function xyz() is initalized on abc and is accessble via fucntion name abc like this abc.xyz()
    console.log("haha");
}
console.log(typeof abc) //function
console.log(typeof  abc.xyz); //function
console.dir(abc);

//static properties are not passed to the intances of the class
class staticTest{
    static val = 10; // static variable goes in prototype chain
    static fun() {
        console.log("val is ", this.val) // in static function we can access static variable using this. these are present on prototype chain and can only we acces by instances via prototype chain.
    }
}
class staticChild extends staticTest{ }
var objchild = new staticChild;
console.log("form subclass", staticChild.val); // public static variables and methods are accesible from child class name too.




var obj = new staticTest;
console.log(obj.val); // undefined as val is static and is only acceesable via class name
console.log(obj.__proto__.constructor.val);  // obj can access val via prototype chain.

console.log(staticTest.val); // 10
staticTest.fun();

console.log("-----------------Classes with Private-------------------");

/*
private variable denoted by #
should be delacre before using
should not be use outside the scope
cant be removed using delte
*/

class Privatetest {
    #privateval;
    constructor(val) {
        this.#privateval = val;
    }
    get getPrivateval() {
        console.log(this.#privateval);
    }

    //private method
    #privateMethod() {
       
        return "hello world";
    }
    
    publicAcc() {
        console.log(this.#privateMethod())
    }

}

class subPrivate extends Privatetest{ // sub class also don't have access to parnet class private metods and variables.
    #subPrivate
    constructor(val) {
        super(val)
        this.#subPrivate = 10
    }
}

var objchild = new subPrivate(100);
objchild.publicAcc()    // this method give reponse
    
    
    
var obj = new Privatetest(10);
obj.getPrivateval   // private variables and functions are not accessable in subclasses or instances directly , we can you other functions from main class to get and set them.
obj.publicAcc()    // public function that has access to private function.



console.log("-----------------Classes with Static Private-------------------");

/* 
they have the same limitaiton as the pulic static one,
but here the static funtions cant acess the static variable using 'this'.
class name is req in static fucntions to access it.
*/

class privateStatic {
    static #val;

    static func() {
        privateStatic.#val = "val";
        return privateStatic.#val;
    }

    static #privateStatic() {  // private static method
        return "privateStatiec";
    }

    func2() {
        return `${privateStatic.func()} ${privateStatic.#privateStatic()}` ; // normal public function used
    }
}

/* 
satic private variables and methods are only accessible inside the class theya are created via classname, not in instances or sub class.
*/ 

var obj = new privateStatic;
console.log(privateStatic.func()); //static funciton using class name to access private static
console.log(obj.func2())