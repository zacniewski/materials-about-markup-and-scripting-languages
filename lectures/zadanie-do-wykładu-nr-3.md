# Zadania do Wykładu nr 3

Poniżej znajdują się zadania sprawdzające wiedzę z Wykładu 3, dotyczące struktur kontrolnych w Pythonie (instrukcje warunkowe oraz pętle).

**Uwaga:** Do każdego zadania należy dołączyć zrzut ekranu przedstawiający kod źródłowy na swoim komputerze oraz wynik działania skryptu w terminalu.

## Zadanie 1: Prosta instrukcja warunkowa

Poproś użytkownika o podanie liczby całkowitej. Napisz program, który:

- Wyświetli komunikat "Liczba jest dodatnia", jeśli liczba jest większa od 0.
- Wyświetli komunikat "Liczba jest ujemna", jeśli liczba jest mniejsza od 0.
- Wyświetli komunikat "Liczba to zero", jeśli liczba jest równa 0.

**Podpowiedź:** Użyj konstrukcji `if`, `elif` oraz `else`. Pamiętaj o zamianie wyniku funkcji `input()` na typ `int`.

## Zadanie 2: Sprawdzanie parzystości (if-else)

Napisz program, który pobierze od użytkownika liczbę i sprawdzi, czy jest ona parzysta, czy nieparzysta. Wyświetl odpowiedni komunikat.

**Podpowiedź:** Wykorzystaj operator modulo `%`. Liczba parzysta to taka, dla której `liczba % 2 == 0`.

## Zadanie 3: Menu z wykorzystaniem match-case

Stwórz prosty program, który prosi o podanie numeru dnia tygodnia (1-7) i wyświetla jego nazwę (np. 1 -> Poniedziałek). Jeśli użytkownik poda liczbę spoza zakresu, wyświetl komunikat "Niepoprawny numer dnia".

**Podpowiedź:** Wykorzystaj nową instrukcję `match-case` wprowadzoną w Pythonie 3.10. Jako wzorzec domyślny (`case _`) ustaw komunikat o błędzie.

## Zadanie 4: Odliczanie (pętla while)

Napisz program, który wypisuje liczby od 10 do 1 w kolejności malejącej, a na końcu wyświetla komunikat "Start!".

**Podpowiedź:** Użyj pętli `while` oraz operatora dekrementacji `-=`.

## Zadanie 5: Sumowanie liczb (pętla for)

Napisz skrypt, który obliczy sumę wszystkich liczb z zakresu od 1 do 50 (włącznie) i wyświetli wynik.

**Podpowiedź:** Wykorzystaj pętlę `for` oraz funkcję `range(1, 51)`. Przed pętlą zdefiniuj zmienną `suma = 0`.

## Zadanie 6: Szukanie litery w słowie

Poproś użytkownika o wpisanie dowolnego słowa. Następnie użyj pętli, aby policzyć, ile razy w tym słowie występuje mała litera "a". Wyświetl wynik.

**Podpowiedź:** Możesz użyć pętli `for litera in slowo:` oraz instrukcji `if litera == "a":`. Pamiętaj o zmiennej liczniku, którą będziesz zwiększać o 1 przy każdym znalezieniu litery.
