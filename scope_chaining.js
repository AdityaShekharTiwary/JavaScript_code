// function declarations are scanned and made available
// variable declarations are scanned and made undifined

// var name="Aditya";
// console.log(name);

// function sayName(){
//     console.log(name);
// }
// sayName();

var name="Aditya";
console.log(name);

function sayName(){
    var name="Shekhar";
    console.log(name);

    sayNametwo();


function sayNametwo()
{
    console.log(name);
}
}
sayName();

// the lower function can ask for name from the upper function
//(bigger scope) but the reverse is not possible 
