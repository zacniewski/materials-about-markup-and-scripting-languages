# Zadania do Wykładu 12: Format JSON

Poniżej znajduje się zestaw zadań sprawdzających wiedzę na temat formatu JSON, jego składni oraz obsługi w językach Python i JavaScript.
Dodaj zrzut ekranu lub plik z odpowiednimi wynikami!

______________________________________________________________________

### Zadania

**Zadanie 1: Poprawność składni**
Spójrz na poniższy fragment tekstu i wskaż 3 błędy, które sprawiają, że nie jest to poprawny format JSON:

```json
{
    imie: "Anna",
    "wiek": 25,
    "miasto": 'Kraków',
    "aktywny": True
}
```

> **Podpowiedź:** Zwróć uwagę na cudzysłowy wokół kluczy, rodzaj użytych cudzysłowów w wartościach tekstowych oraz wielkość liter w wartościach logicznych.

**Zadanie 2: Typy danych**
Stwórz obiekt JSON reprezentujący produkt w sklepie. Musi on zawierać co najmniej jeden przykład każdego z wymienionych typów danych: `String`, `Number`, `Boolean`, `Array` (tablica), `Object` (zagnieżdżony obiekt) oraz `Null`.

> **Podpowiedź:** Pamiętaj, że tablice tworzymy w nawiasach `[]`, a obiekty w `{}`.

**Zadanie 3: Serializacja w JavaScript**
Masz dany obiekt w JavaScript: `const ustawienia = { motyw: "ciemny", powiadomienia: true, poziomGlosnosci: 80 };`. Zamień ten obiekt na ciąg znaków (string) w formacie JSON, tak aby był czytelny dla człowieka (z wcięciami).

> **Podpowiedź:** Użyj metody `JSON.stringify()` z dodatkowymi parametrami formatowania.

**Zadanie 4: Parsowanie w JavaScript**
Otrzymałeś z API następujący tekst: `'{"status": "success", "data": {"id": 101, "points": [10, 20, 30]}}'`. Napisz kod w JS, który wyciągnie z tego tekstu drugą wartość z tablicy `points`.

> **Podpowiedź:** Najpierw użyj `JSON.parse()`, aby zamienić tekst na obiekt, a potem odwołaj się do pól obiektu.

**Zadanie 5: Zapis do pliku w Pythonie**
Napisz fragment kodu w Pythonie, który zapisze słownik `osoba = {"imie": "Jan", "hobby": ["bieganie", "szachy"]}` do pliku o nazwie `user.json`. Pamiętaj o obsłudze polskich znaków.

> **Podpowiedź:** Skorzystaj z funkcji `json.dump()` oraz parametru `ensure_ascii=False` przy otwieraniu pliku z kodowaniem `utf-8`.

**Zadanie 6: Odczyt z pliku w Pythonie**
Napisz kod w Pythonie, który wczyta dane z pliku `user.json` (stworzonego w poprzednim zadaniu) i wypisze na ekranie tylko pierwsze hobby z listy.

> **Podpowiedź:** Użyj funkcji `json.load()` po otwarciu pliku w trybie odczytu.

**Zadanie 7: JSON vs XML**
Wymień dwie główne zalety formatu JSON nad formatem XML w kontekście aplikacji webowych.

> **Podpowiedź:** Przejrzyj tabelę porównawczą w sekcji 2 materiałów do wykładu.

**Zadanie 8: Walidacja danych (Python)**
Napisz program w Pythonie, który spróbuje sparsować podany przez użytkownika tekst (używając `input()`) jako JSON. Jeśli tekst jest niepoprawny, program powinien wypisać komunikat: "To nie jest poprawny format JSON".

> **Podpowiedź:** Wykorzystaj blok `try-except` i przechwyć błąd `json.JSONDecodeError`.

**Zadanie 9: Narzędzia CLI**
Jakiej komendy w terminalu użyjesz (korzystając z Pythona), aby w szybki sposób "ładnie" wyświetlić zawartość pliku `dane.json`, który jest zapisany w jednej linii?

> **Podpowiedź:** Wykorzystaj moduł systemowy Pythona: `python -m json.tool ...`.

**Zadanie 10: Praca z API (Python)**
Korzystając z biblioteki `requests`, napisz kod, który pobierze dane z adresu `https://jsonplaceholder.typicode.com/todos/1` i wypisze wartość pola `title`.

> **Podpowiedź:** Użyj metody `.json()` na obiekcie odpowiedzi, aby automatycznie zamienić treść na słownik Pythona.
