import sqlite3


def push_to_database(headline, subtitle, content, rating, link, tag, img):
    connection = sqlite3.connect('../news.db')
    cursor = connection.cursor()
    try:
        cursor.execute(
            '''INSERT INTO NEWS( title, subject, content,rating,link,tags,img)VALUES(?,?,?,?,?,?,?)''',
            (headline,
             subtitle,
             content,
             rating,
             link,
             tag,
             img))
        connection.commit()
    finally:
        connection.close()
