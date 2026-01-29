# Wykład 2: Podstawowe typy danych i operatory

## 1. Zmienne i dynamiczne typowanie
W Pythonie zmienna jest etykietą przypisaną do obiektu w pamięci. Nie musimy deklarować typu zmiennej przy jej tworzeniu – typ jest określany automatycznie na podstawie przypisanej wartości. Możemy również zmienić typ zmiennej w trakcie działania programu (choć zazwyczaj nie jest to zalecane).

```python
x = 10       # int
x = "dziesięć" # zmiana typu na str (dynamiczne typowanie)

y = 3.14     # float
name = "Jan" # str
is_true = True # bool
```

### Zasady nazewnictwa zmiennych:
- Nazwy mogą zawierać litery, cyfry i podkreślenia (`_`).
- Nie mogą zaczynać się od cyfry.
- Są wrażliwe na wielkość liter (`wiek` i `Wiek` to dwie różne zmienne).
- Nie mogą być słowami kluczowymi Pythona (np. `if`, `for`, `class`).
- Zaleca się stosowanie stylu `snake_case` (np. `moje_imie`).

## 2. Podstawowe typy danych
| Typ | Opis | Przykład |
|-----|------|----------|
| `int` | Liczby całkowite o nieograniczonej precyzji | `5`, `-2`, `10**100` |
| `float` | Liczby zmiennoprzecinkowe (zgodne z IEEE 754) | `2.5`, `1.2e-3` |
| `str` | Ciągi znaków (Unicode) | `"Cześć"`, `'Python'` |
| `bool` | Wartości logiczne | `True`, `False` |
| `NoneType` | Reprezentuje brak wartości (odpowiednik `null`) | `None` |

### Przykład z typami:
```python
liczba = 42
pi = 3.14159
tekst = "Python jest super"
czy_pada = False
pusta_zmienna = None

print(type(liczba)) # <class 'int'>
print(type(pi))     # <class 'float'>
```

## 3. Operatory arytmetyczne
- `+` dodawanie
- `-` odejmowanie
- `*` mnożenie
- `/` dzielenie (zawsze zwraca `float`)
- `//` dzielenie całkowite (obcina część ułamkową)
- `%` reszta z dzielenia (modulo)
- `**` potęgowanie

### Przykład:
```python
a = 10
b = 3

print(a + b)  # 13
print(a / b)  # 3.3333333333333335
print(a // b) # 3
print(a % b)  # 1
print(a ** b) # 1000
```

## 4. Operatory porównania i logiczne
| Operator | Opis | Przykład |
|----------|------|----------|
| `==` | Równe | `5 == 5` (True) |
| `!=` | Różne | `5 != 3` (True) |
| `>` , `<` | Większe, mniejsze | `10 > 2` (True) |
| `>=` , `<=` | Większe/równe, mniejsze/równe | `5 >= 5` (True) |
| `and` | Koniunkcja (I) | `True and False` (False) |
| `or` | Alternatywa (LUB) | `True or False` (True) |
| `not` | Negacja (NIE) | `not True` (False) |

### Skrócone operatory przypisania:
```python
x = 5
x += 3 # odpowiednik x = x + 3
x *= 2 # odpowiednik x = x * 2
```

## 5. Konwersja typów (Casting)
Czasami musimy zmienić typ danych, np. gdy pobieramy dane od użytkownika przez `input()`, który zawsze zwraca `str`.

```python
liczba_str = "10"
liczba_int = int(liczba_str) # Konwersja na int

pi_str = "3.14"
pi_float = float(pi_str)     # Konwersja na float

wiek = 25
wiadomosc = "Mam " + str(wiek) + " lat" # Konwersja na str do konkatenacji
```
