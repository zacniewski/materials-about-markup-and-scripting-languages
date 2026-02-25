# Zadania do Wykładu nr 1

Poniżej znajdują się proste zadania sprawdzające podstawową wiedzę o Pythonie oraz wprowadzające do pracy z systemem operacyjnym.

**Uwaga:** Do każdego zadania należy dołączyć zrzut ekranu przedstawiający kod źródłowy na swoim komputerze oraz wynik działania skryptu w terminalu.

## Zadanie 1: Informacje o systemie
Napisz skrypt, który pobierze i wyświetli następujące informacje:
- Nazwa systemu operacyjnego (`os.name` lub `platform.system()`)
- Nazwa zalogowanego użytkownika (`os.getlogin()` lub moduł `getpass`)
- Ścieżka do bieżącego katalogu roboczego

**Podpowiedź:** Wykorzystaj moduły `os` oraz `platform`.

```python
import os
import platform
import getpass

# Twoje rozwiązanie tutaj
```

## Zadanie 2: Zamiana zmiennych (Pythonic Way)
Masz dwie zmienne: `a = 10` i `b = 20`. Zamień ich wartości miejscami bez używania trzeciej zmiennej pomocniczej. Wyświetl wynik przed i po zamianie.

## Zadanie 3: Rozpakowywanie listy
Dana jest lista ocen: `oceny = [5, 4, 3, 5, 2, 6]`. 
Używając rozszerzonego rozpakowywania (extended unpacking), przypisz pierwszą ocenę do zmiennej `pierwsza`, ostatnią do `ostatnia`, a wszystkie pozostałe do listy `srodek`. Wyświetl te zmienne.

## Zadanie 4: Składanie list (List Comprehension)
Stwórz listę zawierającą liczby od 1 do 20. Następnie, używając składania list (list comprehension), utwórz nową listę, która będzie zawierać tylko kwadraty liczb parzystych z pierwszej listy.

## Zadanie 5: F-strings i interakcja
Poproś użytkownika o podanie imienia i wieku. Wykorzystując f-stringi, wyświetl komunikat:
`"Cześć [imię]! Za 10 lat będziesz mieć [wiek+10] lat."`
Pamiętaj o konwersji typu przy pobieraniu wieku!

## Zadanie 6: Zen of Python
Uruchom interpreter Pythona i sprawdź co się stanie po wpisaniu komendy `import this`. Przeczytaj zasady i spróbuj przetłumaczyć na polski trzy, które najbardziej do Ciebie przemawiają.

Do tego zadania dołącz zrzut ekranu z widokiem wyświetlonych zasad w terminalu.

---

# Przykładowe Rozwiązania

Poniżej znajdują się przykładowe kody rozwiązujące powyższe zadania.

### Rozwiązanie 1: Informacje o systemie
```python
import os
import platform
import getpass

print(f"System operacyjny: {platform.system()} ({os.name})")
print(f"Zalogowany użytkownik: {getpass.getuser()}")
print(f"Katalog roboczy: {os.getcwd()}")
```

### Rozwiązanie 2: Zamiana zmiennych
```python
a = 10
b = 20
print(f"Przed zamianą: a={a}, b={b}")

a, b = b, a

print(f"Po zamianie: a={a}, b={b}")
```

### Rozwiązanie 3: Rozpakowywanie listy
```python
oceny = [5, 4, 3, 5, 2, 6]
pierwsza, *srodek, ostatnia = oceny

print(f"Pierwsza: {pierwsza}")
print(f"Środek: {srodek}")
print(f"Ostatnia: {ostatnia}")
```

### Rozwiązanie 4: Składanie list
```python
liczby = list(range(1, 21))
kwadraty_parzystych = [x**2 for x in liczby if x % 2 == 0]

print(f"Lista kwadratów liczb parzystych: {kwadraty_parzystych}")
```

### Rozwiązanie 5: F-strings i interakcja
```python
imie = input("Podaj imię: ")
wiek_str = input("Podaj wiek: ")
wiek = int(wiek_str)

print(f"Cześć {imie}! Za 10 lat będziesz mieć {wiek + 10} lat.")
```
