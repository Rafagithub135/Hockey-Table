"use strict";
(function() {

    // const settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://sportscore1.p.rapidapi.com/sports/1/events/live?page=1",
    //     "method": "GET",
    //     "headers": {
    //         "X-RapidAPI-Key": "db74cd84e2mshcde8fb146a5e93bp13913ejsn86feef94910d",
    //         "X-RapidAPI-Host": "sportscore1.p.rapidapi.com"
    //     }
    // };
    //
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'db74cd84e2mshcde8fb146a5e93bp13913ejsn86feef94910d',
    //         'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    //     }
    // };
    //
    // fetch('https://sportscore1.p.rapidapi.com/sports/1/events/live?page=1', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'db74cd84e2mshcde8fb146a5e93bp13913ejsn86feef94910d',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        }
    };

    fetch('https://sportscore1.p.rapidapi.com/sports', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

})();