from yaml import safe_load, safe_dump

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
dict_as_yml = safe_dump(data)
print(dict_as_yml)
