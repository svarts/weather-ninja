const key = '139k6uJE8vUf1DLWhGGRKWlcRv0EIfEF';

const getCity = async(city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search' //This is the basic URL of the API endpoint that we want to make a request to.
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    console.log(data);
}

getCity('london');