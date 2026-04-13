# Laboratorium 9: Stylowanie stron w CSS

## Cel zajęć

Wykorzystanie CSS do zmiany wyglądu strony HTML.

## Teoria w pigułce

- Specyficzność: `#id` > `.klasa` > `tag` > `*`.
- Box model: element = content + padding + border + margin.
- RWD: Media Queries pozwalają dostosować styl do szerokości ekranu.

```mermaid
graph TD
  A[Element] --> B[Content]
  B --> C[Padding]
  C --> D[Border]
  D --> E[Margin]
```

## Zadania

*Poniższe zadania są zadaniami sugerowanymi i mogą ulec modyfikacji przez prowadzącego zajęcia.*

1. Stwórz plik `style.css` i podłącz go do swojej strony `index.html` z poprzednich zajęć.
1. Zmień czcionkę na całej stronie na bezszeryfową (np. `Arial`).
1. Wyśrodkuj nagłówek `<h1>` i zmień jego kolor na ciemnozielony.
1. Ustaw kolor tła strony na jasnoszary.
1. Użyj klasy (`class`), aby nadać specyficzny styl wybranemu akapitowi (np. ramka, wewnętrzny margines `padding`, kolor tekstu).
1. Wykorzystaj model pudełkowy: nadaj elementom listy `<li>` marginesy zewnętrzne i obramowanie.
1. Stwórz prosty przycisk przy użyciu tagu `<a>` i ostyluj go tak, aby zmieniał kolor po najechaniu myszką (`:hover`).
1. Zaimplementuj prosty układ strony typu "Two-column layout" przy użyciu Flexboxa (np. boczny pasek nawigacyjny i główna treść).
1. Dodaj reguły Media Queries, aby na urządzeniach mobilnych (szerokość poniżej 600px) tło strony zmieniało kolor, a rozmiar czcionki był mniejszy.
1. Użyj CSS Grid do stworzenia galerii zdjęć (min. 4 zdjęcia w układzie kafelkowym).
