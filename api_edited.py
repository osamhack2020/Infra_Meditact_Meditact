from flask import Flask, request, jsonify
from flask.json import JSONEncoder
import tensorflow as tf
import tensorflow.keras as keras
from keras.models import load_model
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as numpy
from konlpy.tag import Okt
import pickle

stopwords = ['질문', '문의', '관련', '그대로', '계속', '답변', '선생님', '관련문의',
            '한지', '자주', '좀', '쪽', '자꾸', '요즘', '몇개', '무조건', '하나요',
            '안해','요', '경우', '최근', '및', '몇', '달', '일반', '전날', '저번',
            '말', '일어나지', '며칠', '먹기', '지난번', '글', '때문', '너', '무',
            '오늘', '시', '잔', '뒤', '지속', '막', '것', '이건', '뭔가', '다시', '그',
                '무슨', '안', '난', '도', '기', '후', '거리', '이', '뭘', '저', '뭐', '답젼',
                '평생', '회복', '반', '감사', '의사', '보험', '학생', '제발', '살짝',
                '느낌', '제', '대해','갑자기','문제', '전','정도', '왜', '거', '가요',
                '의심', '어제', '추천', '를', '지금', '무엇', '내일', '관해', '리', '세',
                 '로', '목적', '그냥', '거의', '고민', '다음', '이틀', '항상', '뭐', '때',
                '요', '가끔', '이후', '혹시', ]

def preprocess_sentence(sentence):
    twitter = Okt()
    with open('/content/drive/My Drive/Colab Notebooks/Meditact/tokenizer_1016_72.pickle', 'rb') as handle:
	    tokenizer = pickle.load(handle)

    nouns = twitter.nouns(sentence)
    global stopwords
    for word in nouns:
        if word in stopwords:
            while word in nouns:
                nouns.remove(word)
    input_batch = [nouns]
    embedded_batch = tokenizer.texts_to_sequences(input_batch)
    sequence_length = 10
    trunc_type = 'post'
    padding_type = 'post'

    padded_batch = tf.keras.preprocessing.sequence.pad_sequences(
        embedded_batch, 
        truncating=trunc_type, 
        padding=padding_type, 
        maxlen=sequence_length
    )
    return padded_batch

def get_result(softmax):
    sp = softmax.argmax()
    val = softmax.max()
    base = '{0}확률로 {1}과를 방문하셔야 합니다'

    class_to_label = {'DERM': 0, 'GS': 1, 'IP': 2, 'GI':3, 'OPH':4,
                    'NR': 5, 'ENT': 6, 'PSY': 7, 'HEON': 8, 'RHEU': 9,
                    'REHM': 10, 'NS': 11, 'AN': 12, 'DENT': 13, 'PS': 14,
                    'CS': 15, 'INFC': 16, 'OS': 17,
                    'EMR': 18, 'ENDO': 19, 'CA': 20, 'KTM': 21, 'OBGY': 22,
                    'URO': 23, 'ALL': 24, 'NPH': 25}
    label_to_class = {value:key for key, value in class_to_label.items()}
    label_to_eng = {0: '피부과',
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

    result = {
        '진료과 코드' : label_to_eng[sp],
        '진료과 영문코드' : label_to_class[sp],
        '확률' : val,
        'output' : base.format(val, label_to_class[sp])
    }
    return result

def model():
    RAW_SENTENCE = '기침이 나고 목이 아파요' ## (예시) 실제는 사용자 입력
    payload = RAW_SENTENCE
    preprocessed_payload = preprocess_sentence(payload)
    
    model = load_model('/content/drive/My Drive/Colab Notebooks/Meditact/model/lstm_1016_72.h5')
    softmax = model.predict(preprocessed_payload)
    return get_result(softmax)

if __name__ == "__main__":
    model()