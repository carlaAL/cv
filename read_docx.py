import zipfile
import xml.etree.ElementTree as ET
import sys

def get_docx_text(path):
    with zipfile.ZipFile(path) as zf:
        xml_content = zf.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    paragraphs = []
    for p in tree.findall('.//w:p', namespaces):
        texts = [node.text for node in p.findall('.//w:t', namespaces) if node.text]
        if texts:
            paragraphs.append(''.join(texts))
    return '\n'.join(paragraphs)

with open('cv_data.txt', 'w', encoding='utf-8') as f:
    f.write(get_docx_text(sys.argv[1]))
