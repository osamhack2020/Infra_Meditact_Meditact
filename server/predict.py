from flask import Flask, request, jsonify
from flask.json import JSONEncoder
from flask_cors import CORS, cross_origin
import keras
import api

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
CORS(app)
@app.route("/", methods =['POST'])
def model():
    #----------------------------- TODO: reading user input json and extract sentence
    payload = request.json
    #-----------------------------
    #input_features = api.preprocess_sentence("다리가 진짜 아파요") 
    input_features = api.preprocess_sentence(payload['conversation']) 
    model = keras.models.load_model('lstm.h5', compile = False)
    result = {
            'model name': 'work',
            'api ver': '1.0',
            'predict result': str(api.get_result(model.predict(input_features))) ,
    }
    return jsonify(result)

        