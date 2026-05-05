# Zadania do Wykładu 10: Flask – Tworzenie aplikacji WWW

Poniżej znajduje się 10 zadań sprawdzających wiedzę z zakresu frameworka Flask oraz silnika szablonów Jinja2. Zadania należy wykonywać, rozbudowując poniższą strukturę projektu. Do każdego zadania dołączono małą podpowiedź.

### Bazowa struktura projektu

Zaleca się stworzenie folderu dla projektu, a w nim pliku `app.py` oraz podfolderu `templates/`.

**Plik `app.py`:**
```python
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", tytul="Strona Główna")

if __name__ == "__main__":
    app.run(debug=True)
```

**Plik `templates/base.html`:**
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}{% endblock %} - Moja Aplikacja</title>
</head>
<body>
    <nav>
        <a href="{{ url_for('home') }}">Start</a>
    </nav>
    <hr>
    {% block content %}{% endblock %}
</body>
</html>
```

**Plik `templates/index.html`:**
```html
{% extends "base.html" %}

{% block title %}{{ tytul }}{% endblock %}

{% block content %}
    <h1>Witaj w aplikacji Flask!</h1>
{% endblock %}
```

______________________________________________________________________

### Zadania

**Zadanie 1: Nowa trasa (Routing)**
Dodaj nową trasę (route) o adresie `/o-nas`, która po wejściu wyświetli prosty napis "To jest strona o nas".

> **Podpowiedź:** Użyj dekoratora `@app.route("/o-nas")` i zdefiniuj pod nim funkcję zwracającą tekst.

**Zadanie 2: Parametry w adresie URL**
Stwórz trasę `/powitanie/<imie>`, która wyświetli spersonalizowane powitanie, np. "Witaj, [imie]!".

> **Podpowiedź:** Pamiętaj o przekazaniu zmiennej `imie` jako argumentu do funkcji widoku.

**Zadanie 3: Renderowanie szablonu z danymi**
Zmodyfikuj trasę `/o-nas` tak, aby zamiast czystego tekstu renderowała szablon `o_nas.html`. Przekaż do szablonu zmienną `opis` z dowolną treścią.

> **Podpowiedź:** Użyj funkcji `render_template("o_nas.html", opis=twoja_zmienna)`.

**Zadanie 4: Dziedziczenie szablonów**
Stwórz plik `templates/o_nas.html`. Spraw, aby dziedziczył on z `base.html` i wyświetlał przekazaną zmienną `opis` w bloku `content`.

> **Podpowiedź:** Zacznij plik od `{% extends "base.html" %}` i zdefiniuj `{% block content %}`.

**Zadanie 5: Wykorzystanie filtrów Jinja2**
W szablonie `index.html` wyświetl zmienną `tytul` używając filtra, który zamieni wszystkie litery na wielkie.

> **Podpowiedź:** Składnia filtra to `{{ zmienna | nazwa_filtra }}`. Użyj filtra `upper`.

**Zadanie 6: Pętla w szablonie**
Do trasy głównej (`/`) przekaż listę trzech dowolnych owoców. W szablonie `index.html` wyświetl je w formie listy punktowanej (`<ul>`).

> **Podpowiedź:** Użyj instrukcji `{% for owoc in owoce %}` wewnątrz pliku HTML.

**Zadanie 7: Instrukcja warunkowa**
Do trasy `/powitanie/<imie>` dodaj logikę: jeśli imię to "Admin", wyświetl "Witaj, panie administratorze!", w przeciwnym razie wyświetl standardowe powitanie. Wykonaj to bezpośrednio w szablonie HTML.

> **Podpowiedź:** Wykorzystaj konstrukcję `{% if imie == "Admin" %} ... {% else %} ... {% endif %}`.

**Zadanie 8: Obsługa formularza (GET)**
Stwórz trasę `/szukaj` oraz szablon z formularzem zawierającym jedno pole tekstowe o nazwie `query`. Po wysłaniu formularza (metodą GET), strona powinna wyświetlić wpisaną frazę.

> **Podpowiedź:** Wartość z pola pobierzesz za pomocą `request.args.get('query')`.

**Zadanie 9: Obsługa formularza (POST)**
Stwórz trasę `/kontakt`, która obsługuje zarówno GET (wyświetla formularz), jak i POST (odbiera dane). Formularz powinien zawierać pole `email`. Po wysłaniu, wyświetl komunikat "Dziękujemy za kontakt: [email]".

> **Podpowiedź:** Ustaw `methods=["GET", "POST"]` w dekoratorze i sprawdź `request.method == "POST"`. Dane z POST odbierasz przez `request.form.get('email')`.

**Zadanie 10: Przekierowania i url_for**
Dodaj trasę `/stara-strona`, która po wejściu automatycznie przekieruje użytkownika na stronę główną.

> **Podpowiedź:** Użyj `return redirect(url_for('home'))`. Pamiętaj o zaimportowaniu tych funkcji z modułu `flask`.
