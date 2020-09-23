var num1=7;
var num2=9;
console.log(num1+num2);
var answer =num1>num2;
console.log(answer);

// D=(L-S)/L*100

var sellingPrice = 199;
var lisitingPrice = 799;
var discountPercent =(lisitingPrice-sellingPrice)/lisitingPrice*100;
console.log("Discount percentage is : "+discountPercent);
displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage + "% off");