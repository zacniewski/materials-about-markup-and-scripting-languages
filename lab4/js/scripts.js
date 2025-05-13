// asynchroniczny JS, konieczny do uzycia funkcji `fetch`
// można użyć tej opcji, ale należy pamiętać,
// że w naszym przypadku cała logika powinna być wewnątrz funkcji getCountryData()

async function getCountryData(url) {
    const res = await fetch(url);
    const json_data = await res.json();

    // tu umieszczamy logikę i potem tylko wywołujemy funkcję z odpowiednim parametrem
    // (w tym przypadku jest to nazwa kraju)

    name_of_the_country = json_data[0]["name"]["common"];
    console.log("The country is: ", name_of_the_country);
}

const country_url = "https://restcountries.com/v3.1/name/Poland";
getCountryData(country_url);

// do wycieczek
// pierwszy obiekt i jego rejon
console.log("Rejon to: ", wycieczki[0]["rejon"]);

// wszystkie obiekty
for (i of wycieczki) {
    console.log(i);
}

