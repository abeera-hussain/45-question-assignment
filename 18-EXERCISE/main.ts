let place: string[] = ["newyork","turkey","northern areas","hawaii"]
console.log("Original order:", place);

//aplhabetical order
console.log("alphabetical order:", [...place].sort());

//show that arry is still in  its original order
console.log("Original order:",place);

//reverse alphabetical order
console.log(" Reverse alphabetical order:", [...place].sort().reverse());

// again in original order
console.log("Original order:", place);

//reverse order
console.log("Reverse order:", place.reverse());

//last in original order
console.log("Original order:", place.reverse());

//sort your array so it store in alphabetical order
console.log("alphabetical order:", place.sort());

//sort your array in reverse alphabetical order
console.log(" Reverse alphabetical order:", place.sort().reverse());
