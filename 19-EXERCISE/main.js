//EXERCISE NO :14
let guest_list = ["Eman,", "javeria,", "Zaina,", "Tasbiha,"];
//  for (let i=0 ; i<guest_list.length ; i++)
//      console.log(  "DEAR:" +  guest_list[i] +`\nI would like to invite you on my birthday party\n`)
//EXERCISE NO:15
let absent_one = "Zaina";
let new_guest = "Hina,";
guest_list[2] = new_guest;
// for (let i=0 ; i<guest_list.length ; i++)
//     console.log(  "DEAR:" +  guest_list[i] +   ` \nI would like to invite you on my birthday party\n`)
// console.log("\nZaina will not be able to attend my function due to some family emergency\n" )
//EXERCISE NO:16
guest_list.unshift("Saad");
guest_list.push("Rafia");
guest_list.push("Zeliha");
let message = "\nWe just found a big table on our location So,we wanted you guys to come also.\n";
// for (let i=0 ; i<guest_list.length ; i++)
//     console.log(  "DEAR:" +  guest_list[i] +`\nI would like to invite you on my birthday party.\n` + message)
//EXERCISE NO:17
console.log("SORRY,Unfortunately the dinner table will not be able to arrange.");
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry ${remove_guest} + you are not invited`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log("DEAR:" + guest_list[i] + `\n you guys are still invited.\n`);
}
guest_list.splice(0, 2);
console.log(guest_list);
//EXERCISE NO:19
console.log("The number of people you are inviting to dinner", guest_list.length);
export {};
