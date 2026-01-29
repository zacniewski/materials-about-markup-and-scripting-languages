# Wykład 5: Funkcje i moduły

## 1. Definiowanie funkcji
Funkcje pozwalają na wielokrotne wykorzystanie fragmentów kodu, co zwiększa czytelność i ułatwia testowanie. Definiujemy je za pomocą słowa kluczowego `def`.

```python
def pole_prostokata(a, b):
    """Oblicza pole prostokąta.""" # Docstring - dokumentacja funkcji
    return a * b

wynik = pole_prostokata(5, 10)
print(f"Pole wynosi: {wynik}")
```

### Parametry domyślne:
Możemy zdefiniować wartości domyślne dla parametrów.

```python
def powitanie(imie="Gościu", pora_dnia="Dzień dobry"):
    return f"{pora_dnia}, {imie}!"

print(powitanie("Artur"))          # Dzień dobry, Artur!
print(powitanie(imie="Ewa", pora_dnia="Dobry wieczór")) # Dobry wieczór, Ewa!
```

## 2. Zaawansowane argumenty funkcji
- ***args:** Przekazywanie dowolnej liczby argumentów pozycyjnych (trafiają do funkcji jako krotka).
- ****kwargs:** Przekazywanie dowolnej liczby argumentów nazwanych (trafiają do funkcji jako słownik).

```python
def sumuj_wszystko(*args):
    return sum(args)

print(sumuj_wszystko(1, 2, 3, 4)) # 10

def pokaz_info(**kwargs):
    for klucz, wartosc in kwargs.items():
        print(f"{klucz}: {wartosc}")

pokaz_info(produkt="Laptop", cena=3500, waluta="PLN")
```

## 3. Zasięg zmiennych (Scope)
Python szuka zmiennych w kolejności LEGB: **L**ocal, **E**nclosing, **G**lobal, **B**uilt-in.

- **Lokalny:** Zmienna zdefiniowana wewnątrz funkcji.
- **Globalny:** Zmienna zdefiniowana w głównym skrypcie.

```python
x = 10 # Globalna

def funkcja():
    global x # Informujemy, że chcemy modyfikować zmienną globalną
    x = 5 
    print(f"Wewnątrz: {x}")

funkcja() 
print(f"Na zewnątrz: {x}") # Teraz x wynosi 5
```

## 4. Lambda - funkcje anonimowe
Są to krótkie, jednolinijkowe funkcje bez nazwy.

```python
kwadrat = lambda x: x ** 2
print(kwadrat(5)) # 25

# Często używane z funkcjami wyższego rzędu jak map() lub filter()
liczby = [1, 2, 3, 4, 5]
parzyste = list(filter(lambda x: x % 2 == 0, liczby))
print(parzyste) # [2, 4]
```

## 5. Moduły i pakiety
Moduł to plik z rozszerzeniem `.py` zawierający definicje funkcji, klas i zmiennych. Pakiet to folder zawierający moduły (oraz plik `__init__.py` w starszych wersjach Pythona).

### Importowanie modułów:
```python
import math
print(math.sqrt(16)) # 4.0

from datetime import datetime
print(datetime.now())

# Aliasy
import random as rd
import statistics as stats

print(rd.randint(1, 10))
print(stats.mean([1, 2, 3, 4]))
```

## 6. Struktura modułu i punkt wejścia
Dobrą praktyką jest używanie konstrukcji `if __name__ == "__main__":`. Pozwala to na uruchomienie kodu tylko wtedy, gdy plik jest wykonywany bezpośrednio, a nie importowany jako moduł.

```python
def main():
    print("To jest główna funkcja programu")

if __name__ == "__main__":
    main()
```
