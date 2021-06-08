from flask import Flask, request
from flask_cors import CORS
from mysql import Mysql
import simplejson as json

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origin": "*"}})

@app.route('/')
def check():
    return "¡Todo good!"

@app.route('/videojuegos', methods=['GET'])
def consulta():
    db = Mysql()
    res = db.select()
    return json.dumps(res, use_decimal=True)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True, use_reloader=True)
