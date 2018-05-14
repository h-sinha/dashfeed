import sqlite3
connection = sqlite3.connect('../news.db')
cursor = connection.cursor()
try:
    cursor.execute("delete from NEWS where id>=154 and id<=168")
    connection.commit()
finally:
    connection.close()
