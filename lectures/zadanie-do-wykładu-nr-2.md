# Zadania do Wykładu nr 2

Poniżej znajdują się proste zadania sprawdzające wiedzę z Wykładu 2, dotyczącą typów danych, operatorów oraz pracy z tekstami w Pythonie.

**Uwaga:** Do każdego zadania należy dołączyć zrzut ekranu przedstawiający kod źródłowy na swoim komputerze oraz wynik działania skryptu w terminalu.

## Zadanie 1: Sprawdzanie typów danych
Utwórz pięć zmiennych o różnych typach:
- liczbę całkowitą (`int`)
- liczbę zmiennoprzecinkową (`float`)
- ciąg znaków (`str`)
- wartość logiczną (`bool`)
- wartość pustą (`None`)

Dla każdej z tych zmiennych wyświetl jej wartość oraz jej typ za pomocą funkcji `type()`.

## Zadanie 2: Operatory arytmetyczne i modulo
Poproś użytkownika o podanie dwóch liczb całkowitych `a` i `b`. Oblicz i wyświetl:
- Wynik dzielenia `a / b`
- Wynik dzielenia całkowitego `a // b`
- Resztę z dzielenia (modulo) `a % b`
- Wynik potęgowania `a` do potęgi `b`

## Zadanie 3: Operatory porównania i logiczne
Zdefiniuj dwie zmienne: `x = 15` oraz `y = 20`. Wyświetl wyniki następujących testów logicznych:
- Czy `x` jest większe od `y`?
- Czy `x` jest różne od `y`?
- Czy `x` jest mniejsze lub równe 15 **ORAZ** `y` jest większe od 10?
- Czy `x` jest parzyste (wykorzystaj operator `%`)?

## Zadanie 4: Zabawy z tekstem (Stringi)
Dany jest tekst: `"  Programowanie w języku Python jest super!  "`
Napisz skrypt, który:
1. Usunie białe znaki z początku i końca tekstu (`strip`).
2. Zamieni wszystkie litery na wielkie (`upper`).
3. Zamieni słowo "Python" na "JS" (tylko w wyświetlaniu, nie zmieniając oryginału).
4. Rozdzieli tekst na listę słów (`split`).

## Zadanie 5: Moduł math
Zaimportuj moduł `math`. Napisz program, który:
- Obliczy pierwiastek kwadratowy z liczby 144.
- Wyświetli wartość stałej Pi.
- Zaokrągli liczbę 3.7 w górę (`ceil`) oraz w dół (`floor`).

## Zadanie 6: F-stringi i obliczenia
Poproś użytkownika o podanie promienia koła `r`. Oblicz pole koła ($P = \pi \cdot r^2$) i wyświetl wynik używając f-stringa, zaokrąglając wynik do dwóch miejsc po przecinku.

**Podpowiedź:** Aby zaokrąglić w f-stringu, użyj składni `{wynik:.2f}`.

