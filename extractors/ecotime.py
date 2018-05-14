import requests
from bs4 import BeautifulSoup
from inserttodatabase import push_to_database
import urllib.request
import os
from time import time
import re

url = 'https://economictimes.indiatimes.com/'
response = requests.get(url)
ret = BeautifulSoup(response.content, 'html.parser')
aux = ret.find('div', class_='tabsContent')
links = aux.find_all('li')
for i in links:
    try:
        cur = i.find('a')
        url = 'https://economictimes.indiatimes.com' + cur['href']
        newresponse = requests.get(url)
        soup = BeautifulSoup(newresponse.content, 'html.parser')
        headline = (
            soup.find(
                'h1',
                class_='clearfix title')).get_text().strip()
        subtitle = (soup.find('figcaption')).get_text().strip()
        para = " " + soup.find("div",
                               class_='section1').get_text().strip() + " "
        save = ""
        story = ""
        story = soup.find("div", class_="Normal").get_text().strip()
        image = soup.find_all('figure')
        sub = soup.find_all('div', class_='flt navElement relNav')
        for i in sub:
            try:
                tags = i.find('a', class_='current').get_text().strip()
            except BaseException:
                pass
        tags = tags.lower()
        for i in image:
            temp = i.find('img')
            cur = temp['src']
            cur = cur.replace('width-300', 'width-600')
            curtime = str(time())
            fullfilename = os.path.join('../site/static', curtime + ".jpg")
            urllib.request.urlretrieve(cur, fullfilename)
            save = save + str(curtime + ".jpg")
            save = save + ","
        if save == "" or story == "":
            raise Exception('No image')
        if tags == 'tech' or tags == 'ites' or tags == 'hardware' or tags == 'software' or tags == 'internet' or tags == 'tech and gadgets':
            tags = 'technology'
        if tags == 'industry' or tags == 'markets' or tags == 'jobs' or tags == 'stocks' or tags == 'startups' or tags == 'energy' or tags == 'economy' or tags == 'company':
            tags = 'business'
        if tags == 'news' or tags == 'international':
            tags = 'world'
        print('economic times')
        push_to_database(headline, subtitle, para, 1, url, tags, save)
    except BaseException:
        pass
