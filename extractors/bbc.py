import requests
from bs4 import BeautifulSoup
from inserttodatabase import push_to_database
import urllib.request
import os
from time import time
import re

url = 'http://www.bbc.com/news'
response = requests.get(url)
ret = BeautifulSoup(response.content, 'html.parser')
links = ret.find_all(
    'a',
    class_='gs-c-promo-heading nw-o-link-split__anchor gs-o-faux-block-link__overlay-link gel-pica-bold')
for i in links:
    try:
        url = 'http://www.bbc.com' + i['href']
        newresponse = requests.get(url)
        soup = BeautifulSoup(newresponse.content, 'html.parser')
        headline = (
            soup.find(
                'h1',
                class_='story-body__h1')).get_text().strip()
        subtitle = (
            soup.find(
                class_='story-body__introduction')).get_text().strip()
        para = soup.find("div", "story-body__inner").find_all("p")
        story = ""
        save = ""
        image = (soup.find_all('img', class_='js-image-replace'))
        save = ""
        tags = re.sub('(.*):\/\/(.*)\/', '', url)
        tags = re.sub('-(.*)$', '', tags)
        for i in image:
            cur = i['src']
            curtime = str(time())
            fullfilename = os.path.join('../site/static', curtime + ".jpg")
            urllib.request.urlretrieve(cur, fullfilename)
            save = save + str(curtime + ".jpg")
            save = save + ","
        for x in para:
            if x.string is not None:
                story = story + "<p> " + x.get_text().strip() + " </p>"
        if save == "" or story == "":
            raise Exception('No image')
        if tags == 'us' or tags == 'uk' or tags == 'asia':
            tags = 'world'
        elif tags == 'science':
            tags = 'technology'
        elif tags == 'health':
            tags = 'lifestyle'
        if save == "" or story == "":
            raise Exception('No image')
        print('bbc')
        push_to_database(headline, subtitle, story, 1, url, tags, save)
    except BaseException:
        pass
