# Laboratorium 14: Sprawdzian z Pythona i Technologii Webowych (Część 1)

Poniżej znajdują się przykładowe zadania na kolokwium. Zostały one wymieszane, aby sprawdzić wiedzę zarówno z języka Python, jak i technologii webowych.

## Cel

Sprawdzenie umiejętności z zakresu podstaw programowania w języku Python, OOP oraz podstaw HTML/CSS i JavaScript.

## Teoria w pigułce (zakres)

- Python: typy, pętle, funkcje, kolekcje (listy, słowniki), OOP.
- Web: HTML5, CSS (box model, kolory), JS (DOM, zdarzenia).

## Przykładowe zadania

### Zadanie 1: Przetwarzanie danych liczbowych (Python)

Napisz skrypt, który pobierze od użytkownika 5 liczb całkowitych i zapisze je na liście. Następnie program powinien wypisać sumę, średnią oraz wartość maksymalną i minimalną.
*Podpowiedź: Użyj funkcji `input()` w pętli `for` oraz wbudowanych funkcji `sum()`, `max()` i `min()`.*

### Zadanie 2: HTML i CSS (Struktura i Styl)

Stwórz prostą stronę HTML zawierającą nagłówek poziomu 1, tabelę z danymi trzech osób (Imię, Nazwisko, E-mail) oraz formularz kontaktowy.
*Podpowiedź: Pamiętaj o znacznikach `<table>`, `<tr>`, `<td>`. Styl CSS dodaj w sekcji `<style>` wewnątrz `<head>`.*

### Zadanie 3: Analiza tekstu (Python)

Napisz funkcję `licz_znaki(tekst)`, która zwraca słownik z liczbą wystąpień każdej litery w tekście (zignoruj wielkość liter).
*Podpowiedź: Metoda `.lower()` zamieni tekst na małe litery, a słownik pozwoli przechowywać pary litera:liczba.*

### Zadanie 4: JavaScript (Interaktywność)

Napisz skrypt w JS, który po kliknięciu przycisku sprawdzi, czy pole input w formularzu nie jest puste. Jeśli jest puste, wyświetl alert.
*Podpowiedź: Użyj `document.getElementById().value` do pobrania wartości i `addEventListener` do obsługi kliknięcia.*

### Zadanie 5: Zarządzanie biblioteką (Python - OOP)

Stwórz klasę `Ksiazka` z atrybutami `tytul`, `autor`, `rok_wydania` oraz metodą `__str__`. Dodaj metodę `wypozycz()`.
*Podpowiedź: Metoda `__str__` powinna zwracać sformatowany napis (f-string).*

### Zadanie 6: Flask (Routing i Szablony)

Stwórz prostą aplikację we Flasku, która pod adresem `/` wyświetla "Witaj!", a pod `/uzytkownik/<name>` wita osobę imieniem z URL.
*Podpowiedź: Użyj dekoratora `@app.route('/')` oraz funkcji `render_template()`.*

### Zadanie 7: Logika i kolekcje (Python)

Mając listę słowników pracowników `[{"imie": "Jan", "pensja": 4500}, ...]`, oblicz średnią pensję i wypisz osoby zarabiającie powyżej niej.
*Podpowiedź: Najpierw zsumuj pensje przechodząc pętlą po liście, a potem podziel przez `len(pracownicy)`.*

### Zadanie 8: Obsługa plików i wyjątków (Python)

Napisz program, który spróbuje otworzyć plik tekstowy. Jeśli plik nie istnieje, obsłuż błąd `FileNotFoundError`.
*Podpowiedź: Użyj bloku `try...except FileNotFoundError:`.*

### Zadanie 9: JavaScript i Style

Napisz skrypt w JS, który po kliknięciu przycisku zmieni kolor tła strony na losowy kolor HEX lub po prostu na "lightblue".
*Podpowiedź: Możesz modyfikować `document.body.style.backgroundColor`.*

### Zadanie 10: Generator haseł (Python)

Napisz funkcję `generuj_haslo(dlugosc)`, która zwraca losowy ciąg znaków (litery i cyfry).
*Podpowiedź: Skorzystaj z modułów `random` oraz `string` (np. `string.ascii_letters + string.digits`).*
