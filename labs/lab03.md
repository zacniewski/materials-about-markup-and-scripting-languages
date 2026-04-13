# Laboratorium 3: Logika programu (if, while, for)

## Cel zajęć

Wykorzystanie instrukcji warunkowych i pętli do sterowania przepływem programu.

## 1. Pętle i warunki w pigułce

W Pythonie pętle i instrukcje warunkowe opierają się na wcięciach. Pętla `for` najlepiej sprawdza się przy iteracji po zbiorach danych, natomiast `while` gdy czekamy na spełnienie konkretnego warunku.

### Przykład: Sprawdzanie parzystości w pętli

```mermaid
flowchart TD
    Start([Początek]) --> Input[/Pobierz liczbę/]
    Input --> Loop{Czy liczba > 0?}
    Loop -- Tak --> Parity{Czy liczba % 2 == 0?}
    Parity -- Tak --> Even[Wypisz: Parzysta]
    Parity -- Nie --> Odd[Wypisz: Nieparzysta]
    Even --> Decr[Zmniejsz liczbę o 1]
    Odd --> Decr
    Decr --> Loop
    Loop -- Nie --> End([Koniec])
```

## 2. Losowanie liczb

Do zadań z losowaniem (np. gra w zgadywanie) wykorzystujemy moduł `random`:

```python
import random

liczba = random.randint(1, 100)  # losuje liczbę od 1 do 100 włącznie
```

______________________________________________________________________

## Zadania

*Poniższe zadania są zadaniami sugerowanymi i mogą ulec modyfikacji przez prowadzącego zajęcia.*

1. Napisz program, który sprawdza, czy podana przez użytkownika liczba jest parzysta.
1. Napisz program, który prosi o podanie roku i sprawdza, czy jest on przestępny.
1. Napisz prostą grę "Zgadnij liczbę". Komputer losuje liczbę z zakresu 1-100, a użytkownik próbuje ją odgadnąć. Po każdej próbie program podaje informację "za mało" lub "za dużo".
1. Wypisz wszystkie liczby pierwsze z zakresu od 2 do 100 za pomocą pętli `for`.
1. Napisz program wyświetlający tabliczkę mnożenia 10x10.
1. Napisz program, który pobiera od użytkownika liczbę całkowitą dodatnią, a następnie rysuje w konsoli trójkąt o wysokości podanej liczby (używając np. znaku `*`).
1. Napisz skrypt, który oblicza sumę cyfr podanej przez użytkownika liczby całkowitej.
1. Napisz program, który wyświetla liczby od 1 do 100, ale dla wielokrotności 3 wypisuje "Fizz", dla wielokrotności 5 wypisuje "Buzz", a dla wielokrotności obu wypisuje "FizzBuzz".
1. Napisz program, który pobiera od użytkownika ciąg znaków i wypisuje go w odwrotnej kolejności bez użycia slicingu (używając pętli).
1. Napisz program, który oblicza silnię podanej przez użytkownika liczby za pomocą pętli `while`.
