import {
  optionCards,
  selectField,
  tagsField,
  textField,
  disabledFieldText,
  endOfConversation,
} from '../StateFormatter';
import * as RTypes from '../responseTypes';
export const starter = {
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
}