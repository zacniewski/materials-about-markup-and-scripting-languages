# Zadania do Wykładu nr 5

Poniżej znajdują się zadania sprawdzające wiedzę z Wykładu 5, dotyczące definiowania funkcji, argumentów, zasięgu zmiennych, funkcji lambda oraz modułów w Pythonie.

**Uwaga:** Do każdego zadania należy dołączyć zrzut ekranu przedstawiający kod źródłowy na swoim komputerze oraz wynik działania skryptu w terminalu.

## Zadanie 1: Podstawowa funkcja

Napisz funkcję `oblicz_pole_trojkata(a, h)`, która przyjmuje dwa argumenty: podstawę `a` oraz wysokość `h`, a następnie zwraca pole trójkąta. Wywołaj tę funkcję dla wartości `a=10` i `h=5` i wyświetl wynik.

**Podpowiedź:** Wzór na pole trójkąta to `(a * h) / 2`. Pamiętaj o słowie kluczowym `return`.

## Zadanie 2: Parametry domyślne

Stwórz funkcję `opis_uzytkownika(imie, wiek=18, miasto="Nieznane")`. Funkcja powinna zwracać sformatowany ciąg znaków (f-string) zawierający te informacje. Przetestuj funkcję na trzy sposoby:

1. Podając tylko imię.
1. Podając imię i wiek.
1. Podając imię, wiek i miasto.

**Podpowiedź:** Parametry domyślne muszą znajdować się po parametrach obowiązkowych w definicji funkcji.

## Zadanie 3: Dowolna liczba argumentów (\*args)

Napisz funkcję `srednia_ocen(*oceny)`, która przyjmuje dowolną liczbę ocen jako argumenty i zwraca ich średnią arytmetyczną. Wywołaj funkcję dla ocen: 3, 4, 5, 2, 6.

**Podpowiedź:** Argumenty przekazane przez `*args` są widoczne wewnątrz funkcji jako krotka. Użyj `sum(args)` i `len(args)`, aby obliczyć średnią.

## Zadanie 4: Zasięg zmiennych (Global)

Zdefiniuj zmienną globalną `licznik = 0`. Napisz funkcję `zwieksz_licznik()`, która po każdym wywołaniu zwiększy wartość zmiennej `licznik` o 1. Wyświetl wartość licznika przed i po trzykrotnym wywołaniu funkcji.

**Podpowiedź:** Aby zmodyfikować zmienną globalną wewnątrz funkcji, użyj słowa kluczowego `global`.

## Zadanie 5: Funkcje anonimowe (Lambda)

Dana jest lista liczb: `liczby = [1, 5, 8, 12, 15, 20, 23]`.

1. Użyj funkcji `filter()` i wyrażenia `lambda`, aby stworzyć nową listę zawierającą tylko liczby większe niż 10.
1. Użyj funkcji `map()` i wyrażenia `lambda`, aby stworzyć nową listę, w której każda liczba z oryginalnej listy zostanie pomnożona przez 2.

**Podpowiedź:** Wyniki z `filter` i `map` warto skonwertować z powrotem na listę za pomocą `list()`.

## Zadanie 6: Importowanie modułów

Napisz program, który:

1. Zaimportuje moduł `math` i obliczy pierwiastek kwadratowy z liczby 144.
1. Zaimportuje moduł `random` (używając aliasu `rd`) i wylosuje liczbę całkowitą z zakresu od 1 do 100.
1. Wyświetli oba wyniki.

**Podpowiedź:** Użyj `math.sqrt()` dla pierwiastka oraz `rd.randint(start, stop)` dla losowania liczby.

## Zadanie 7: Struktura programu

Napisz skrypt, który zawiera funkcję `powitanie()`, wypisującą tekst "Witaj w programie!". Umieść wywołanie tej funkcji wewnątrz bloku `if __name__ == "__main__":`.

**Podpowiedź:** Taka konstrukcja zapobiega automatycznemu uruchamianiu kodu podczas importowania pliku jako moduł do innego skryptu.
