from keras.models import load_model
import numpy as np 
import pandas as pd
import tensorflow as tf
import tensorflow.keras as keras
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences


label_to_sp = {0: '피부과',
 1: '외과',
 2: '호흡기내과',
 3: '소화기내과',
 4: '안과',
 5: '신경과',
 6: '이비인후과',
 7: '신경정신과',
 8: '혈액종양내과',
 9: '류마티스내과',
 10: '재활의학과',
 11: '신경외과',
 12: '마취통증의학과',
 13: '치과',
 14: '성형외과',
 15: '흉부외과',
 16: '감염내과',
 17: '정형외과',
 18: '응급의학과',
 19: '내분비내과',
 20: '순환기내과',
 21: '한방과',
 22: '산부인과',
 23: '비뇨기과',
 24: '알레르기내과',
 25: '신장내과'}

def predict(sen):
    global model
    test = preprocess_sentence(sen)
    test_batch = []
    test_batch.append(test)

    # loading
    with open('tokenizer.pickle', 'rb') as handle:
        tokenizer = pickle.load(handle)

    pre_test = t.texts_to_sequences(test_batch)
    padded_pre_test = tf.keras.preprocessing.sequence.pad_sequences(pre_test, truncating=trunc_type, padding=padding_type, maxlen=sequence_length)

    model = load_model('model.h5')
    result = model.predict(padded_pre_test)
    sorted = result.argsort()
    sp = result.argmax()
    val = result.max()
    base = '{0}확률로 {1}과를 방문하셔야 합니다'
    return base.format(val, label_to_sp[sp])