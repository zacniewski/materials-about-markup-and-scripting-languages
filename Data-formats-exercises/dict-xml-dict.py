from xml.dom.minidom import parseString
from dicttoxml import dicttoxml

data = {
    'blog_url': 'https://mmazurek.dev',
    'blog_rate': 10,
    'blog_max_rate': 10,
    'blog_keywords': ['programowanie', 'python', 'proces', 'tworzenia', 'programowania']
}
dict_as_xml = dicttoxml(data, custom_root='blog')
print(f"{dict_as_xml=}")

"""
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

"""

xml = parseString(dict_as_xml)

xml_as_dict = {}

blog = xml.firstChild

for item in blog.childNodes[0:-1]:
    xml_as_dict[item.tagName] = item.firstChild.nodeValue

last_key = blog.childNodes[-1].tagName
xml_as_dict[last_key] = []

for item in blog.childNodes[-1].childNodes:
    xml_as_dict[last_key].append(item.firstChild.nodeValue)

print(xml_as_dict)

"""
{'blog_url': 'https://mmazurek.dev', 'blog_rate': '10', 'blog_max_rate': '10', 'blog_keywords': ['programowanie', 'python', 'proces', 'tworzenia', 'programowania']}
"""