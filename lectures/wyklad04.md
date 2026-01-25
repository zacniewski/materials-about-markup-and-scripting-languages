# Wykład 4: Kolekcje danych

## 1. Listy (`list`)
Uporządkowane, modyfikowalne kolekcje elementów. Pozwalają na duplikaty.

```python
owoce = ["jabłko", "banan", "wiśnia"]
owoce.append("pomarańcza")
print(owoce[0]) # jabłko
```

## 2. Krotki (`tuple`)
Uporządkowane, **niemodyfikowalne** (immutable) kolekcje.

```python
wymiary = (1920, 1080)
# wymiary[0] = 800  # To wygeneruje błąd!
```

## 3. Zbiory (`set`)
Nieuporządkowane kolekcje unikalnych elementów.

```python
numery = {1, 2, 2, 3} # Wynik: {1, 2, 3}
```

## 4. Słowniki (`dict`)
Kolekcje par klucz-wartość.

```python
osoba = {
    "imię": "Anna",
    "wiek": 25,
    "miasto": "Kraków"
}
print(osoba["imię"])
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
