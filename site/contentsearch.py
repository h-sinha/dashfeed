import sqlite3


def searchbar(category):
    conn = sqlite3.connect('../news.db')
    cursor = conn.cursor()
    category = " " + category + " "
    sql = """select * from NEWS where content like "%{p}%"; """
    sql = sql.format(p=category)
    ro = cursor.execute(sql)
    customers = ro.fetchall()
    return customers
