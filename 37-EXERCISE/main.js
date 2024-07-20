function makeShirt(size = "large", msg = "i love coding") {
    console.log(`the size of the shirt is ${size} and the msg on the shirt is ${msg}`);
}
makeShirt(undefined, "believe");
makeShirt("medium", "perfect");
makeShirt("small", "yet to come");
makeShirt();
makeShirt("medium");
makeShirt();
export {};
