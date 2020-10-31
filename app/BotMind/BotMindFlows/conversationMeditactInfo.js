import * as RTypes from '../responseTypes';
export const Info = {
  MeditactInfo: {
    botPrompt: '<strong>Meditact</strong>는 현재 개발 되는 오픈소스 기반 chatbot platform 입니다. ',
    answers  : [
      {
        nextId: 'selectMeditactInfo',
      },
    ],
  },
  selectMeditactInfo: {
    botPrompt: '더 알고 싶은것이 있나요?',
    varName  : 'userName',
    input    : selectField(['서버정보','프론트정보','AI정보','구동인프라','팀구성']),
    answers  : [
      {
        answer   : '서버정보',
        nextId   : 'serverInfo',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : '프론트정보',
        nextId   : 'frontInfo',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : 'AI정보',
        nextId   : 'aiInfo',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : '구동인프라',
        nextId   : 'infraInfo',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : '팀구성',
        nextId   : 'teamInfo',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
    ],
  },

  // add - for information of meditact
  serverInfo: {
    botPrompt: "쿠버네티스 기반의 Google cloud server에서 작동하고 있습니다. 24시간 무중단으로 돌아 갈 수 있도록 하겠습니다.",
    answers  : [
			{ nextId: 'select' },
    ],
  },
  frontInfo: {
    botPrompt: "React 기반으로 만들어져있습니다. 군의관과 직접 상담할 수 있는 사이트를 구축하고 있습니다.",
    answers  : [
			{ nextId: 'select' },
    ],
  },
  aiInfo: {
    botPrompt: "현재 다양한 모델을 적용시킬 예정입니다. AI를 개선해주고 싶은 분이 있으면 여기에다 issue를 달아주세요.",
    answers  : [
			{ nextId: 'aiInfoScale' },
    ],
  },
  infraInfo: {
    botPrompt: "https://i.postimg.cc/FRDGb4hy/meditact-Infra.png",
    type     : RTypes.MEDIA,
    answers  : [
			{ nextId: 'select' },
    ],
  },
  teamInfo: {
    botPrompt: "메디텍트는 다양한 출신의 국군 장병 5명이 씨앗을 뿌린 프로젝트입니다. 이제 여기에 기여를 해서 더 나은 챗봇이 되게 도와주세요",
    answers  : [
			{ nextId: 'select' },
    ],
  },
  aiInfoScale: {
    botPrompt: "의학 분야 전문 지식을 가진 군의관님이 11만 8008개의 데이터를 크롤링하고 라벨링해서 만들어졌어요!",
    answers  : [
			{ nextId: 'aIinfoLink' },
    ],
  },
  aIinfoLink: {
    botPrompt: '<a href="https://github.com/osamhack2020/Infra_Meditact_Meditact">MeditactAI개발repo</a> 🐦',
    answers  : [
      {
        nextId: 'select',
      },
    ],
  },


}