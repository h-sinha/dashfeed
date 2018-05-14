import sqlite3
import hashlib


def validate(username, password):
    con = sqlite3.connect('../news.db')
    completion = None
    with con:
        cur = con.cursor()
        cur.execute("SELECT * FROM user")
        rows = cur.fetchall()
        for row in rows:
            if row is not None:
                dbUser = row[1]
                dbPass = row[2]
                if dbUser == username:
                    completion = check_password(dbPass, password)
                    if completion:
                        return row[0]
    return completion


def check_password(dbPass, password):
    password = hashlib.md5(password.encode())
    password = password.hexdigest()
    return dbPass == password
