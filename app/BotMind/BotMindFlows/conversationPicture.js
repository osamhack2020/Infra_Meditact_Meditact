import {
  optionCards,
  selectField,
  tagsField,
  textField,
  disabledFieldText,
  endOfConversation,
} from '../StateFormatter';
import * as RTypes from '../responseTypes';
export const AccommodationFacility = {
  pEat: {
    botPrompt: 'https://i.postimg.cc/9fWdTDwN/peat.png',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'pEat1',
      },
    ],
  },
  pEat1: {
    botPrompt: '위치 : 병원 본관 지하 1층',
    answers  : [
      {
        nextId: 'pEat2',
      },
    ],
  },
  pEat2: {
    botPrompt: '이용대상 : 외래진료 환자(현역장병)',
    answers  : [
      {
        nextId: 'pEat3',
      },
    ],
  },  
  pEat3: {
    botPrompt: '국방물자정보체계로 보급정지 신청 필요',
    answers  : [
      {
        nextId: 'pEat4',
      },
    ],
  },  
  pEat4: {
    botPrompt: '운영시간 : 중식 12:20 ~ 13:00 (외래환자)',
    answers  : [
      {
        nextId: 'clinicBuilding',
      },
    ],
  },


  eat: {
    botPrompt: 'https://i.postimg.cc/B6nCWjq1/eat.png',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'eat1',
      },
    ],
  },

  eat1: {
    botPrompt: '위치 : 간부복지회관 (병원본관 외부)',
    answers  : [
      {
        nextId: 'eat2',
      },
    ],
  },

  eat2: {
    botPrompt: '이용대상 : 인솔간부 및 보호자 등',
    answers  : [
      {
        nextId: 'eat3',
      },
    ],
  },


  eat3: {
    botPrompt: '운영시간 : 12:40 ~ 13:20 (외부발권 4,300원)',
    answers  : [
      {
        nextId: 'eat4',
      },
    ],
  },


  eat4: {
    botPrompt: '메뉴 : 한식 및 일품요리',
    answers  : [
      {
        nextId: 'clinicBuilding',
      },
    ],
  },

  px: {
    botPrompt: 'https://i.postimg.cc/NMFRJZ46/px.png',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'px1',
      },
    ],
  },

  px1: {
    botPrompt: '위치 : 정문 옆 면회복지회관 1층',
    answers  : [
      {
        nextId: 'px2',
      },
    ],
  },
  px2: {
    botPrompt: '운영시간 : 평일 09:00 ~ 19:00, 주말/공휴일 11:00 ~ 17:00',
    answers  : [
      {
        nextId: 'px3',
      },
    ],
  },


  px3: {
    botPrompt: '점심시간 : 평일 13:00~14:00, 주말 13:00~13:30',
    answers  : [
      {
        nextId: 'px4',
      },
    ],
  },


  px4: {
    botPrompt: '정기휴무 : 법정 공휴일',
    answers  : [
      {
        nextId: 'px5',
      },
    ],
  },


  px5: {
    botPrompt: '취급품목 : 과자, 음료수, 식품, 생활용품 등',
    answers  : [
      {
        nextId: 'clinicBuilding',
      },
    ],
  },

  pizza: {
    botPrompt: 'https://i.postimg.cc/vm3WvGW8/pizza.png',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'pizza1',
      },
    ],
  },

  pizza1: {
    botPrompt: '위치 : 정문 옆 면회복지회관 1층',
    answers  : [
      {
        nextId: 'pizza2',
      },
    ],
  },
  pizza2: {
    botPrompt: '운영시간 : 평일 09:30 ~ 18:30, 주말/공휴일 10:00 ~ 17:30',
    answers  : [
      {
        nextId: 'pizza3',
      },
    ],
  },


  pizza3: {
    botPrompt: '연중무휴-휴무시 별도 공지',
    answers  : [
      {
        nextId: 'pizza4',
      },
    ],
  },


  pizza4: {
    botPrompt: '수용인원 : 실내 220석',
    answers  : [
      {
        nextId: 'pizza5',
      },
    ],
  },

  pizza5: {
    botPrompt: '취급품목 : 피자, 치킨, 햄버거, 스파게티, 음료 등',
    answers  : [
      {
        nextId: 'clinicBuilding',
      },
    ],
  },


  pHair: {
    botPrompt: 'https://i.postimg.cc/pTcJPPTc/hair.png',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'pHair1',
      },
    ],
  },

  pHair1: {
    botPrompt: '위치 : 병원 본관 지하1층',
    answers  : [
      {
        nextId: 'pHair2',
      },
    ],
  },

  pHair2: {
    botPrompt: '이용대상 : 입원중인 현역 병사/기간병',
    answers  : [
      {
        nextId: 'pHair3',
      },
    ],
  },

  pHair3: {
    botPrompt: '간부는 본관 외부 간부복지회관 이용',
    answers  : [
      {
        nextId: 'pHair4',
      },
    ],
  },


  pHair4: {
    botPrompt: '간부 입원환자 중 거동 불편자는 이용 가능',
    answers  : [
      {
        nextId: 'pHair5',
      },
    ],
  },


  pHair5: {
    botPrompt: '운영시간 : 점심시간 12:00~13:30',
    answers  : [
      {
        nextId: 'clinicBuilding',
      },
    ],
  },


  hair: {
    botPrompt: 'https://i.postimg.cc/1XgctbVm/haircut.png',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'hair1',
      },
    ],
  },

  hair1: {
    botPrompt: '위치 : 간부복지회관(본관 외부)',
    answers  : [
      {
        nextId: 'hair2',
      },
    ],
  },


  hair2: {
    botPrompt: '이용대상 : 전 기간간부 및 군무원, 간부 입원환자',
    answers  : [
      {
        nextId: 'hair3',
      },
    ],
  },


  hair3: {
    botPrompt: '운영시간 : 평일 08:30 ~ 18:00 (전화예약 가능)',
    answers  : [
      {
        nextId: 'hair4',
      },
    ],
  },


  hair4: {
    botPrompt: '취급 : 퍼머, 커트, 염색 등',
    answers  : [
      {
        nextId: 'hair5',
      },
    ],
  },


  hair5: {
    botPrompt: '커트가격 : 남자 7,000원/여자 10,000원',
    answers  : [
      {
        nextId: 'clinicBuilding',
      },
    ],
  },

  library: {
    botPrompt: 'https://i.postimg.cc/8k3m3kxj/library.png',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'library1',
      },
    ],
  },

  library1: {
    botPrompt: '위치 : 병원 본관 7층',
    answers  : [
      {
        nextId: 'library2',
      },
    ],
  },

  library2: {
    botPrompt: '이용대상 : 입원환자 및 보호자, 병원 직원',
    answers  : [
      {
        nextId: 'library3',
      },
    ],
  }, 
  
  library3: {
    botPrompt: '',
    answers  : [
      {
        nextId: 'library4',
      },
    ],
  },  
  
  library4: {
    botPrompt: '',
    answers  : [
      {
        nextId: 'library5',
      },
    ],
  },
  
  library5: {
    botPrompt: '',
    answers  : [
      {
        nextId: 'library6',
      },
    ],
  },  
  
  library6: {
    botPrompt: '',
    answers  : [
      {
        nextId: 'library7',
      },
    ],
  },  
  
  library7: {
    botPrompt: '',
    answers  : [
      {
        nextId: 'clinicBuilding',
      },
    ],
  },

  park: {
    botPrompt: 'https://i.postimg.cc/Sxb7STS4/park.png',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'park1',
      },
    ],
  },

  park1: {
    botPrompt: '위치 : 병원 본관 1층',
    answers  : [
      {
        nextId: 'park2',
      },
    ],
  },

  park2: {
    botPrompt: '이용대상 : 입원환자 및 보호자, 면회객 등',
    answers  : [
      {
        nextId: 'clinicBuilding',
      },
    ],
  },

  money: {
    botPrompt: 'https://i.postimg.cc/VLCWcQc4/money.png',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'money1',
      },
    ],
  },

  money1: {
    botPrompt: '위치 : 신한은행 : 병원 본관 1층 로비',
    answers  : [
      {
        nextId: 'money2',
      },
    ],
  },

  money2: {
    botPrompt: '국민은행 : 병원 본관 1층 로비',
    answers  : [
      {
        nextId: 'money3',
      },
    ],
  },


  money3: {
    botPrompt: '우리은행 : 면회복지회관 1층 입구',
    answers  : [
      {
        nextId: 'money4',
      },
    ],
  },


  money4: {
    botPrompt: '운영시간 : 08:00 ~ 22:00',
    answers  : [
      {
        nextId: 'clinicBuilding',
      },
    ],
  },
}