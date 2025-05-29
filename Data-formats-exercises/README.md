## "XML i inne formaty wymiany danych"


### 1. JSON
```python
data = {
    'blog_details': {
        'blog_url': 'https://mmazurek.dev',
        'blog_rate': 10,
        'blog_max_rate': 10,
        'blog_keywords': ['programowanie', 'python', 'proces', 'tworzenia', 'programowania'],
        'additional_info': [None, True, {
            "type": ['intresting', 'type']
        }]
    }
}
```

### 2. XML

```xml
<?xml version="1.0" ?>
<blog>
    <blog_url type="str">https://mmazurek.dev</blog_url>
    <blog_rate type="int">10</blog_rate>
    <blog_max_rate type="int">10</blog_max_rate>
    <blog_keywords type="list">
        <item type="str">programowanie</item>
        <item type="str">python</item>
        <item type="str">proces</item>
        <item type="str">tworzenia</item>
        <item type="str">programowania</item>
    </blog_keywords>
</blog>
```

### 3. YAML

```yaml
blog_details:
  additional_info:
  - null
  - true
  - type:
    - intresting
    - type
  blog_keywords:
  - programowanie
  - python
  - proces
  - tworzenia
  - programowania
  blog_max_rate: 10
  blog_rate: 10
  blog_url: https://mmazurek.dev
```

### 4. INI
```ini
[blog]
blog_url = https://mmazurek.dev
blog_rate = 10
blog_max_rate = 10

[blog_keywords]
blog_keywords = programowanie,python,proces,tworzenia,programowania
```