"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username = ["abeera", "aliana", "admin", "javed", "hanzal"];
username.forEach(username => {
    if (username === "admin") {
        console.log("hello", username, "would you like to see a status report?");
    }
    else {
        console.log("hello", username, "thankyou for logging in again");
    }
});
