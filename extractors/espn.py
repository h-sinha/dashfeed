import requests
from bs4 import BeautifulSoup
from inserttodatabase import push_to_database
import urllib.request
import os
from time import time


url = 'https://www.espn.in'
response = requests.get(url)
re = BeautifulSoup(response.content, 'html.parser')
links = re.find_all('article', class_='contentItem')
for i in links:
    try:
        curitem = i.find('a')
        url = 'http://www.espn.in' + curitem['href']
        newresponse = requests.get(url)
        soup = BeautifulSoup(newresponse.content, 'html.parser')
        headline = soup.find(
            "header", "article-header").find("h1").get_text().strip()
        subtitle = soup.find(
            "div", "article-body").find("p").get_text().strip()
        para = soup.find("div", "article-body").find_all("p")
        story = ""
        save = ""
        image = (soup.find_all('div', class_='img-wrap'))
        for i in image:
            curitem = i.find('picture')
            curitem = curitem.find('source')
            cur = curitem['srcset']
            curtime = str(time())
            fullfilename = os.path.join('../site/static/', curtime + ".jpg")
            urllib.request.urlretrieve(cur, fullfilename)
            save = save + str(curtime + ".jpg")
            save = save + ","
        for x in para:
            if x.string is not None:
                story = story + "<p> " + x.get_text().strip() + " </p>"
        if save == "" or story == "":
            raise Exception('No image')
        print('espn')
        push_to_database(headline, subtitle, story, 1, url, 'sports', save)
    except BaseException:
        pass
