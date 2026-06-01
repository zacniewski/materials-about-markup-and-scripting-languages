# Laboratorium 15: Sprawdzian z Pythona i Technologii Webowych (Część 2)

Poniżej znajdują się pozostałe zadania przygotowawcze, skupiające się na przetwarzaniu danych, zaawansowanym OOP oraz integracji systemów.

## Cel

Sprawdzenie umiejętności przetwarzania różnych formatów danych (JSON, CSV, XML, YAML), pracy z biblioteką Flask oraz zaawansowanych struktur w Pythonie.

## Teoria w pigułce (zakres)

- Formaty danych: `json`, `csv`, `xml.etree.ElementTree`, `yaml`.
- Web: Flask (POST, JSON), CSS Grid, Responsive Web Design (RWD).
- Python: Dziedziczenie, systemy ocen, przetwarzanie tekstu.

## Przykładowe zadania

### Zadanie 1: Formaty danych (Python: CSV do JSON)

Napisz skrypt, który wczyta poniższe dane w formacie CSV (możesz zapisać je do pliku `osoby.csv` przed wczytaniem), a następnie zapisze te same dane do pliku `osoby.json`.

**Dane (osoby.csv):**
```csv
imie,nazwisko,email
Jan,Kowalski,jan.kowalski@example.com
Anna,Nowak,anna.nowak@example.com
Marek,Zieliński,marek.zielinski@example.com
```

*Podpowiedź: Użyj modułu `csv` z klasą `DictReader` oraz modułu `json` z funkcją `dump()`.*

### Zadanie 2: Przetwarzanie plików konfiguracyjnych (Python: YAML)

Odczytaj poniższe dane w formacie YAML (możesz zapisać je do pliku `config.yaml`) i wypisz komunikat: "Łączenie z bazą [user] na host [host]...".

**Dane (config.yaml):**
```yaml
database:
  host: localhost
  port: 5432
  user: admin
```

*Podpowiedź: Wymaga biblioteki `PyYAML` (import `yaml`). Plik wczytasz przez `yaml.safe_load(file)`.*

### Zadanie 3: Przetwarzanie XML (Python)

Wczytaj poniższe dane w formacie XML (możesz zapisać je do pliku `pracownicy.xml`) i wypisz nazwiska osób zarabiających powyżej 5000 zł.

**Dane (pracownicy.xml):**
```xml
<pracownicy>
    <pracownik>
        <nazwisko>Kowalski</nazwisko>
        <pensja>5200</pensja>
    </pracownik>
    <pracownik>
        <nazwisko>Nowak</nazwisko>
        <pensja>4800</pensja>
    </pracownik>
    <pracownik>
        <nazwisko>Zieliński</nazwisko>
        <pensja>6000</pensja>
    </pracownik>
</pracownicy>
```

*Podpowiedź: Użyj `xml.etree.ElementTree`. Pamiętaj, że wartości z XML są tekstowe – skonwertuj pensję na `int()`.*

### Zadanie 4: Flask i Formularze (Web: Metoda POST)

Rozbuduj aplikację Flask o obsługę formularza (Imię i Wiek) przesłanego metodą POST. Sprawdź, czy użytkownik jest pełnoletni.
*Podpowiedź: W Flasku dane z formularza są w `request.form`. Nie zapomnij o `methods=['GET', 'POST']` w trasie.*

### Zadanie 5: System ocen (Python)

Stwórz słownik, gdzie kluczami są nazwy przedmiotów, a wartościami listy ocen. Oblicz średnią dla każdego przedmiotu.
*Podpowiedź: Możesz użyć pętli `for przedmiot, oceny in słownik.items():` oraz `sum(oceny)/len(oceny)`.*

### Zadanie 6: CSS Grid i RWD (Web)

Stwórz układ strony z trzema kolumnami za pomocą CSS Grid, które na urządzeniach mobilnych (poniżej 600px) układają się pionowo.
*Podpowiedź: Użyj `display: grid` oraz `@media (max-width: 600px) { ... }`.*

### Zadanie 7: Dziedziczenie i pojazdy (Python: OOP)

Stwórz klasę bazową `Pojazd` oraz klasy `Rower` i `Autobus`. Nadpisz w nich metodę `info()`.
*Podpowiedź: Klasa pochodna definiowana jest jako `class Rower(Pojazd):`. Wywołaj `super().info()` jeśli chcesz użyć logiki z klasy bazowej.*

### Zadanie 8: Integracja (JSON + Flask)

Napisz aplikację Flask, która odczytuje poniższe dane w formacie JSON (możesz zapisać je do pliku `produkty.json`) i wyświetla je w tabeli HTML na stronie głównej.

**Dane (produkty.json):**
```json
[
  {"id": 1, "nazwa": "Laptop", "cena": 3500},
  {"id": 2, "nazwa": "Myszka", "cena": 150},
  {"id": 3, "nazwa": "Monitor", "cena": 1200}
]
```

*Podpowiedź: Wczytaj plik JSON wewnątrz funkcji widoku i przekaż listę produktów do `render_template`.*

### Zadanie 9: Filtrowanie plików tekstowych (Python)

Odczytaj plik tekstowy i zapisz do nowego pliku tylko te linie, które zawierają słowo podane przez użytkownika.
*Podpowiedź: Otwórz jeden plik do odczytu (`'r'`), a drugi do zapisu (`'w'`). Sprawdzaj `if slowo in linia:`.*

### Zadanie 10: Suma liczb w tekście (Python)

Wyodrębnij wszystkie liczby z napisu (np. "Kupiłem 2 chleby i 5 bułek") i oblicz ich sumę.
*Podpowiedź: Możesz użyć metody `.split()` i sprawdzać `.isdigit()` dla każdego elementu lub użyć wyrażeń regularnych `re`.*
