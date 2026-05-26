# Zadania do Wykładu 13: Formaty XML, CSV, YAML i JSON

Poniżej znajduje się 10 zadań sprawdzających umiejętność pracy z popularnymi formatami wymiany danych w języku Python. Do każdego zadania dołączono krótką podpowiedź. Aby wykonać zadania, przygotuj najpierw odpowiednie pliki z danymi, których zawartość znajdziesz poniżej.

---

### Przykładowe dane

Przed rozpoczęciem zadań przygotuj następujące pliki w folderze ze swoimi skryptami:

**Plik `pracownicy.csv`:**
```csv
imie,nazwisko,pensja
Jan,Kowalski,4500
Anna,Nowak,6200
Piotr,Zieliński,5100
Marta,Wiśniewska,4800
```

**Plik `serwery.xml`:**
```xml
<serwery>
    <serwer id="101">
        <nazwa>Produkcja</nazwa>
        <email>admin@firma.pl</email>
    </serwer>
    <serwer id="102">
        <nazwa>Test</nazwa>
        <email>tester@firma.pl</email>
        <email>dev@firma.pl</email>
    </serwer>
</serwery>
```

**Plik `config.yaml`:**
```yaml
database:
  host: "localhost"
  port: 5432
  user: "db_user"
```

**Plik `dane.json`:**
```json
{
    "projekt": "System CRM",
    "wersja": 1.5,
    "aktywny": true,
    "zespol": ["Anna", "Tomasz", "Ewa"]
}
```

**Plik `settings.yaml`:**
```yaml
app_name: "SuperApp"
theme: "dark"
# Brak klucza version w celu przetestowania zadania 10
```

---

### Zadania

### Zadanie 1: Odczyt danych z CSV
Napisz program, który wczyta plik `pracownicy.csv` (zawierający kolumny: `imie`, `nazwisko`, `pensja`) i wypisze tylko osoby zarabiające powyżej 5000 zł.

> **Podpowiedź:** Użyj `csv.DictReader` i pamiętaj o konwersji wartości z kolumny `pensja` na typ liczbowy (np. `float`).

### Zadanie 2: Zapis do pliku CSV
Stwórz listę słowników reprezentujących listę zakupów (np. `{"produkt": "Chleb", "ilosc": 2}`). Napisz skrypt, który zapisze te dane do pliku `zakupy.csv` z odpowiednim nagłówkiem.

> **Podpowiedź:** Wykorzystaj klasę `csv.DictWriter` i metodę `writeheader()`.

### Zadanie 3: Serializacja do JSON
Masz w Pythonie słownik opisujący parametry techniczne samochodu. Zapisz ten słownik do pliku `auto.json`, dbając o to, by plik był czytelny dla człowieka (zastosuj wcięcia).

> **Podpowiedź:** Użyj funkcji `json.dump` z parametrem `indent=4`.

### Zadanie 4: Parsowanie danych JSON z tekstu
Otrzymałeś od zewnętrznej usługi tekst w formacie JSON (string). Napisz program, który zamieni go na obiekt Pythona (słownik) i wypisze wartość jednego z kluczy.

> **Podpowiedź:** Użyj funkcji `json.loads` (z literą 's' na końcu, od 'string').

### Zadanie 5: Odczyt atrybutów XML
Dany jest plik `serwery.xml` o strukturze: `<serwery><serwer id="1">...</serwer></serwery>`. Napisz program, który wypisze wszystkie wartości atrybutu `id`.

> **Podpowiedź:** Po znalezieniu elementu metodą `find` lub `findall`, użyj metody `.get("id")`.

### Zadanie 6: Wyszukiwanie w strukturze XML
W pliku XML znajdź wszystkie elementy o nazwie `<email>` i stwórz z ich zawartości listę adresów.

> **Podpowiedź:** Wykorzystaj `root.findall(".//email")` lub pętlę iterującą po wszystkich elementach. Tekst wyciągniesz przez właściwość `.text`.

### Zadanie 7: Ładowanie konfiguracji YAML
Stwórz plik `config.yaml` z ustawieniami bazy danych (host, port, user). Napisz skrypt, który wczyta ten plik i wyświetli port jako liczbę całkowitą.

> **Podpowiedź:** Użyj `yaml.safe_load()`. Pamiętaj o zainstalowaniu biblioteki `PyYAML` (`pip install pyyaml`).

### Zadanie 8: Tworzenie pliku YAML z obiektu
Zdefiniuj w Pythonie zagnieżdżoną listę zawierającą plany na najbliższe dni. Zapisz ją do pliku `kalendarz.yaml`.

> **Podpowiedź:** Użyj funkcji `yaml.dump(data, file)`.

### Zadanie 9: Konwerter JSON do YAML
Napisz skrypt, który wczyta dane z pliku `dane.json`, a następnie zapisze je w nowym pliku `dane.yaml`.

> **Podpowiedź:** Wczytaj dane za pomocą `json.load`, a następnie przekaż otrzymany obiekt bezpośrednio do `yaml.dump`.

### Zadanie 10: Walidacja klucza w konfiguracji
Napisz program, który wczytuje plik `settings.yaml`. Jeśli w pliku brakuje klucza `version`, program powinien wypisać ostrzeżenie: "Brak zdefiniowanej wersji konfiguracji!".

> **Podpowiedź:** Po wczytaniu pliku przez `yaml.safe_load`, sprawdź obecność klucza za pomocą operatora `if 'version' not in config:`.
