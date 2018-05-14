import requests
from bs4 import BeautifulSoup
from inserttodatabase import push_to_database
import urllib.request
import os
from time import time


url = 'https://www.huffingtonpost.in'
response = requests.get(url)
re = BeautifulSoup(response.content, 'html.parser')
links = re.find_all('a', class_='card__link bN')
for i in links:
    try:
        url = 'http://www.huffingtonpost.in' + i['href']
        newresponse = requests.get(url)
        soup = BeautifulSoup(newresponse.content, 'html.parser')
        headline = (
            soup.find(
                'h1',
                class_='headline__title')).get_text().strip()
        subtitle = (
            soup.find(
                'h2',
                class_='headline__subtitle')).get_text().strip()
        para = soup.find("div", "post-contents").find_all("p")
        story = ""
        save = ""
        tags = soup.find('span', class_='entry-eyebrow').get_text().strip()
        tags = tags.lower()
        image = (soup.find_all('img', class_='image__src'))
        for i in image:
            cur = i['src']
            curtime = str(time())
            fullfilename = os.path.join('../site/static/', curtime + ".jpg")
            urllib.request.urlretrieve(cur, fullfilename)
            save = save + str(curtime + ".jpg")
            save = save + ","
        for x in para:
            if x.string is not None:
                story = story + "<p> " + x.get_text().strip() + " </p>"
        if tags == 'news':
            tags = 'world'
        elif tags == 'tech':
            tags = 'technology'
        if save == "" or story == "":
            raise Exception('No image')
        print('huffingtonpost')
        push_to_database(headline, subtitle, story, 1, url, tags, save)
    except BaseException:
        pass
