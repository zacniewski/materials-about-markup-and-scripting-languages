from configparser import ConfigParser

data = {
    'blog_url': 'https://mmazurek.dev',
    'blog_rate': 10,
    'blog_max_rate': 10,
    'blog_keywords': ['programowanie', 'python', 'proces', 'tworzenia', 'programowania']
}

config = ConfigParser()
config.add_section('blog')

for key, val in data.items():
    if not isinstance(val, list):
        config.set('blog', key, str(val))
    else:
        config.add_section(key)
        config.set(key, key, ','.join(val))

with open("inifile.ini", "w") as f:
    config.write(f)