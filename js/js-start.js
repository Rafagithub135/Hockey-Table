"use strict";
(() => {

    const fetchAllURL = "https://sportscore1.p.rapidapi.com/sports"


    // All Sports API
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'db74cd84e2mshcde8fb146a5e93bp13913ejsn86feef94910d',
    //         'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    //     }
    // };
    //
    // fetch('https://sportscore1.p.rapidapi.com/sports', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    // Baseball API
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'db74cd84e2mshcde8fb146a5e93bp13913ejsn86feef94910d',
            'X-RapidAPI-Host': 'api-baseball.p.rapidapi.com'
        }
    };

    fetch('https://api-baseball.p.rapidapi.com/timezone', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

})();