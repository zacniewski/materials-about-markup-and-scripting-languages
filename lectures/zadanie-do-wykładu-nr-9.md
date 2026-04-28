# Zadania do Wykładu 9: Podstawy CSS

Poniżej znajduje się 15 zadań sprawdzających wiedzę z zakresu kaskadowych arkuszy stylów (CSS). Wszystkie zadania należy wykonać, bazując na poniższym kodzie HTML. Do każdego zadania dołączono małą podpowiedź.

### Bazowy HTML dla zadań

Zapisz poniższy kod jako plik `index.html`. Możesz do niego dopisywać klasy, identyfikatory lub style w zależności od treści zadania.

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadania CSS - Wykład 9</title>
</head>
<body>

    <header id="main-header">
        <h1 id="main-title">Moja Strona Treningowa</h1>
        <nav>
            <ul>
                <li><a href="#">Start</a></li>
                <li><a href="#">O nas</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="content">
            <h2>O kaskadowych arkuszach stylów</h2>
            <p>CSS pozwala nam oddzielić treść od wyglądu. To bardzo potężne narzędzie.</p>
            <p class="highlight">Ten tekst jest szczególnie ważny!</p>

            <div class="box">To jest przykładowy boks do ćwiczeń modelu pudełkowego.</div>
        </section>

        <section class="gallery">
            <div class="item">Element 1</div>
            <div class="item">Element 2</div>
            <div class="item">Element 3</div>
        </section>

        <div class="flex-center">
            <button>Kliknij mnie</button>
        </div>
    </main>

    <footer>
        <p>&copy; 2026 Języki znaczników i skryptowe</p>
    </footer>

</body>
</html>
```

______________________________________________________________________

### Zadania

**Zadanie 1: Metody dołączania stylów**
Dopisz w sekcji `<head>` dokumentu HTML znacznik `<style>` (wewnętrzny arkusz stylów) i ustaw w nim kolor tła strony (`body`) na jasnoszary (`#f4f4f4`).

> **Podpowiedź:** Użyj znacznika `<style> body { background-color: #f4f4f4; } </style>`.

**Zadanie 2: Specyficzność selektorów**
Napisz trzy różne reguły CSS zmieniające kolor tekstu dla głównego tytułu (używając: tagu `h1`, klasy oraz identyfikatora `#main-title`). Sprawdź w przeglądarce, który kolor ostatecznie zostanie zastosowany.

> **Podpowiedź:** ID (`#`) zawsze wygrywa z klasą (`.`), a klasa z samym tagiem. Spróbuj nadać różne kolory w tej samej sekcji `<style>`.

**Zadanie 3: Kolory i typografia**
Dla elementu `<h1>` ustaw kolor czcionki na ciemnozielony (`#2d5a27`), a dla akapitu o klasie `.highlight` ustaw kolor tła na żółty (`yellow`).

> **Podpowiedź:** Wykorzystaj selektory `h1` oraz `.highlight`. Możesz użyć zapisu HEX lub nazwy koloru.

**Zadanie 4: Model Pudełkowy (Box Model)**
Dla klasy `.box` stwórz regułę CSS, która nadaje jej obramowanie (`border`), 20px odstępu wewnętrznego (`padding`) i 10px odstępu zewnętrznego (`margin`). Sprawdź, jak te właściwości wpływają na pozycję tekstu w pudełku.

> **Podpowiedź:** `padding` to przestrzeń wewnątrz obramowania, a `margin` to przestrzeń na zewnątrz. Skorzystaj z `border: 2px solid #000;`.

**Zadanie 5: Border-box i szerokość**
Dla klasy `.box` ustaw szerokość na `300px`, obramowanie na `10px solid black` oraz `box-sizing: border-box`. Zaobserwuj, jak zmienia się szerokość elementu po usunięciu właściwości `box-sizing`.

> **Podpowiedź:** `border-box` sprawia, że padding i border mieszczą się w zadeklarowanej szerokości (`width`).

**Zadanie 6: Pseudoklasy**
Napisz regułę CSS, która sprawi, że wszystkie linki (`<a>`) zmienią kolor na czerwony i otrzymają podkreślenie tylko w momencie, gdy użytkownik najedzie na nie kursorem myszy.

> **Podpowiedź:** Wykorzystaj pseudoklasę `:hover`.

**Zadanie 7: Jednostki miar**
Zmień rozmiar czcionki w `main p` na `1.2rem`, a dla nagłówka `h2` ustaw margines dolny na `2em`.

> **Podpowiedź:** Jednostka `rem` odnosi się do elementu głównego (root), a `em` do bieżącej wielkości czcionki elementu.

**Zadanie 8: Flexbox - centrowanie**
Stwórz kontener o klasie `.flex-center`, który będzie centrował znajdujący się w nim tekst (lub inny element) zarówno w pionie, jak i w poziomie.

> **Podpowiedź:** Użyj `display: flex`, `justify-content: center` oraz `align-items: center`.

**Zadanie 9: CSS Grid - galeria**
Ostyluj sekcję `.gallery` tak, aby jej elementy (`.item`) układały się w trzy kolumny o równej szerokości. Dodaj odstęp między elementami wynoszący `20px`.

> **Podpowiedź:** Użyj `display: grid`, `grid-template-columns: repeat(3, 1fr)` oraz `gap: 20px`.

**Zadanie 10: Media Queries (RWD)**
Napisz regułę Media Query, która zmieni kolor tła sekcji `.content` na jasnoniebieski (`lightblue`), ale tylko dla urządzeń, których szerokość ekranu nie przekracza 600 pikseli.

> **Podpowiedź:** Użyj składni `@media screen and (max-width: 600px) { .content { background-color: lightblue; } }`.
> <br>

**Zadanie 11: Zaokrąglone rogi (Border-radius)**
Dodaj regułę dla klasy `.box`, która zaokrągli jej rogi o `15px`. Dodatkowo spraw, aby przycisk wewnątrz `.flex-center` miał całkowicie zaokrąglone boki (kształt pigułki).

> **Podpowiedź:** Użyj właściwości `border-radius`. Dla przycisku możesz ustawić dużą wartość, np. `50px`.

**Zadanie 12: Cienie (Box-shadow i Text-shadow)**
Dodaj cień do głównego tytułu (`#main-title`) oraz delikatny cień wokół elementu `.box`.

> **Podpowiedź:** Użyj `text-shadow: 2px 2px 5px rgba(0,0,0,0.3);` dla tekstu oraz `box-shadow` dla pudełka.

**Zadanie 13: Przejścia i animacje (Transitions)**
Spraw, aby zmiana koloru linku (`<a>`) po najechaniu myszką (zadanie 6) nie była natychmiastowa, lecz trwała pół sekundy.

> **Podpowiedź:** Dodaj `transition: color 0.5s ease;` do selektora `a` (nie do `:hover`).

**Zadanie 14: Stylizacja list**
Zmień wygląd listy w nawigacji (`nav ul`). Usuń domyślne kropki (wypunktowanie) i ustaw marginesy tak, aby elementy były od siebie oddalone.

> **Podpowiedź:** Użyj `list-style-type: none;` dla listy oraz `margin` dla elementów `li`.

**Zadanie 15: Tła i gradienty**
Zastąp jednolity kolor tła strony (z zadania 1) liniowym gradientem przechodzącym z koloru białego do jasnoszarego.

> **Podpowiedź:** Użyj `background: linear-gradient(to bottom, #ffffff, #f4f4f4);` w selektorze `body`.
