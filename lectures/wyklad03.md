# Wykład 3: Struktury kontrolne

## 1. Instrukcje warunkowe
Instrukcja `if` pozwala na wykonywanie kodu tylko wtedy, gdy spełniony jest określony warunek.

```python
wiek = 18

if wiek >= 18:
    print("Jesteś pełnoletni")
elif wiek > 0:
    print("Jesteś niepełnoletni")
else:
    print("Błędny wiek")
```

## 2. Pętla `while`
Wykonuje się dopóki warunek jest prawdziwy.

```python
i = 0
while i < 5:
    print(i)
    i += 1
```

## 3. Pętla `for`
Służy do iteracji po sekwencjach (listach, ciągach znaków, zakresach).

```python
# Iteracja po zakresie
for x in range(5):
    print(x)

# Iteracja po stringu
for litera in "Python":
    print(litera)
```

## 4. Instrukcje `break` i `continue`
- `break`: Natychmiście przerywa działanie pętli.
- `continue`: Pomija resztę bieżącej iteracji i przechodzi do następnej.

## 5. Porównanie pętli
| Pętla | Zastosowanie |
|-------|--------------|
| `for` | Gdy znamy liczbę iteracji lub iterujemy po zbiorze |
| `while` | Gdy pętla ma trwać do spełnienia warunku |
