import sqlite3
import string
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from random import *
import hashlib


def register(email):
    try:
        connection = sqlite3.connect('../news.db')
        cursor = connection.cursor()
        characters = string.ascii_letters + string.punctuation + string.digits
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login("dashfeed07@gmail.com", "Dashfeed2018")
        password = ''.join(choice(string.ascii_lowercase +
                                  string.ascii_uppercase + string.digits) for _ in range(8))
        passw = password
        password = hashlib.md5(password.encode())
        password = password.hexdigest()
        cursor.execute(
            '''INSERT INTO user( email, password)VALUES(?,?)''', (email, password))
        msg = "Welcome to DashFeed,\nWe're excited to have you onboard our news platform.\nHere's your password (Let's keep it a secret!): " + passw
        message = 'Subject: {}\n\n{}'.format("Welcome to DashFeed", msg)
        server.sendmail("dashfeed07@gmail.com", email, message)
        server.close()
        connection.commit()
        return True
    except BaseException:
        return False
