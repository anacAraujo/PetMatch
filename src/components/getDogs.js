import React from "react";
import tokenData from "./getToken";

export default function getDogs() {
    let token = tokenData();

    console.log("token: " + token);

    async function getDogs() {
        const response = await fetch("https://api.petfinder.com/v2/animals?type=dog&page=2", {
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + token
            }
        });
        const dogs = await response.json();
        console.log(dogs);
    }

    getDogs();
}