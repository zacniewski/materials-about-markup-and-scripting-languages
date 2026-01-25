# Wykład 2: Podstawowe typy danych i operatory

## 1. Zmienne i dynamiczne typowanie
W Pythonie nie musimy deklarować typu zmiennej. Typ jest przypisywany w momencie przypisania wartości.

```python
x = 10       # int
y = 3.14     # float
name = "Jan" # str
is_true = True # bool
```

## 2. Podstawowe typy danych
| Typ | Opis | Przykład |
|-----|------|----------|
| `int` | Liczby całkowite | `5`, `-2`, `1000` |
| `float` | Liczby zmiennoprzecinkowe | `2.5`, `0.0`, `-1.2` |
| `str` | Ciągi znaków | `"Cześć"`, `'Python'` |
| `bool` | Wartości logiczne | `True`, `False` |
| `NoneType` | Brak wartości | `None` |

## 3. Operatory arytmetyczne
- `+` dodawanie
- `-` odejmowanie
- `*` mnożenie
- `/` dzielenie (zawsze zwraca `float`)
- `//` dzielenie całkowite
- `%` reszta z dzielenia (modulo)
- `**` potęgowanie

## 4. Operatory porównania i logiczne
| Operator | Opis |
|----------|------|
| `==` | Równe |
| `!=` | Różne |
| `>` , `<` | Większe, mniejsze |
| `and` | Koniunkcja (I) |
| `or` | Alternatywa (LUB) |
| `not` | Negacja (NIE) |

## 5. Konwersja typów (Casting)
```python
a = int("10")
b = str(3.14)
c = float(5)
```
