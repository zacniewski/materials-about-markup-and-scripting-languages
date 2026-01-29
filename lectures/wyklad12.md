# Wykład 12: Format JSON

## 1. Co to jest JSON?
JSON (JavaScript Object Notation) to lekki format wymiany danych, niezależny od języka programowania. Stał się standardem w komunikacji między systemami (API) ze względu na swoją prostotę i czytelność.

### Zasady składni JSON:
- Dane są w parach nazwa/wartość.
- Nazwy (klucze) muszą być w podwójnym cudzysłowie.
- Dane są oddzielone przecinkami.
- Nawiasy klamrowe `{}` trzymają obiekty.
- Nawiasy kwadratowe `[]` trzymają tablice.

## 2. Obsługa JSON w Pythonie
Python posiada wbudowany moduł `json`, który pozwala na łatwą konwersję między formatem JSON a słownikami/listami Pythona.

```python
import json

# Dane w formacie słownika Pythona
dane = {
    "imie": "Marek",
    "osiagniecia": [10, 25, 40],
    "premium": False
}

# 1. Serializacja: Słownik -> Tekst JSON
json_string = json.dumps(dane, indent=4)
print(json_string)

# 2. Deserializacja: Tekst JSON -> Słownik
slownik = json.loads(json_string)
print(slownik["imie"]) # Marek
```

## 3. Praca z plikami JSON
Możemy zapisywać i odczytywać dane JSON bezpośrednio z plików za pomocą funkcji `dump` i `load`.

```python
# Zapis do pliku
with open("config.json", "w") as f:
    json.dump(dane, f)

# Odczyt z pliku
with open("config.json", "r") as f:
    wczytane_dane = json.load(f)
```

## 4. JSON a REST API (Przykład koncepcyjny)
Większość nowoczesnych usług internetowych komunikuje się za pomocą JSON. Chociaż Python wymaga biblioteki `requests` do wygodnej obsługi HTTP, sam format JSON pozostaje taki sam.

```python
# Przykład użycia biblioteki requests (wymaga instalacji: pip install requests)
# import requests
# response = requests.get("https://api.github.com/users/python")
# data = response.json()
```
