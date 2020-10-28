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
        nextId: 'myPurpose',
      },
    ],
  },
  myPurpose: {
    botPrompt: '메디텍트는 Medi와 tact의 합성어로, 항상 국군 장병 곁에서 도와주겠다는 뜻을 담고있습니다',
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
    botPrompt: '여기중에서 하나 선택하세요:',
    varName  : 'userName',
    input    : selectField(['진료예약','건강상담','병원안내','의료진','MRI예약현황']),
    answers  : [
      {
        answer   : '진료예약',
        nextId   : 'cool',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : '건강상담',
        nextId   : 'healthQuestion',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : '병원안내',
        nextId   : 'hospitalGuide',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : 'MRI예약현황',
        nextId   : 'cool',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
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
  bagsSystem: {
    botPrompt: "Besides all that, I can add up points in my <strong>Bags System</strong>, to eventually make a 'Recommendation'",
    answers  : [
			{ nextId: 'letsTryIt' },
    ],
  },
  letsTryIt: {
    botPrompt: "Let's try it!",
    answers  : [
			{ nextId: 'question1' },
    ],
  },
  question1: {
    botPrompt: 'Tell me <strong>@varName</strong>: Do you like to have fun?',
    type     : RTypes.TRANSFORMED_TEXT,
    varName  : 'userName',
    input    : selectField(['Yes!', 'No.', "I'm not Sure"]),
    answers  : [
      {
        answer   : 'Yes!',
        nextId   : 'cool',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer   : 'No.',
        nextId   : 'hmkay',
        sumToBags: [{ name: 'shroedingersCat', points: 1 }, { name: 'recursion', points: 3 }],
      },
      {
        answer   : "I'm not Sure",
        nextId   : 'hmm',
        sumToBags: [{ name: 'rickAndMorty', points: 1 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
    ],
  },
  cool: {
    botPrompt: '링크를 클릭하세요 😎',
    answers  : [
      {
        nextId: 'question2',
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
        nextId: 'question2',
      },
    ],
  },
  question2: {
    botPrompt: '<a href="https://www.google.com">https://국군수도병원주소링크</a> 🐦',
    //input    : selectField(['African or European?', '10 m/s', "Don't ask me stupid questions."]),
    answers  : [
      {
        nextId: 'select',
      },
    ],
  },
  
  hospitalGuide: {
    varName  : 'userName',
    botPrompt: '<a href="https://afmd.mnd.go.kr/user/boardList.action?boardId=I_1785708&siteId=afmd&id=afmd_031000000000">국군수도병원 진료스케줄 링크</a> 🐦',
    answers  : [
      {
        nextId: 'select',
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
        nextId: 'rickAndMorty3',
      },
    ],
  },
  rickAndMorty3: {
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
    botPrompt: '여러분과 함께 개발하며 진행해가는 Pre alpha version 의 챗봇입니다. 오픈소스에 참여해서 모두가 즐겁게 사용 가능한 국군을 위한 챗봇을 만들어 봐요!',
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
