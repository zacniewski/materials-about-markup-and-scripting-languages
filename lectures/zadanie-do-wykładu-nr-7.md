# Zadania do Wykładu nr 7

Poniżej znajdują się zadania sprawdzające wiedzę z Wykładu 7, dotyczące obsługi wyjątków, pracy z plikami tekstowymi, formatami CSV i JSON oraz operacji na systemie plików.

**Uwaga:** Do każdego zadania należy dołączyć zrzut ekranu przedstawiający kod źródłowy na swoim komputerze oraz wynik działania skryptu w terminalu.

## Zadanie 1: Obsługa dzielenia przez zero

Napisz program, który poprosi użytkownika o podanie dwóch liczb i wyświetli wynik ich dzielenia. Użyj bloku `try-except`, aby obsłużyć błąd dzielenia przez zero (`ZeroDivisionError`) oraz błąd błędnego typu danych (`ValueError`), jeśli użytkownik wprowadzi tekst zamiast liczby.

**Podpowiedź:** Umieść `input()` oraz operację dzielenia wewnątrz bloku `try`. Dodaj oddzielne bloki `except` dla każdego typu błędu.

## Zadanie 2: Własny wyjątek z `raise`

Stwórz funkcję `sprawdz_haslo(haslo)`, która podnosi wyjątek `ValueError` z komunikatem "Hasło jest za krótkie!", jeśli podane hasło ma mniej niż 8 znaków. Przetestuj funkcję, wywołując ją w bloku `try-except`.

**Podpowiedź:** Użyj funkcji `len(haslo)` do sprawdzenia długości ciągu znaków i słowa kluczowego `raise ValueError("komunikat")`.

## Zadanie 3: Zapis do pliku tekstowego

Stwórz listę zawierającą trzy Twoje ulubione potrawy. Zapisz każdy element listy w nowej linii do pliku o nazwie `potrawy.txt`, używając menadżera kontekstu `with`.

**Podpowiedź:** Otwórz plik w trybie `"w"`. Możesz użyć pętli `for` i metody `f.write(potrawa + "\n")` lub metody `f.writelines()`.

## Zadanie 4: Odczyt i filtrowanie danych z pliku

Stwórz plik `liczby.txt` ręcznie (lub w kodzie), wpisując w nim kilka liczb (każda w nowej linii). Napisz skrypt, który odczyta ten plik i wypisze na ekranie tylko te liczby, które są większe od 10.

**Podpowiedź:** Pamiętaj o konwersji odczytanego tekstu na typ liczbowy (`int` lub `float`) przed porównaniem. Użyj `line.strip()`, aby pozbyć się znaków nowej linii.

## Zadanie 5: Praca z formatem CSV

Stwórz plik `uczniowie.csv` z kolumnami `imie` oraz `ocena`. Napisz program, który używając `csv.DictReader`, odczyta ten plik i wypisze imiona uczniów, których ocena jest równa 5.

**Podpowiedź:** Zaimportuj moduł `csv`. Pamiętaj, że dane odczytane z CSV są domyślnie ciągami znaków (stringami).

## Zadanie 6: Serializacja JSON

Stwórz słownik Python reprezentujący dane o samochodzie (marka, model, rok, przebieg). Zapisz ten słownik do pliku `auto.json` w czytelnym formacie (z wcięciami).

**Podpowiedź:** Użyj funkcji `json.dump(slownik, f, indent=4)`. Nie zapomnij o `import json`.

## Zadanie 7: Zarządzanie folderami z `pathlib`

Napisz skrypt, który za pomocą biblioteki `pathlib` sprawdzi, czy w bieżącym katalogu istnieje folder o nazwie `backup`. Jeśli nie istnieje, skrypt powinien go stworzyć.

**Podpowiedź:** Użyj `from pathlib import Path`. Metoda `exists()` sprawdza czy ścieżka istnieje, a `mkdir()` tworzy katalog.

## Zadanie 8: Wyszukiwanie plików wzorcem `glob`

Używając modułu `glob`, wypisz listę wszystkich plików z rozszerzeniem `.py`, które znajdują się w Twoim bieżącym folderze projektu.

**Podpowiedź:** Użyj wzorca `*.py`. Zaimportuj moduł `import glob` i skorzystaj z funkcji `glob.glob()`.
