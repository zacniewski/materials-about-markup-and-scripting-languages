# Wykład 15: Manipulacja danymi w Pythonie (część 2)

## 1. Praca z XML
Do obsługi XML w Pythonie najczęściej używa się modułu `xml.etree.ElementTree`.

### Parsowanie XML:
```python
import xml.etree.ElementTree as ET

tree = ET.parse('dane.xml')
root = tree.getroot()

for pracownik in root.findall('pracownik'):
    imie = pracownik.find('imie').text
    print(imie)
```

## 2. Praca z YAML
Obsługa YAML wymaga zewnętrznej biblioteki `PyYAML`.

### Odczyt YAML:
```python
import yaml # Wymaga pip install pyyaml

with open('config.yaml', 'r') as f:
    config = yaml.safe_load(f)
    print(config['server']['port'])
```

## 3. Schemat przetwarzania danych
Zazwyczaj proces wygląda następująco:
```mermaid
graph LR
    A[Plik wejściowy] --> B[Parser Python]
    B --> C[Obiekty Python - dict/list]
    C --> D[Przetwarzanie danych]
    D --> E[Generator wyjściowy]
    E --> F[Plik wynikowy]
```

## 4. Wybór formatu
- Jeśli masz dane tabelaryczne -> **CSV**.
- Jeśli potrzebujesz prostego API -> **JSON**.
- Jeśli potrzebujesz czytelnej konfiguracji -> **YAML**.
- Jeśli musisz wspierać stare systemy korporacyjne -> **XML**.
