import {
  optionCards,
  selectField,
  tagsField,
  textField,
  disabledFieldText,
  endOfConversation,
} from '../StateFormatter';
import * as RTypes from '../responseTypes';

//const hangul_negative          = /(^hello|^hllo|^hi|^hey|^hola|^sup)\b\s?.*$/i;
//const hangul_negative_negative = /(?!(^hello|^hi|^hey|^hllo|^sup|^hola)\b)\w+/i;
const hangul_negative          = /(?!([가-힣]+)\b)\w+/i;
const hangul_negative_negative = /^[가-힣]+/i;

const questions                 = {
  start: {
    botPrompt: '안녕하세요? 국군장병의 건강을 책임지는 AI로봇 <strong>메디텍트</strong> 입니다',
    answers  : [
      {
        nextId: 'MeditactLogo',
      },
    ],
  },
  MeditactLogo: {
    botPrompt: 'https://i.postimg.cc/MT7JzXbW/meditact.png',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'myPurpose',
      },
    ],
  },
  myPurpose: {
    botPrompt: '메디텍트는 <strong>Medicine</strong>과 <strong>Untact</strong>의 합성어로, 항상 국군 장병 곁에서 도와주겠다는 뜻을 담고있습니다',
    answers  : [
      {
        nextId: 'yourName',
      },
    ],
  },
  yourName: {
    botPrompt: '당신의 이름은 무엇인가요?',
    input    : textField(),
    answers  : [
      {
        answer: hangul_negative,
        nextId: 'greetings_notAName',
      },
      {
        answer   : hangul_negative_negative,
        catchName: true,
        nextId   : 'asYouCanSee',
      },
    ],
  },
  greetings_notAName: {
	  botPrompt: '아직 저도 배워가고 있는 로봇이에요. 무슨 말인 지 잘 모르겠어요.  😅',
	  answers  : [
	    {
	      nextId: 'greetings_whatsYourNameAgain',
	    },
	  ],
  },
  greetings_whatsYourNameAgain: {
	  botPrompt: '당신의 이름을 <strong>한글 한 단어</strong>로 말씀해주실 수 있나요?',
	  input    : textField(),
	  answers  : [
	    {
	      answer: hangul_negative,
	      nextId: 'greetings_notAName',
	    },
	    {
	      answer   : hangul_negative_negative,
	      catchName: true,
	      nextId   : 'asYouCanSee',
	    },
	  ],
  },
  asYouCanSee: {
    botPrompt: '안녕하세요. <strong>@varName</strong> 님, 무엇을 도와드릴까요?',
    type     : RTypes.TRANSFORMED_TEXT,
    varName  : 'userName',
    answers  : [
			{ nextId: 'select' },
    ],
  },
  /*
    emojisHtml: {
    botPrompt: "I can enhance my dialogue with emojis 🎉 and also using inline <span style='color:purple; background-color:white;font-weight:bold'>HTML</span>",
    answers  : [
			{ nextId: 'mediaBubbles1' },
    ],
  },
  mediaBubbles1: {
    botPrompt: 'I can also share <strong>images and animated GIFs</strong> like so:',
    answers  : [
			{ nextId: 'mediaBubbles2' },
    ],
  },
  mediaBubbles2: {
    botPrompt: 'https://media.giphy.com/media/bDL3BsB4ViI2k/giphy.gif',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'select',
      },
    ],
  },
  */
  //진료예약건강상담서비스병원안내의료진 정보서류영상발급MRI, CT 예약 현황기존
  select: {
    botPrompt: '궁금한게 더 있으면 여기중에서 하나 선택하세요:',
    varName  : 'userName',
    input    : selectField(['진료예약','건강상담','병원안내','의료진','MRI예약현황', 'Meditact소개']),
    answers  : [
      {
        answer   : '진료예약',
        nextId   : 'preClinicLink',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : '건강상담',
        nextId   : 'healthQuestion',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : '의료진',
        nextId   : 'doctors',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : '병원안내',
        nextId   : 'hospitalGuide',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : 'MRI예약현황',
        nextId   : 'preClinicLink',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : 'Meditact소개',
        nextId   : 'MeditactInfo',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
    ],
  },
  MeditactInfo: {
    botPrompt: '<strong>Meditact</strong>는 현재 개발되어지고 있는 오픈소스 기반 chatbot platform 입니다. ',
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
    //input    : selectField(['African or European?', '10 m/s', "Don't ask me stupid questions."]),
    answers  : [
      {
        nextId: 'select',
      },
    ],
  },

  tags: {
    botPrompt: 'Or even <strong>allow users to select many tags</strong> to form an answer:',
    varName  : 'userName',
    input    : tagsField(['Do go on..', 'Amazing!', "I'm loving this!", '🍕']),
    answers  : [
			{ nextId: 'bagsSystem' },
    ],
  },

  preClinicLink: {
    botPrompt: '링크를 클릭하세요 😎',
    answers  : [
      {
        nextId: 'clinicLink',
      },
    ],
  },
  healthQuestion: {
    varName  : 'userName',
    botPrompt: '당신의 건강 상태는 지금 어떤가요? 🤔',
    answers  : [
      {
        nextId: 'healthCheck',
      },
    ],
  },

  hmkay: {
    botPrompt: 'Hmkay... 😐',
    answers  : [
      {
        nextId: 'clinicLink',
      },
    ],
  },
  clinicLink: {
    botPrompt: '<a href="">https://국군수도병원주소링크</a> 🐦',
    //input    : selectField(['African or European?', '10 m/s', "Don't ask me stupid questions."]),
    answers  : [
      {
        nextId: 'select',
      },
    ],
  },

  doctors: {
    varName  : 'userName',
    botPrompt: '<a href="https://afmd.mnd.go.kr/mbshome/mbs/afmd/subview.jsp?id=afmd_020400000000">의료진검색</a> 🐦',
    answers  : [
      {
        nextId: 'select',
      },
    ],
    sumToBags: [{ name: 'rickAndMorty', points: 1 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
  }, 

  hospitalGuide: {
    botPrompt: '병원에 대해 어떤 정보을 알고 싶나요?',
    varName  : 'userName',
    input    : selectField(['진료스케줄','주소','외래진료시간','편의시설', '뒤로가기']),
    answers  : [
      {
        answer   : '진료스케줄',
        nextId   : 'clinicSchedule',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : '주소',
        nextId   : 'clinicAddress',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : '외래진료시간',
        nextId   : 'clinicTime',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : '편의시설',
        nextId   : 'clinicBuilding',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : '뒤로가기',
        nextId   : 'select',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
    ],
  },

  clinicTime: {
    botPrompt: '평일 : 09:00~12:15, 13:30~17:30, 접수시간 : 08:30~12:15, 13:30~16:30 입니다!',
    answers  : [
      {
        nextId: 'hospitalGuide',
      },
    ],
  },
  clinicAddress: {
    botPrompt: '경기도 성남시 분당구 새마을로 177번길 81번지 사서함 99호',
    answers  : [
      {
        nextId: 'hospitalGuide',
      },
    ],
  },
  clinicBuilding: {
    botPrompt: '환자식당, 직원식당, 충성마트, 피자나라 치킨공주, 환자 이발소, 미용실, 북을북을 작은 도서관, 야외쉼터, 자동현금인출기',
    answers  : [
      {
        nextId: 'hospitalGuide',
      },
    ],
  },

  clinicSchedule: {
    varName  : 'userName',
    botPrompt: '<a href="https://afmd.mnd.go.kr/user/boardList.action?boardId=I_1785708&siteId=afmd&id=afmd_031000000000">국군수도병원 진료스케줄 링크</a> 🐦',
    answers  : [
      {
        nextId: 'hospitalGuide',
      },
    ],
    sumToBags: [{ name: 'rickAndMorty', points: 1 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
  },

  healthCheck: {
    botPrompt: '<strong>@varName</strong> 장병님. 건강 상태를 구체적으로 물어주세요 (예: 머리가 자주 아파요)',
    input    : textField(),
    type     : RTypes.TRANSFORMED_TEXT,
    varName  : 'userName',
    answers  : [
      {
        answer     : 'hangul_healthCheck',
        catchHealth: true,
        nextId     : 'clinicThinking',
      },
    ],
  },
  clinicThinking: {
    botPrompt: '어디로 가야 할 지 알려드릴게요. 조금만 기다려주세요!',
    answers  : [
      {
        nextId: 'clinicAnswer',
      },
    ],
  },
  clinicAnswer: {
    botPrompt: "<strong>@varName</strong> 을 가야 할거같네요 <! href='www.adultswim.com/videos/rick-and-morty/'>!",
    type     : RTypes.TRANSFORMED_TEXT,
    varName  : 'clinic',
    answers  : [
      {
        nextId: 'diversePeople',
      },
    ],
  },
  diversePeople: {
    botPrompt         : 'https://image.freepik.com/free-vector/diverse-crowd-people-different-ages-races_74855-5235.jpg',
    finishConversation: true,
    type              : RTypes.MEDIA,
    answers           : [
      {
        nextId: 'check_out1',
      },
    ],
  },
  shroedingersCat: {
    botPrompt: "Don't you just feel like <a href='https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat'>Shroedinger's Cat</a> sometimes <strong>@varName</strong>?",
    type     : RTypes.TRANSFORMED_TEXT,
    varName  : 'userName',
    answers  : [
      {
        nextId: 'shroedingersCat2',
      },
    ],
  },
  shroedingersCat2: {
    botPrompt: 'https://media.giphy.com/media/XA4cpc6YbjPO/giphy.gif',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'shroedingersCat3',
      },
    ],
  },
  shroedingersCat3: {
    botPrompt: "It looks like you're in a sort of <strong>quantum-superposition state</strong>. You should really go out and figure out where (and when) you are at in your life... Cheers!",
    answers  : [
      {
        nextId            : 'check_out1',
        finishConversation: true,
      },
    ],
  },
  recursion: {
    botPrompt: 'https://media.giphy.com/media/l4HnKwiJJaJQB04Zq/giphy.gif',
    type     : RTypes.MEDIA,
    answers  : [
      {
        nextId: 'recursion2',
      },
    ],
  },
  recursion2: {
    botPrompt: "You're really a no-nonsense kind of type, huh?",
    answers  : [
      {
        nextId: 'recursion3',
      },
    ],
  },
  recursion3: {
    botPrompt: "You know what else isn't any fun <strong>@varName</strong>?",
    type     : RTypes.TRANSFORMED_TEXT,
    varName  : 'userName',
    answers  : [
      {
        nextId: 'recursion4',
      },
    ],
  },
  recursion4: {
    botPrompt: 'Recursion.',
    input    : selectField(['What?', 'Yes', 'No', 'Stop It']),
    answers  : [
      {
        answer: 'What?',
        nextId: 'recursion3',
      },
      {
        answer: 'Yes',
        nextId: 'recursion3',
      },
      {
        answer: 'No',
        nextId: 'recursion3',
      },
      {
        answer: 'Stop It',
        nextId: 'sorry',
      },
    ],
  },
  sorry: {
    botPrompt         : 'https://image.freepik.com/free-vector/employees-giving-hands-helping-colleagues-walk-upstairs_74855-5236.jpg',
    type              : RTypes.MEDIA,
    finishConversation: true,
    answers           : [
      {
        nextId: 'check_out1',
      },
    ],
  },
  check_out1: {
    botPrompt: '여러분과 함께 개발하며 진행해가는 Pre alpha version 의 챗봇입니다. 방금 입력하신 코드에는 AI가 적용되어 다소 시간이 걸렸습니다. 오픈소스에 참여해서 모두가 즐겁게 사용 가능한 국군을 위한 챗봇을 만들어 봐요!',
    answers  : [
      {
        nextId: 'check_out2',
      },
    ],
  },
  check_out2: {
    botPrompt: 'https://github.com/mindgitrwx/alpha',
    type     : RTypes.LINK,
    //input    : endOfConversation(),
    answers  : [
      {
        nextId: 'select',
      },
    ],
  },
};


export default questions;
