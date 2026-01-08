console.log("hello");
var myName= "Suyash";
console.log("My name is "+ myName);
var x= Symbol("hii");
console.log(x);
console.log(String(x));

function addSquare (a,b){
    function square (x){
        return x*x;
    }
    return (square (a)+ square(b));

}
console.log("Sum of squares of 4 and 5 is: ",addSquare(4,5));

var st1 = "My name is Chiku";
var st2 = "Ohayo Sekai Good morning worldddd";

console.log(st1.charAt(6));
console.log(st1.charCodeAt(6));
console.log(st1.concat(st2));
console.log(st1);
console.log(st1.endsWith("Chiku"));
console.log(st1.endsWith("u"));
console.log(st2.slice(0,4));

var n1=10;
var n2=15;

(n1>n2)? (console.log(n1)):(console.log(n2));