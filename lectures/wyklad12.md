# Wykład 12: Format JSON

## 1. Co to jest JSON?
JSON (JavaScript Object Notation) to lekki format wymiany danych. Jest łatwy do odczytu i zapisu dla ludzi oraz łatwy do analizowania i generowania dla maszyn.

## 2. Struktura JSON
JSON opiera się na dwóch strukturach:
- Zbiór par nazwa/wartość (obiekt).
- Uporządkowana lista wartości (tablica).

### Przykład:
```json
{
  "uzytkownik": "jan_kowalski",
  "wiek": 30,
  "czy_aktywny": true,
  "role": ["admin", "user"],
  "adres": {
    "miasto": "Warszawa",
    "kod": "00-001"
  }
}
```

## 3. Typy danych w JSON
| Typ | Opis | Przykład |
|-----|------|----------|
| `string` | Ciąg znaków w cudzysłowie | `"tekst"` |
| `number` | Liczba | `123.45` |
| `object` | Zbiór par klucz-wartość | `{...}` |
| `array` | Lista wartości | `[...]` |
| `boolean` | Wartość logiczna | `true` / `false` |
| `null` | Pusta wartość | `null` |

## 4. JSON a JavaScript
W JavaScript do obsługi JSON służy wbudowany obiekt `JSON`:
- `JSON.stringify(obj)`: Zamienia obiekt JS na tekst JSON.
- `JSON.parse(tekst)`: Zamienia tekst JSON na obiekt JS.

## 5. Zastosowania
- Komunikacja między klientem a serwerem (API REST).
- Pliki konfiguracyjne.
- Przechowywanie danych o prostej strukturze.
