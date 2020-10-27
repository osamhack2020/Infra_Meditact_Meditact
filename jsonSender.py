# Import libraries
#import numpy as np
from flask import Flask, request, jsonify
from flask.json import JSONEncoder
from flask_cors import CORS, cross_origin
import flask
import keras
import api
import pickle

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
CORS(app)

#@app.route('/',methods=['POST'])
@app.route('/',methods=['POST','GET'])
def model():
    # Load the model
    payload = request.json
    
    input_features = api.preprocess_sentence(payload['conversation'])
    model = keras.models.load_model('model_FINAL.h5', compile = False)
    message ={'model name':'work',
             'api ver':'1.0',
             'predict result':str(api.get_result(model.predict(input_features))),
            }

    result = jsonify(message)
    return result

if __name__ == '__main__':
    app.run(host='http://0.0.0.0', port=5000, debug=False)
