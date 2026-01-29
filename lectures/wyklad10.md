# Wykład 10: Flask – Tworzenie prostych aplikacji WWW

## 1. Co to jest Flask?
Flask to mikro-framework webowy dla Pythona. Jest lekki, elastyczny i łatwy w nauce. W przeciwieństwie do Django (który jest "pełnym" frameworkiem), Flask dostarcza tylko niezbędne minimum, a resztę funkcji (np. dostęp do bazy danych) dodaje się za pomocą rozszerzeń.

## 2. Podstawowe pojęcia
- **Routing:** Mapowanie adresów URL na funkcje Pythona (widoki).
- **Widok (View):** Funkcja zwracająca odpowiedź (tekst, HTML, JSON).
- **Szablony (Templates):** Pliki HTML z dynamicznymi polami.
- **Kontekst żądania:** Informacje o bieżącym zapytaniu od użytkownika.

## 3. Pierwsza aplikacja Flask
```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return "<h1>Strona główna</h1>"

@app.route("/witaj/<imie>")
def powitanie(imie):
    # Dynamiczny adres URL
    return f"Witaj, {imie}!"

if __name__ == "__main__":
    app.run(debug=True) # debug=True automatycznie odświeża serwer po zmianie kodu
```

## 4. Praca z szablonami Jinja2
Silnik Jinja2 pozwala na używanie logiki Pythona bezpośrednio w plikach HTML.

### Składnia Jinja2:
- `{{ zmienna }}`: Wstawienie wartości zmiennej.
- `{% if ... %}`: Instrukcja warunkowa.
- `{% for ... %}`: Pętla.

### Przykład:
```python
# app.py
@app.route("/produkty")
def lista_produktow():
    produkty = ["Chleb", "Mleko", "Jajka"]
    return render_template("produkty.html", items=produkty)
```

```html
<!-- templates/produkty.html -->
<h1>Lista zakupów:</h1>
<ul>
    {% for p in items %}
        <li>{{ p }}</li>
    {% else %}
        <li>Brak produktów na liście.</li>
    {% endfor %}
</ul>
```

## 5. Obsługa formularzy i metod HTTP
Domyślnie routing obsługuje tylko metodę **GET**. Aby przyjąć dane z formularza, musimy dodać metodę **POST**.

```python
from flask import request

@app.route("/kontakt", methods=["GET", "POST"])
def kontakt():
    if request.method == "POST":
        # Pobieranie danych z formularza
        email = request.form.get("email")
        wiadomosc = request.form.get("message")
        return f"Wiadomość od {email} została wysłana!"
    
    return render_template("kontakt.html")
```
