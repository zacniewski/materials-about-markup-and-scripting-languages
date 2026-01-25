# Wykład 14: Manipulacja danymi w Pythonie (część 1)

## 1. Praca z formatem CSV
Python posiada wbudowany moduł `csv`.

### Odczyt CSV:
```python
import csv

with open('dane.csv', mode='r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row['Imię'], row['Nazwisko'])
```

## 2. Praca z formatem JSON
Wbudowany moduł `json` pozwala na łatwą konwersję między słownikami Pythona a tekstem JSON.

### Serializacja (Python -> JSON):
```python
import json

dane = {"id": 1, "status": "OK"}
json_string = json.dumps(dane, indent=4)
print(json_string)
```

### Deserializacja (JSON -> Python):
```python
import json

tekst_json = '{"id": 1, "status": "OK"}'
slownik = json.loads(tekst_json)
print(slownik["status"])
```

## 3. Porównanie typów danych
| JSON | Python |
|------|--------|
| `object` | `dict` |
| `array` | `list` |
| `string` | `str` |
| `number` | `int` / `float` |
| `true` / `false` | `True` / `False` |
| `null` | `None` |
