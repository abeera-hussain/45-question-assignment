"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shows_magicians(magicians) {
    magicians.forEach(name => console.log((name)));
}
function makes_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_names = ["Ali", "Osama", "Asif"];
let copys_magicains_name = magicians_names.slice();
let copys_graet_magicians = makes_great(copys_magicains_name);
console.log("\nOriginal array:\n");
shows_magicians(magicians_names);
console.log("\nCopied array:\n");
shows_magicians(copys_graet_magicians);
