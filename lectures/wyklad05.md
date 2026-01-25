# Wykład 5: Funkcje i moduły

## 1. Definiowanie funkcji
Funkcje pozwalają na wielokrotne wykorzystanie fragmentów kodu.

```python
def powitanie(imie="Gościu"):
    return f"Witaj, {imie}!"

print(powitanie("Artur"))
print(powitanie())
```

## 2. Argumenty funkcji
- **Pozycyjne:** `moja_funkcja(1, 2)`
- **Nazwane (keyword):** `moja_funkcja(b=2, a=1)`
- ***args:** Dowolna liczba argumentów pozycyjnych.
- ****kwargs:** Dowolna liczba argumentów nazwanych.

## 3. Zasięg zmiennych (Scope)
- **Lokalny:** Zmienna zdefiniowana wewnątrz funkcji.
- **Globalny:** Zmienna zdefiniowana w głównym skrypcie.

```python
x = 10 # Globalna

def funkcja():
    x = 5 # Lokalna
    print(x)

funkcja() # Wypisze 5
print(x)  # Wypisze 10
```

## 4. Moduły i pakiety
Moduł to plik z rozszerzeniem `.py`. Pakiet to folder zawierający moduły.

```python
import math
print(math.sqrt(16))

from datetime import datetime
print(datetime.now())
```

## 5. Struktura modułu
Dobrą praktyką jest używanie konstrukcji `if __name__ == "__main__":`

```python
def main():
    print("To jest główna funkcja")

if __name__ == "__main__":
    main()
```
