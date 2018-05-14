import sqlite3


def searchfunc(category):
    conn = sqlite3.connect('news.db')
    cursor = conn.cursor()
    sql = """select * from NEWS where tags="{p}"; """
    sql = sql.format(p=category)
    ro = cursor.execute(sql)
    customers = ro.fetchall()
    return customers
