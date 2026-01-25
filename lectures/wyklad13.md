# Wykład 13: Formaty XML, CSV i YAML

## 1. CSV (Comma Separated Values)
Format tekstowy służący do przechowywania danych tabelarycznych. Każdy wiersz to rekord, a kolumny oddzielone są separatorem (przecinek, średnik).

### Przykład:
```csv
ID,Imię,Nazwisko,Email
1,Jan,Kowalski,jan@example.com
2,Anna,Nowak,anna@example.com
```

## 2. XML (eXtensible Markup Language)
Język znaczników zaprojektowany do przechowywania i przesyłania danych. Skupia się na tym, czym są dane, a nie jak wyglądają.

### Przykład:
```xml
<pracownicy>
    <pracownik id="1">
        <imie>Jan</imie>
        <nazwisko>Kowalski</nazwisko>
    </pracownik>
</pracownicy>
```

## 3. YAML (YAML Ain't Markup Language)
Format czytelny dla człowieka, często używany w plikach konfiguracyjnych (np. Docker, Kubernetes). Opiera się na wcięciach.

### Przykład:
```yaml
server:
  port: 8080
  host: localhost
database:
  enabled: true
  adapters:
    - sqlite
    - postgres
```

## 4. Porównanie formatów
| Format | Czytelność dla ludzi | Struktura | Główne zastosowanie |
|--------|----------------------|-----------|---------------------|
| **CSV** | Średnia | Płaska (tabela) | Bazy danych, arkusze kalkulacyjne |
| **XML** | Niska/Średnia | Drzewiasta | Konfiguracja, SOAP, starsze systemy |
| **JSON** | Wysoka | Drzewiasta | Web API, konfiguracja |
| **YAML** | Bardzo wysoka | Drzewiasta | Konfiguracja, CI/CD |
