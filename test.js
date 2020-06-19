"use strict";

const fetch = require("node-fetch");


const name = "Fury of Dracula";
const clientID = "G2mBDjh54J";
const endpoint = "https://www.boardgameatlas.com/api";

(async () => {

    const res = await fetch(`${endpoint}/search?name=${name}&client_id=${clientID}`, {
        method: "GET"
    });
    console.log(await res.text());
})();


