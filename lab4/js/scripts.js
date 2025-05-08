async function getCountryData(url) {
    const res = await fetch(url);
    const json_data = await res.json();

    name_of_the_country = json_data[0]["name"]["common"];
    console.log(name_of_the_country);
}

const country_url = "https://restcountries.com/v3.1/name/Poland";
getCountryData(country_url);

// do wycieczek
// pierwszy obiekt
console.log(wycieczki[0]);

// wszystkie obiekty
for (i of wycieczki) {
    console.log(i);
}

