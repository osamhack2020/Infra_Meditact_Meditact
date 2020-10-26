from konlpy.tag import Okt
from keras.models import load_model
import numpy as np 
import pandas as pd
import tensorflow as tf
import tensorflow.keras as keras
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

def preprocess_sentence(sentence):
    twitter = Okt()
    nouns = twitter.nouns(sentence)
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
    for word in nouns:
        if word in stopwords:
            while word in nouns:
                nouns.remove(word)
    return nouns