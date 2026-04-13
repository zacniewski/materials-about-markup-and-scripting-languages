# Zadania do Wykładu nr 4

Poniżej znajdują się zadania sprawdzające wiedzę z Wykładu 4, dotyczące kolekcji danych w Pythonie: list, krotek, zbiorów oraz słowników.

**Uwaga:** Do każdego zadania należy dołączyć zrzut ekranu przedstawiający kod źródłowy na swoim komputerze oraz wynik działania skryptu w terminalu.

## Zadanie 1: Operacje na listach

Stwórz listę o nazwie `zakupy`, która zawiera 3 dowolne produkty (np. "chleb", "mleko", "masło"). Następnie:

- Dodaj do listy produkt "ser" za pomocą metody `append()`.
- Dodaj na drugą pozycję (indeks 1) produkt "jajka" za pomocą metody `insert()`.
- Usuń z listy "mleko".
- Wyświetl ostateczną listę oraz jej długość (liczbę elementów).

**Podpowiedź:** Użyj funkcji `len()`, aby sprawdzić długość listy.

## Zadanie 2: Slicing (wycinanie)

Dana jest lista: `liczby = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`. Napisz program, który wypisze:

- Pierwsze trzy elementy listy.
- Elementy od indeksu 4 do 7 (włącznie z 4, bez 7).
- Co drugi element listy (zaczynając od 0).
- Listę w odwróconej kolejności.

**Podpowiedź:** Wykorzystaj konstrukcję `lista[start:stop:step]`. Pamiętaj, że `step` równy `-1` odwraca listę.

## Zadanie 3: Listy składane (List Comprehension)

Stwórz listę `liczby_2` zawierającą liczby od 1 do 10. Następnie, używając **listy składanej**, utwórz nową listę `kwadraty`, która będzie zawierać kwadraty tych liczb (np. 1, 4, 9...). Wyświetl listę `kwadraty`.

**Podpowiedź:** Składnia listy składanej to `[wyrażenie for element in iterowalny]`. Kwadrat liczby `x` to `x**2`.

## Zadanie 4: Krotka i rozpakowywanie

Utwórz krotkę `student`, która zawiera: imię, nazwisko oraz numer indeksu.

- Spróbuj zmienić imię w krotce i zobacz, co się stanie (zakomentuj tę linię w kodzie, aby program mógł się uruchomić).
- Rozpakuj krotkę do trzech zmiennych: `imie`, `nazwisko`, `indeks` i wyświetl je osobno.

**Podpowiedź:** Krotki są niezmienne (`immutable`), więc próba przypisania nowej wartości do indeksu wyrzuci błąd `TypeError`.

## Zadanie 5: Unikalne elementy (Zbiory)

Masz listę z duplikatami: `kolory = ["czerwony", "niebieski", "zielony", "czerwony", "żółty", "niebieski"]`.

- Przekonwertuj tę listę na zbiór (`set`), aby pozbyć się duplikatów.
- Dodaj do zbioru kolor "fioletowy".
- Wyświetl zawartość zbioru.

**Podpowiedź:** Użyj funkcji `set(lista)`, aby stworzyć zbiór z listy.

## Zadanie 6: Operacje na zbiorach

Zdefiniuj dwa zbiory:
`A = {1, 2, 3, 4, 5}`
`B = {4, 5, 6, 7, 8}`
Wypisz wynik:

- Sumy zbiorów (elementy z obu zbiorów).
- Części wspólnej (iloczynu) zbiorów.
- Różnicy zbiorów (elementy, które są w A, ale nie ma ich w B).

**Podpowiedź:** Możesz użyć metod `union()`, `intersection()`, `difference()` lub operatorów `|`, `&`, `-`.

## Zadanie 7: Słownik z danymi

Stwórz słownik `auto`, który zawiera klucze: `marka`, `model`, `rok` oraz `przebieg` z odpowiednimi wartościami.

- Wypisz tylko model auta.
- Zaktualizuj przebieg o 1000 km (dodaj 1000 do obecnej wartości).
- Dodaj nową parę klucz-wartość: `"kolor": "srebrny"`.
- Wypisz wszystkie klucze słownika.

**Podpowiedź:** Dostęp do wartości odbywa się poprzez `slownik["klucz"]`. Wszystkie klucze uzyskasz metodą `keys()`.

## Zadanie 8: Iteracja po słowniku

Stwórz słownik `ceny`, gdzie kluczami są nazwy owoców, a wartościami ich ceny za kg (np. `{"jabłko": 3.5, "banan": 4.2}`).
Napisz pętlę `for`, która przejdzie przez wszystkie elementy słownika i wypisze komunikat w formacie:
"Produkt: [nazwa] kosztuje [cena] zł".

**Podpowiedź:** Użyj metody `items()`, która pozwala na iterację po parach klucz-wartość: `for klucz, wartosc in slownik.items():`.
