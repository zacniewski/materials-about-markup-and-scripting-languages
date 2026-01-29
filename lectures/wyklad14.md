# Wykład 14: Biblioteki zewnętrzne i zarządca pakietów pip

## 1. Co to jest pip?
`pip` (Package Installer for Python) to standardowy system zarządzania pakietami dla Pythona. Pozwala on na instalowanie i zarządzanie dodatkowymi bibliotekami, które nie są częścią biblioteki standardowej.

### Podstawowe komendy:
```bash
# Instalacja pakietu
pip install nazwa_pakietu

# Instalacja konkretnej wersji
pip install requests==2.28.1

# Odinstalowanie
pip uninstall nazwa_pakietu

# Lista zainstalowanych pakietów
pip list
```

## 2. Plik `requirements.txt`
W profesjonalnych projektach listę wszystkich zależności zapisuje się w pliku `requirements.txt`. Dzięki temu inni programiści mogą zainstalować wszystkie potrzebne biblioteki jedną komendą.

### Generowanie i używanie:
```bash
# Zapisanie bieżących pakietów do pliku
pip freeze > requirements.txt

# Instalacja wszystkiego z pliku
pip install -r requirements.txt
```

## 3. Środowiska wirtualne (`venv`)
Środowisko wirtualne pozwala na odizolowanie zależności różnych projektów. Zapobiega to konfliktom wersji (np. Projekt A wymaga Django 3, a Projekt B wymaga Django 4).

### Tworzenie i aktywacja:
```bash
# Utworzenie środowiska w folderze .venv
python -m venv .venv

# Aktywacja (Windows)
.venv\Scripts\activate

# Aktywacja (Linux/macOS)
source .venv/bin/activate

# Deaktywacja
deactivate
```

## 4. Popularne biblioteki zewnętrzne
| Biblioteka | Zastosowanie |
|------------|--------------|
| `requests` | Obsługa zapytań HTTP |
| `pandas` | Analiza i manipulacja danymi |
| `numpy` | Obliczenia numeryczne i macierzowe |
| `flask` / `django` | Tworzenie aplikacji webowych |
| `pytest` | Testowanie kodu |
| `pillow` | Przetwarzanie obrazów |

## 5. Korzystanie z biblioteki zewnętrznej (przykład koncepcyjny)
```python
# import requests

# try:
#     response = requests.get("https://www.google.com")
#     print(f"Status: {response.status_code}")
# except Exception as e:
#     print(f"Błąd: {e}")
```
