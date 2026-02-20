# Laboratorium 4: Praca z kolekcjami

## Cel zajęć
Zarządzanie danymi w listach, krotkach, zbiorach i słownikach.

## 1. Wycinanie list (Slicing) - przypomnienie
Slicing pozwala na szybki dostęp do podzbiorów kolekcji. Składnia to `lista[start:stop:krok]`.

```mermaid
graph LR
    L[Lista] --> S[Slicing]
    S --> F[Pierwsze 3: [:3]]
    S --> L2[Ostatnie 2: [-2:]]
    S --> R[Od tyłu: [::-1]]
```

## 2. Metody słownika
Słowniki to jedne z najważniejszych struktur w Pythonie. Pamiętaj o metodzie `.get()`, która zapobiega błędom `KeyError`.
```python
ceny = {"chleb": 4.50, "mleko": 3.20}
# Bezpieczne pobranie ceny
cena = ceny.get("jajka", 0.00) # Jeśli nie ma jajek, zwróci 0.00
```

---

## Zadania
*Poniższe zadania są zadaniami sugerowanymi i mogą ulec modyfikacji przez prowadzącego zajęcia.*

1. Utwórz listę zakupów. Napisz program, który pozwala użytkownikowi dodawać elementy do listy, usuwać je oraz wyświetlać całą listę.
2. Napisz skrypt, który pobiera od użytkownika 5 liczb, zapisuje je w liście, a następnie wypisuje średnią arytmetyczną tych liczb.
3. Mając słownik: `ceny = {"chleb": 4.50, "mleko": 3.20, "jajka": 10.00}`, oblicz sumę zakupów na podstawie listy produktów podanych przez użytkownika.
4. Napisz program, który usunie duplikaty z listy: `[1, 2, 2, 3, 4, 4, 5, 1]` przy użyciu zbioru (`set`).
5. Napisz program zliczający wystąpienia każdego słowa w podanym zdaniu.
6. Stwórz listę krotek, gdzie każda krotka zawiera imię i wiek osoby. Napisz program, który posortuje tę listę według wieku.
7. Napisz program, który łączy dwa słowniki w jeden, przy czym w przypadku powtarzających się kluczy, wartości powinny zostać zsumowane.
8. Napisz program, który znajduje największy i najmniejszy element w liście liczb bez użycia funkcji `max()` i `min()`.
9. Stwórz słownik, w którym kluczami są numery indeksów studentów, a wartościami ich oceny. Napisz program, który wyliczy średnią ocen wszystkich studentów.
10. Napisz program, który pobiera od użytkownika dwa zbiory liczb i wypisuje ich część wspólną oraz różnicę symetryczną.
