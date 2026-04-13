# Zadania do Wykładu nr 6

Poniżej znajdują się zadania sprawdzające wiedzę z Wykładu 6, dotyczące programowania obiektowego (OOP) w Pythonie, w tym tworzenia klas, obiektów, dziedziczenia oraz hermetyzacji.

**Uwaga:** Do każdego zadania należy dołączyć zrzut ekranu przedstawiający kod źródłowy na swoim komputerze oraz wynik działania skryptu w terminalu.

## Zadanie 1: Twoja pierwsza klasa

Zdefiniuj klasę `Pies`, która posiada atrybuty instancji `imie` oraz `rasa`. Utwórz dwa obiekty tej klasy o dowolnych danych i wyświetl ich atrybuty.

**Podpowiedź:** Użyj metody `__init__(self, imie, rasa)`, aby przypisać wartości do atrybutów `self.imie` i `self.rasa`.

## Zadanie 2: Metody instancji

Rozbuduj klasę `Samochod` (możesz wykorzystać przykład z wykładu). Dodaj metodę `opis_pelny()`, która zwraca sformatowany ciąg znaków zawierający markę, model oraz rok produkcji. Utwórz obiekt i wywołaj tę metodę.

**Podpowiedź:** Metoda powinna przyjmować tylko parametr `self` i zwracać f-string, np. `f"To jest {self.marka}..."`.

## Zadanie 3: Metoda specjalna `__str__`

Stwórz klasę `Ksiazka` z atrybutami `tytul` i `autor`. Zaimplementuj metodę specjalną `__str__`, aby po użyciu funkcji `print()` na obiekcie, wyświetlał się tekst w formacie: `"Tytuł: [tytul], Autor: [autor]"`.

**Podpowiedź:** Metoda `__str__` musi zwracać (return) ciąg znaków, a nie go wypisywać (print).

## Zadanie 4: Dziedziczenie podstawowe

Stwórz klasę bazową `Ptak` z metodą `lec()`, która wypisuje "Latam!". Następnie stwórz klasę `Orzel`, która dziedziczy po klasie `Ptak`. Utwórz obiekt klasy `Orzel` i wywołaj na nim metodę `lec()`.

**Podpowiedź:** Klasę dziedziczącą definiujemy jako `class NazwaKlasy(KlasaBazowa):`.

## Zadanie 5: Wykorzystanie `super()`

Stwórz klasę `Pracownik` z atrybutem `nazwisko`. Następnie stwórz klasę `Programista`, która dziedziczy po `Pracownik` i dodaje atrybut `jezyk_programowania`. Użyj funkcji `super()`, aby zainicjalizować nazwisko w konstruktorze klasy `Programista`.

**Podpowiedź:** W `__init__` klasy `Programista` wywołaj `super().__init__(nazwisko)`.

## Zadanie 6: Hermetyzacja i `@property`

Stwórz klasę `KontoBankowe` z prywatnym atrybutem `__saldo`. Użyj dekoratora `@property`, aby stworzyć metodę dostępową (getter) do salda. Dodaj także setter, który pozwoli zmienić saldo tylko, jeśli nowa wartość jest większa od zera.

**Podpowiedź:** Prywatny atrybut zaczyna się od dwóch podkreśleń (`__`). Setter definiujemy za pomocą `@nazwa_metody.setter`.

## Zadanie 7: Polimorfizm w praktyce

Stwórz listę zawierającą obiekty różnych klas (np. `Kolo`, `Kwadrat`), z których każda posiada metodę `oblicz_pole()`. Przejdź pętlą `for` przez tę listę i wywołaj metodę `oblicz_pole()` dla każdego obiektu, wyświetlając wynik.

**Podpowiedź:** Polimorfizm pozwala traktować różne obiekty w ten sam sposób, o ile mają one metody o tej samej nazwie.

## Zadanie 8: Prosta logika w klasie

Zaimplementuj klasę `Termometr`, która przechowuje temperaturę w stopniach Celsjusza. Dodaj metodę, która zwraca tę samą temperaturę, ale przeliczoną na stopnie Fahrenheita.

**Podpowiedź:** Wzór na przeliczenie to: `F = (C * 9/5) + 32`. Pamiętaj o użyciu `self.temperatura`.
