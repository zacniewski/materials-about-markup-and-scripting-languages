# Laboratorium 15: Integracja formatów i projekt końcowy

## Cel zajęć
Zaawansowana manipulacja danymi XML/YAML oraz stworzenie uniwersalnego konwertera.

## Zadania
1. Napisz program, który odczytuje plik `konfiguracja.xml` i wypisuje wartość atrybutu `port`.
2. Zainstaluj bibliotekę `PyYAML` (`pip install pyyaml`) i napisz skrypt, który wczytuje plik `konfiguracja.yaml` i zmienia w nim wartość `czy_debugowanie` na `false`, a następnie zapisuje zmiany.
3. **Projekt końcowy: Uniwersalny Konwerter.**
   Napisz skrypt w Pythonie, który przyjmuje dwa argumenty linii komend: plik wejściowy (CSV) i format wyjściowy (JSON lub YAML). Program powinien dokonać konwersji i zapisać wynik do nowego pliku.
4. Dodaj do konwertera obsługę błędów (np. brak pliku wejściowego, nieobsługiwany format wyjściowy).
5. Przygotuj krótką dokumentację swojego skryptu w formacie Markdown (plik `DOKUMENTACJA.md`).
6. Rozbuduj konwerter o możliwość konwersji w drugą stronę: z formatu JSON do CSV.
7. Napisz testy jednostkowe (używając modułu `unittest` lub `pytest`) dla kluczowych funkcji konwertera danych.
