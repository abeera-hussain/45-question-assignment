"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let currentusers = ["abeera", "Aliana", "Admin", "javed", "hanzal"];
let newUsers = ["abeera", "nafia", "areeba", "Admin", "javed"];
for (let new_users of newUsers) {
    const lowercase_new_users = new_users.toLowerCase();
    if (currentusers.map(user => user.toLowerCase()).includes(lowercase_new_users)) {
        console.log(`the username ${new_users} is not available`);
    }
    else {
        console.log(`the usename ${new_users} is available`);
    }
}
