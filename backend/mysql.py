import pymysql
import pymysql.cursors

class Mysql:
    def __init__(self):
        self.connection = pymysql.connect(
            # host="localhost", 
            host='192.168.0.4',
            user="root", 
            passwd="12345678", 
            db="AYD1", 
            cursorclass=pymysql.cursors.DictCursor, 
            sql_mode=''
        )
        
    def select(self):
        with self.connection.cursor() as cursor:
            cursor.execute("SELECT * FROM Videojuegos;")
            res = cursor.fetchall()
        self.connection.close()
        return res

    def crear(self, juego):
        with self.connection.cursor() as cursor:
            cursor.execute("INSERT INTO Videojuegos(titulo, lanzamiento, genero, desarrollador, ESRB_rating) VALUES();")
            res = cursor.fetchall()
        self.connection.close()
        return res
