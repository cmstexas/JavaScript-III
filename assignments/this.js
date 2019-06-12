/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - uses dot notation to invoke a dunction. Whatever is to the left of the dot is what is being calld in the function. 

* 2. Explicit Binding - This is when we explocitily give a command to include: .call, .apply, or .bind to be used on a function.


* 3. new Binding - Whenever you have function invoked with "new" keyword, the "this" keyword is bound to the new object being made.


* 4. window Binding - If none of the above apply, the "this" keyword will default to the window object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var sayAge = function(){
    console.log(this.age);
};

var me ={
    age: 34
};

sayAge.call(me);


// Principle 2

// code example for Implicit Binding

var me = {
    name: "Crystal",
    age: 34,
    sayName: function(){
        console.log(this.name);
    }
};

me.sayName();

// Principle 3

// code example for New Binding

var Player = function(name, number, ppg){
    this.name = name;
    this.number = number;
    this.ppg = ppg;
};

var duncan = new Player('Tim Duncan', 21, 26);
console.log(duncan)

// Principle 4

// code example for Explicit Binding

var sayName = function(){
    console.log(' My name is ' + this.name);
};

var Crystal = {
    name: "Crystal",
    age: 34,
};

sayName.call(Crystal);