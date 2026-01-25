# Wykład 7: Obsługa wyjątków i praca z systemem plików

## 1. Obsługa wyjątków
Wyjątki to błędy wykryte podczas wykonywania programu. Blok `try-except` pozwala na ich bezpieczne obsłużenie.

```python
try:
    wynik = 10 / 0
except ZeroDivisionError:
    print("Błąd: Nie dziel przez zero!")
except Exception as e:
    print(f"Wystąpił nieoczekiwany błąd: {e}")
finally:
    print("Ten kod wykona się zawsze.")
```

## 2. Najczęstsze wyjątki
- `ValueError`: Zła wartość (np. próba konwersji "abc" na int).
- `TypeError`: Operacja na niedozwolonym typie.
- `FileNotFoundError`: Próba otwarcia nieistniejącego pliku.
- `IndexError`: Wyjście poza zakres listy.

## 3. Praca z plikami
Najlepiej używać menadżera kontekstu `with`, który automatycznie zamyka plik.

### Zapisywanie do pliku:
```python
with open("notatka.txt", "w", encoding="utf-8") as f:
    f.write("Witaj w pliku tekstowym!\n")
    f.write("To jest druga linia.")
```

### Odczytywanie z pliku:
```python
with open("notatka.txt", "r", encoding="utf-8") as f:
    tresc = f.read()
    print(tresc)
```

## 4. Tryby otwierania plików
| Tryb | Opis |
|------|------|
| `r` | Odczyt (domyślny) |
| `w` | Zapis (nadpisuje plik) |
| `a` | Dopisywanie (append) |
| `x` | Tworzenie (błąd jeśli plik istnieje) |
| `b` | Tryb binarny (np. dla zdjęć) |

## 5. Moduł `os` i `pathlib`
Służą do zarządzania ścieżkami i operacji na systemie plików.
```python
import os
print(os.getcwd()) # Aktualny katalog
```
