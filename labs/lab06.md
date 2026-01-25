# Laboratorium 6: Programowanie obiektowe (OOP)

## Cel zajęć
Implementacja własnych klas, metod oraz wykorzystanie dziedziczenia.

## Zadania
1. Stwórz klasę `Student` z atrybutami `imie`, `nazwisko`, `nr_indeksu`. Dodaj metodę `przedstaw_sie()`.
2. Rozbuduj klasę `Student` o listę ocen. Dodaj metody `dodaj_ocene(ocena)` oraz `oblicz_srednia()`.
3. Stwórz klasę `KontoBankowe` z atrybutem `saldo`. Dodaj metody `wplata(kwota)` i `wyplata(kwota)`. Zadbaj o to, by saldo nie było ujemne.
4. Stwórz klasę bazową `Zwierze` z metodą `daj_glos()`. Stwórz klasy `Pies` i `Kot`, które dziedziczą po `Zwierze` i nadpisują metodę `daj_glos()`.
5. Stwórz prosty system zarządzania biblioteką: klasy `Ksiazka` i `Biblioteka`. `Biblioteka` powinna zawierać listę obiektów `Ksiazka`.
6. Dodaj do klasy `Samochod` atrybuty `marka`, `model` oraz `rok_produkcji`. Stwórz metodę, która oblicza wiek samochodu na podstawie aktualnego roku.
7. Zaimplementuj klasę `Prostokat` z atrybutami `dlugosc` i `szerokosc`. Dodaj metody obliczające pole oraz obwód prostokąta.
