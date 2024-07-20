console.log("Equality test",("Abeerahussain" as string) === "Abeerahussain");
console.log("InEquality test",("Abeera Hussain "as string) === "Hussain");
//test using lower case
console.log("Lower Case test:","ABEERA HUSSAIN".toLowerCase()==="abeera hussain")
//numerical test involving equality and inqulity ,greater than or less than.....;
console.log("Equality test:",10===10);//true
console.log("InEquality test:",(10 as number) !==8);
console.log("greater than test:",1000>100);
console.log("less than test:",1000<100);
console.log("greater than and equals to test:",10 >=10);
console.log("less than and equals to test:",5 <=10);
//test using and or operators:
console.log("and operator test:",true&& true)
console.log("or operator test:",true||false);

//test whether an item is in an array:
let num:number[]=[1,2,3,4,5]
console.log("test an array",num.includes(5));

