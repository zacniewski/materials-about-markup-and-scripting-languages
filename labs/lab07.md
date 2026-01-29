# Laboratorium 7: Przetwarzanie plików – Operacje na plikach (CSV i JSON)

## Cel zajęć
Celem zajęć jest zapoznanie się z przetwarzaniem danych w formatach strukturalnych (CSV, JSON) przy użyciu języka Python, nauką iteracji, filtrowania danych oraz obsługi błędów wejścia-wyjścia.

## Teoria

### Format CSV (Comma Separated Values)
Format CSV służy do przechowywania danych tabelarycznych w pliku tekstowym. Każdy wiersz pliku to jeden rekord, a kolumny oddzielone są separatorem (np. przecinkiem, średnikiem).
W Pythonie do obsługi tego formatu wykorzystujemy moduł `csv`.

### Format JSON (JavaScript Object Notation)
JSON to lekki format wymiany danych, oparty na strukturze obiektowej (pary klucz-wartość oraz listy). Jest powszechnie stosowany w komunikacji sieciowej i plikach konfiguracyjnych.
W Pythonie dane JSON są mapowane bezpośrednio na:
- Obiekty `{}` -> słowniki (`dict`)
- Tablice `[]` -> listy (`list`)
Do obsługi używamy modułu `json`.

## Zadania
*Poniższe zadania są zadaniami sugerowanymi i mogą ulec modyfikacji przez prowadzącego zajęcia.*

### Część 1: Format CSV

1. **Odczyt i iteracja:** Napisz program, który wczyta dane z pliku `produkty.csv` (stworzonego ręcznie, np. z kolumnami: `nazwa`, `cena`, `ilosc`) i wypisze każdy rekord w oddzielnej linii.
2. **Zapis danych:** Stwórz skrypt, który pobierze od użytkownika dane o 3 nowych produktach i dopisze je do pliku `produkty.csv`.
3. **Filtrowanie:** Napisz program, który wyświetli z pliku `produkty.csv` tylko te produkty, których cena jest wyższa niż 50 zł.
4. **Selekcja kolumn:** Napisz skrypt, który wczyta `produkty.csv` i zapisze do nowego pliku `cennik.csv` tylko dwie kolumny: `nazwa` i `cena`.

### Część 2: Format JSON

5. **Mapowanie JSON:** Stwórz plik `konfiguracja.json` zawierający ustawienia aplikacji (np. `motyw`, `powiadomienia` (bool), `jezyk`, `skróty_klawiszowe` (lista)). Napisz program, który wczyta ten plik i wyświetli wartości poszczególnych kluczy.
6. **Zapis strukturalny:** Napisz program, który stworzy listę słowników (np. lista studentów: imię, nazwisko, oceny) i zapisze ją do pliku `studenci.json` w formacie czytelnym dla człowieka (użyj parametru `indent`).
7. **Aktualizacja danych:** Napisz skrypt, który wczyta plik `studenci.json`, doda nowego studenta do listy i zapisze zaktualizowaną listę z powrotem do pliku.

### Część 3: Zadania zaawansowane i obsługa błędów

8. **Obsługa błędów:** Zmodyfikuj dowolny z powyższych programów tak, aby bezpiecznie obsługiwał brak pliku (`FileNotFoundError`) oraz nieprawidłowy format danych (np. błąd podczas konwersji ceny na liczbę).
9. **Integracja formatów (Konwerter):** Napisz program, który wczyta dane z pliku CSV (`produkty.csv`) i zapisze je do pliku JSON (`produkty.json`), dbając o to, aby liczby (cena, ilość) były zapisane w JSON jako typy numeryczne, a nie tekst.
10. **Raport końcowy:** Napisz skrypt, który odczyta dane z pliku JSON (`studenci.json`), obliczy średnią ocen dla każdego studenta, a następnie wygeneruje raport tekstowy `raport.txt` z wynikami.
