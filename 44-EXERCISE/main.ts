function make_sandwish(...items:string[]){
console.log("\nMaking a sanwish by the help of following items\n");
items.forEach(singleitems =>
    console.log(singleitems)
)
    console.log("Now enjoy sandwich");   
};
make_sandwish("Bread","Chicken")
make_sandwish("Bread","Chicken","Cheese","Mayonese")
make_sandwish("Bread","Chicken","Cheese","Mayonese","Onion","Egg")