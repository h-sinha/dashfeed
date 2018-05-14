import sqlite3


def fetch(user_id):
    conn = sqlite3.connect('../news.db')
    cursor = conn.cursor()
    sql = """select * from NEWS join news_user on news_user.news_id = NEWS.id where news_user.id = "{p}"; """
    sql = sql.format(p=user_id)
    ro = cursor.execute(sql)
    news = ro.fetchall()
    return news


def insert(user_id, news_id):
    connection = sqlite3.connect('../news.db')
    cursor = connection.cursor()
    try:
        if status(user_id, news_id) is False:
            cursor.execute(
                '''INSERT INTO  news_user(id,news_id)VALUES(?,?)''', (user_id, news_id))
            connection.commit()
    finally:
        connection.close()


def delete(user_id, news_id):
    connection = sqlite3.connect('../news.db')
    cursor = connection.cursor()
    try:
        cursor.execute(
            '''DELETE FROM news_user where id=? and news_id=?''', (user_id, news_id))
        connection.commit()
        return True
    except BaseException:
        return False
    finally:
        connection.close()


def status(user_id, news_id):
    con = sqlite3.connect('../news.db')
    completion = False
    with con:
        cur = con.cursor()
        cur.execute("SELECT * FROM news_user")
        rows = cur.fetchall()
        for row in rows:
            if row is not None:
                dbUser = row[0]
                dbNews = row[1]
                if dbUser == user_id:
                    completion = check_newsid(dbNews, news_id)
    return completion


def check_newsid(dbNews, news_id):
    return dbNews == news_id
