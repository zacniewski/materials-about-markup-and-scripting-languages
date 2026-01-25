# Laboratorium 1: Środowisko pracy i podstawy Pythona

## 1. Wirtualne środowiska w Pythonie (`venv`)
Wirtualne środowisko to izolowany folder, który zawiera własną kopię interpretera Pythona oraz bibliotek. Dzięki temu projekty nie kolidują ze sobą wersjami pakietów.

### Tworzenie wirtualnego środowiska:
Otwórz terminal w folderze projektu i wpisz:
```bash
# Windows
python -m venv venv

# Linux / macOS
python3 -m venv venv
```

### Aktywacja środowiska:
```bash
# Windows (PowerShell)
.\venv\Scripts\Activate.ps1

# Linux / macOS
source venv/bin/activate
```
Po aktywacji w terminalu zobaczysz przedrostek `(venv)`.

### Wyłączanie środowiska:
```bash
deactivate
```

---

## 2. Menadżer pakietów `pip`
`pip` służy do instalowania bibliotek zewnętrznych.

- **Instalacja biblioteki:** `pip install nazwa_pakietu`
- **Lista zainstalowanych:** `pip list`
- **Zapisywanie zależności do pliku:** `pip freeze > requirements.txt`
- **Instalacja z pliku:** `pip install -r requirements.txt`

---

## 3. Zadania do wykonania
1. Utwórz wirtualne środowisko w nowym folderze.
2. Aktywuj je i zainstaluj bibliotekę `requests` (`pip install requests`).
3. Stwórz plik `hello.py`, który wypisze w konsoli "Witaj w Pythonie".
4. Uruchom skrypt komendą `python hello.py`.
5. Wygeneruj plik `requirements.txt`.
6. Sprawdź wersję zainstalowanego Pythona i biblioteki `requests` za pomocą odpowiednich poleceń w terminalu.
7. Zdezaktywuj środowisko wirtualne i spróbuj uruchomić skrypt `hello.py` ponownie, obserwując czy coś się zmieniło.
