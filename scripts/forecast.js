const key = '139k6uJE8vUf1DLWhGGRKWlcRv0EIfEF';

//get weather information
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

//get city information
const getCity = async(city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search' //This is the basic URL of the API endpoint that we want to make a request to.
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};