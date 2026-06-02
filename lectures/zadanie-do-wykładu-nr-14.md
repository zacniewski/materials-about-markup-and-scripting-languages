# Zadania do Wykładu 14: Zarządzanie pakietami i biblioteki zewnętrzne

Poniżej znajduje się 6 zadań sprawdzających umiejętność zarządzania pakietami w ekosystemach Python (pip) i JavaScript (npm) oraz wykorzystania podstawowych bibliotek zewnętrznych.

______________________________________________________________________

### Zadanie 1: Tworzenie i izolacja środowiska (Python)

Przygotuj nowe środowisko wirtualne o nazwie `.moje_env`, aktywuj je, a następnie zainstaluj w nim bibliotekę `requests`. Po instalacji wygeneruj plik `requirements.txt`.

> **Podpowiedź:** Użyj komendy `python -m venv .moje_env` do stworzenia środowiska, a `pip freeze > requirements.txt` do zapisania listy pakietów.

### Zadanie 2: Zapytanie GET do API (Python)

Korzystając z biblioteki `requests`, napisz skrypt, który pobierze dane z publicznego API: `https://jsonplaceholder.typicode.com/posts/1` i wypisze na ekranie tytuł (`title`) tego posta.

> **Podpowiedź:** Po wykonaniu `requests.get()`, użyj metody `.json()`, aby zamienić odpowiedź na słownik Pythona, a następnie odwołaj się do klucza `['title']`.

### Zadanie 3: Eksport i instalacja zależności (Python)

Mając gotowy plik `requirements.txt`, spróbuj stworzyć drugie, osobne środowisko wirtualne i zainstaluj w nim wszystkie zależności z tego pliku za pomocą jednej komendy.

> **Podpowiedź:** Użyj komendy `pip install -r requirements.txt` po aktywacji nowego środowiska.

### Zadanie 4: Inicjalizacja projektu i instalacja pakietów (JavaScript)

Stwórz nowy folder dla projektu Node.js, zainicjalizuj w nim plik `package.json` (zaakceptuj domyślne ustawienia), a następnie zainstaluj bibliotekę `axios`. Sprawdź, czy biblioteka pojawiła się w sekcji `dependencies`.

> **Podpowiedź:** Użyj `npm init -y` do szybkiej inicjalizacji oraz `npm install axios`.

### Zadanie 5: Skrypty w package.json (JavaScript)

W pliku `package.json` dodaj własny skrypt o nazwie `"witaj"`, który po uruchomieniu wypisze w konsoli tekst "Automatyzacja z NPM!". Uruchom ten skrypt za pomocą menedżera pakietów.

> **Podpowiedź:** Edytuj sekcję `"scripts"` w pliku JSON, a skrypt uruchom komendą `npm run witaj`.

### Zadanie 6: Pobieranie danych za pomocą Axios (JavaScript)

Napisz prosty skrypt w Node.js (np. `app.js`), który użyje biblioteki `axios` do pobrania danych o użytkowniku z adresu `https://jsonplaceholder.typicode.com/users/2` i wypisze jego nazwę użytkownika (`username`) w konsoli.

> **Podpowiedź:** Pamiętaj o zaimportowaniu biblioteki przez `const axios = require('axios');`. Dane z odpowiedzi znajdziesz w polu `response.data`.
