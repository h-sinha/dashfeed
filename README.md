# Dashfeed

A news aggregator made with python and Flask framework as a part of a Team Project.It extracts news from websites like BBC,Economic Times,ESPN,FoxNews,Huffington Post,Reuters.The portal has basic features like login,add comments,publish new article.

### Prerequisites

* Flask 1.0.1 or above.
* Python 2.7 and Python 3 (3.2, 3.4, 3.5, 3.6)

### Directory layout

Quiczar's directory structure looks as follows::

    quiczar/
    ├── extractors
    ├── design
    └── site
        ├── static
        └── templates

### Installation and Running

Run following commands on terminal
```
git clone https://github.com/h-sinha/dashfeed.git   (OR Download ZIP and Unzip)
cd dashfeed/site
export FLASK_APP=index.py
flask run
```
Open localhost:5000 on your web-browser.

Run all.sh to fetch news and to insert them to database.

## Built With

* [Flask](http://flask.pocoo.org/docs/1.0) - The web framework used
* [Sqlite3](https://www.sqlite.org/docs.html) - Database

## Authors

* **Harsh** - [h-sinha](https://github.com/h-sinha)
* **Anurag Jain** - [ajainuary](https://github.com/ajainuary)

