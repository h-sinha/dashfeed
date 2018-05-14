import sqlite3


def fetch(user_id):
    conn = sqlite3.connect('news.db')
    cursor = conn.cursor()
    sql = """select * from NEWS join news_user on news_user.news_id = NEWS.id where news_user.id = "{p}"; """
    sql = sql.format(p=user_id)
    ro = cursor.execute(sql)
    news = ro.fetchall()
    return news


def insert(user_id, news_id):
    connection = sqlite3.connect('news.db')
    cursor = connection.cursor()
    try:
        cursor.execute(
            '''INSERT INTO  news_id(id,news_id)VALUES(?,?)''', (user_id, news_id))
        connection.commit()
    finally:
        connection.close()
