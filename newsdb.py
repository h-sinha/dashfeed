import sqlite3
conn = sqlite3.connect('news.db')
c = conn.cursor()
c.execute("CREATE TABLE NEWS(id integer PRIMARY KEY AUTOINCREMENT,\
	title text,subject text,content longtext,rating longint,link text UNIQUE,tags text,img longtext NOT NULL)")
conn.commit()
conn.close()
