import sqlite3
conn = sqlite3.connect('news.db')
c = conn.cursor()
c.execute("CREATE TABLE user(id integer PRIMARY KEY AUTOINCREMENT,\
	email text UNIQUE ,password text,preference1 varchar,preference2 varchar,read longtext)")
conn.commit()
conn.close()
