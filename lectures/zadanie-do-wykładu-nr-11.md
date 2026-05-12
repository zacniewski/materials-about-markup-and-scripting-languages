# Zadania do Wykładu 11: Wstęp do JavaScript

Poniżej znajduje się 10 zadań sprawdzających podstawową wiedzę z języka JavaScript, na podstawie materiałów z Wykładu 11. Zadania możesz rozwiązywać w konsoli przeglądarki (F12 -> Console) lub tworząc prosty plik HTML z tagiem `<script>`.

______________________________________________________________________

### Zadania

**Zadanie 1: Deklaracja zmiennych**
Zadeklaruj trzy zmienne: `nazwaKraju` (używając `const`), `populacja` (używając `let`) oraz `czyWUnii` (używając `let`). Przypisz im odpowiednie wartości (tekst, liczba, wartość logiczna). Spróbuj zmienić wartość `nazwaKraju` i zobacz, co się stanie w konsoli.

> **Podpowiedź:** Pamiętaj, że zmienne zadeklarowane przez `const` są stałymi i nie można ich nadpisać.

**Zadanie 2: Stringi szablonowe**
Używając zmiennych z Zadania 1, wypisz w konsoli zdanie: "Kraj [nazwaKraju] ma [populacja] mieszkańców". Użyj do tego celu stringu szablonowego (template literal).

> **Podpowiedź:** Stringi szablonowe tworzymy za pomocą grawisów (backticks) `` ` `` i składni `${zmienna}`.

**Zadanie 3: Destrukturyzacja obiektu**
Stwórz obiekt `auto` z polami `marka`, `model` oraz `rok`. Następnie za pomocą destrukturyzacji wyciągnij te pola do osobnych zmiennych i wyświetl je w konsoli.

> **Podpowiedź:** Składnia destrukturyzacji obiektu to: `const { pole1, pole2 } = obiekt;`.

**Zadanie 4: Funkcja strzałkowa**
Napisz funkcję strzałkową o nazwie `kwadrat`, która przyjmuje jeden parametr i zwraca jego wartość podniesioną do potęgi drugiej.

> **Podpowiedź:** Funkcja strzałkowa wygląda tak: `const nazwa = (param) => wynik;`.

**Zadanie 5: Instrukcja warunkowa**
Napisz prosty program, który sprawdza wartość zmiennej `temperatura`. Jeśli jest powyżej 25, wypisz "Jest gorąco", w przeciwnym razie wypisz "Jest umiarkowanie".

> **Podpowiedź:** Użyj konstrukcji `if (warunek) { ... } else { ... }`.

**Zadanie 6: Pętla forEach**
Stwórz tablicę `kolory` zawierającą trzy nazwy kolorów. Użyj metody `forEach`, aby wypisać każdy kolor w konsoli, poprzedzając go słowem "Kolor: ".

> **Podpowiedź:** Składnia to `tablica.forEach(element => { ... });`.

**Zadanie 7: Pobieranie elementu DOM**
Załóżmy, że w HTML masz element `<h1 id="glowny-tytul">Witaj!</h1>`. Napisz kod JS, który pobierze ten element za pomocą jego ID i zapisze go do zmiennej.

> **Podpowiedź:** Użyj metody `document.getElementById("id-elementu")`.

**Zadanie 8: Zmiana treści i stylu**
Używając zmiennej z Zadania 7, zmień tekst nagłówka na "Nauka JavaScript" oraz zmień jego kolor tekstu na niebieski.

> **Podpowiedź:** Skorzystaj z właściwości `.innerText` (lub `.innerHTML`) oraz `.style.color`.

**Zadanie 9: Obsługa zdarzenia click**
Stwórz w JS prostą obsługę kliknięcia w przycisk (załoźmy, że przycisk ma id `moj-przycisk`). Po kliknięciu powinien pojawić się alert z napisem "Kliknięto!".

> **Podpowiedź:** Użyj metody `addEventListener("click", () => { ... })`.

**Zadanie 10: Praca z JSON**
Masz dany tekst w formacie JSON: `'{"produkt": "Kawa", "cena": 15}'`. Zamień go na obiekt JavaScript, a następnie wypisz w konsoli samą cenę produktu.

> **Podpowiedź:** Użyj funkcji `JSON.parse(tekstJSON)`, aby otrzymać obiekt.
