import React from 'react';
import tokenData from './getToken';

export default async function getDogs(token) {
  // let tokenPromise = new Promise((resolve, reject) => {

  //let token = await tokenData();
  console.log('token: ' + token);

  let dogs = '';
  try {
    const response = await fetch('https://api.petfinder.com/v2/animals?type=dog&page=2', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    });

    dogs = await response.json();
    console.log(dogs);
  } catch (error) {
    console.log('error: ' + error);
    //getDogs();
  }
  return dogs;
}

// await tokenPromise.then((token) => { console.log("nn"+token) }, () => { console.log("reject") })

/*
        tokenPromise.then((token) => {
            console.log("token 2: " + token);
    
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
        }).catch((error) => {
            console.log(error);
        });*/
//}
