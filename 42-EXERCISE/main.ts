function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
}
function make_greet(magicians:string[]){
    return magicians.map(name => `the great ${name}`)
}

let magicians_names =["abeera","javeriua","bareera"]
    
let graet_magicians = make_greet(magicians_names)

//console.log(graet_magicians);
show_magicians(graet_magicians)
