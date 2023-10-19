const settings = {
    async: true,
    crossDomain: true,
    url: 'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '245a3187ecmsh2f5d148389ecb94p1573c0jsnc241442d8fbc',
        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});