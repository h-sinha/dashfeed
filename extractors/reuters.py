import requests
from bs4 import BeautifulSoup
from inserttodatabase import push_to_database
import urllib.request
import os
from time import time
import re

url = 'https://www.reuters.com'
response = requests.get(url)
res = BeautifulSoup(response.content, 'html.parser')
links = res.find_all('div', class_='story-content')
for i in links:
    try:
        curlink = i.find('a')
        url = 'http://www.reuters.com' + curlink['href']
        newresponse = requests.get(url)
        soup = BeautifulSoup(newresponse.content, 'html.parser')
        headline = soup.find(
            'h1', attrs={
                'class': 'headline_2zdFM'}).get_text().strip()
        subtitle = soup.find('p').get_text().strip()
        para = soup.findAll('p')
        story = ""
        save = ""
        image = (soup.find_all('div', class_='container_1Z7A0'))
        aux = soup.find('div', class_='channel_4KD-f')
        tags = aux.find('a').get_text().strip()
        tags = re.sub(' .*', '', tags)
        tags = tags.lower()
        for i in image:
            temp2 = i.find('img')
            cur = 'https:' + temp2['src']
            cur = cur.replace('w=20', 'w=640')
            curtime = str(time())
            fullfilename = os.path.join('../site/static/', curtime + ".jpg")
            urllib.request.urlretrieve(cur, fullfilename)
            save = save + str(curtime + ".jpg")
            save = save + ","
        for x in para:
            if x.string is not None:
                story = story + "<p> " + x.get_text().strip() + " </p>"
        if tags == 'cyber':
            tags = 'technology'
        elif tags == 'commodities' or tags == 'deals':
            tags = 'business'
        elif tags == 'health':
            tags = 'lifestyle'
        if save == "" or story == "":
            raise Exception('No image')
        push_to_database(headline, subtitle, story, 1, url, tags, save)
        print('reuters')
    except BaseException:
        pass
