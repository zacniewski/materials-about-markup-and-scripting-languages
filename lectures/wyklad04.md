# Wykład 4: Kolekcje danych

## 1. Listy (`list`)
Uporządkowane, modyfikowalne kolekcje elementów. Pozwalają na przechowywanie elementów różnych typów oraz duplikatów.

```python
owoce = ["jabłko", "banan", "wiśnia"]
owoce.append("pomarańcza") # dodanie na koniec
owoce.insert(1, "mango")    # dodanie na konkretny indeks
owoce.remove("banan")       # usunięcie elementu o wartości "banan"
ostatni = owoce.pop()       # usunięcie i zwrócenie ostatniego elementu

print(owoce[0])     # jabłko
print(len(owoce))   # długość listy
```

## 2. Krotki (`tuple`)
Uporządkowane, **niemodyfikowalne** (immutable) kolekcje. Używamy ich, gdy chcemy mieć pewność, że dane nie zostaną zmienione w trakcie działania programu.

```python
wymiary = (1920, 1080)
# wymiary[0] = 800  # To wygeneruje błąd TypeError!

# Rozpakowywanie krotki
szerokosc, wysokosc = wymiary
print(f"Szerokość: {szerokosc}, Wysokość: {wysokosc}")
```

## 3. Zbiory (`set`)
Nieuporządkowane kolekcje unikalnych elementów. Idealne do usuwania duplikatów oraz operacji na zbiorach (suma, iloczyn, różnica).

```python
numery = {1, 2, 2, 3, 4, 4} # Wynik: {1, 2, 3, 4}
numery.add(5)

inne_numery = {4, 5, 6, 7}
print(numery.intersection(inne_numery)) # Część wspólna: {4, 5}
print(numery.union(inne_numery))        # Suma zbiorów
```

## 4. Słowniki (`dict`)
Bardzo wydajne kolekcje par klucz-wartość. Klucze muszą być unikalne i niezmienne (np. str, int, tuple).

```python
osoba = {
    "imię": "Anna",
    "wiek": 25,
    "miasto": "Kraków"
}

# Dostęp do danych
print(osoba["imię"])
print(osoba.get("zawód", "Nie podano")) # Bezpieczne pobieranie klucza

# Dodawanie/Aktualizacja
osoba["zawód"] = "Programistka"
osoba["wiek"] = 26

# Iteracja po słowniku
for klucz, wartosc in osoba.items():
    print(f"{klucz}: {wartosc}")
```

## 5. Podsumowanie kolekcji
| Cecha | Lista | Krotka | Zbiór | Słownik |
|-------|-------|--------|-------|---------|
| Uporządkowana | Tak | Tak | Nie | Tak (od 3.7) |
| Modyfikowalna | Tak | Nie | Tak | Tak |
| Duplikaty | Tak | Tak | Nie | Nie (klucze) |
| Indeksowanie | Tak | Tak | Nie | Tak (klucze) |

## 6. Slicing (wycinanie)
Działa na listach i stringach.
```python
lista = [0, 1, 2, 3, 4, 5]
print(lista[1:4]) # [1, 2, 3]
```
