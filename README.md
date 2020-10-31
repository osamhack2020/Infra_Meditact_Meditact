[![Made with Love by Icalia Labs](https://img.shields.io/badge/With%20love%20by-Icalia%20Labs-ff3434.svg)](https://github.com/IcaliaLabs) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)

![Alpha ChatBot](https://s3.amazonaws.com/icalialabs/alpha/alpha-01.png)
### ***위 링크에 있는 Alpha ChatBot 을 커스터마이징 중입니다.***
#### **지금 이 링크에서 채팅을 시연해 볼 수 있습니다.[live demo](http://35.224.66.230/)**

#### **다음 README의 내용은 기존 alpha 한글화여 간략히 편집한 내용입니다. **
Web기반의 **chatbot** 을 자유롭게 꾸며보세요.

대부분의 챗봇 솔루션들은 페이스북 채팅처럼 이미 만들어져 있는 채팅 프로그램에 등록되어 적용됩니다. **만약 독립적인 채팅 UI를 웹의 다른 곳에 적용시킬려면 어떻게 해야 할까요?**?

당신은 이 봇을 이용해서 **자유롭게 UI를 커스터마이징 할 수 있을 뿐만 아니라 무제한적으로 로직을 개발할 수도 있습니다. **. 많은 챗봇 솔루션들이 시중에 개발되어 있으나, 비용이 발생하거나, 다양한 용도로 유연하게 적용시키기 어렵습니다.

*** 그런 문제점을 해결하기 위해 Alpha 오픈소스가 당신을 위해 개발되었습니다.*** 이 라이브러리는 챗봇 구현을 아주 쉽게 할 수 있도록 도와줍니다. 

1. **다운로드**
2. **자유롭게 Q&A Logic 삽입** 
3. **Color 와 이미지를  커스터마이징**

알파는 모든 UI 렌더링을 애플리케이션 상태에서 동작시킵니다.
**React 를 완벽하게 잘 다룰 필요는 없습니다**  
하지만, React와 Redux를 잘 다룰 줄 안다면, 자유롭게 bot-app을 커스터마이징 할 수 있고, 필요하다면 백엔드와 AI Engine 과도 결합시킬 수 있습니다.

## **설치**
Alpha는 **[Docker](https://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwisgvjWuOTUAhVFQiYKHUTRB84QFggmMAA&url=https://www.docker.com/&usg=AFQjCNHuzQZ0w4cpXaM93txh2HBVWjeFaA)** 로 구동시킬 수 있습니다. 하지만 **[NodeJS](https://nodejs.org)** 기반이므로, **[npm](https://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwju9_rV3-XUAhXHSyYKHWW0CvwQFggmMAA&url=https%3A%2F%2Fwww.npmjs.com%2F&usg=AFQjCNHcRudvKKNX4eMuQBtERCMyaPp85w)** 이나 **[yarn](https://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiB-L-tuuTUAhXEyyYKHfXWASsQFggiMAA&url=https://yarnpkg.com/&usg=AFQjCNFroCU9gpWAHS2N0ZdHNYurDzRu_w)** 으로도 실행시킬 수 있습니다.

#### **Development**
컴퓨터에서 실행시킬려면 아래의 step을 따르면 됩니다. 이 방법으로 실행할려면 도커가 설치되어 있어야 합니다. (도커 없이 설치하는 방법도 아래에 설명되어 있습니다.):

 1. Repo를 clone합니다.:  `git clone https://github.com/mindgitrwx/alpha.git`
 2. 폴더를 이동합니다.: `cd alpha` 
 3. 디펜덴시를 설치합니다.: `docker-compose run --rm alpha yarn install`
 4. 서버를 구동시킵니다.: `docker-compose up alpha`

**[localhost:3001](http://localhost:3001/)** 주소로 웹브라우저에서 볼 수 있습니다.


 - 로컬호스트에서 컨테이너를 구동할 수 있는 환경이라면 Webpack의 **[Hot Reloading](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack)** 의 도움을 받을 수 있습니다. 이 기능은 개발자가 code를 바꿨을 때, 새로고침 없이 브라우저상에서 바로 바꾼 code가 반영되어 실시간으로 디버깅을 할수 있도록 합니다.

 - **[Redux DevTools](https://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwjm7K-HueTUAhWG4yYKHbzKBRYQFggwMAI&url=https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en&usg=AFQjCNFg4ldS78uapjCGBaNjL9NvIwZGhg)** 이 기본적으로 적용되어 있습니다. App의 action과 state를 실시간으로 체크할 수 있습니다.

#### **로컬에서 실행**

 - **도커를 통한 로컬에서의 실행**
  ```
    docker-compose up release
  ```

도커 이미지를 빌드하고, Production 서버를 실행시킵니다.

#### **도커가 뭔지 모르겠어요**
도커 없이 실행시키고 싶다면 모든 dependency를 다음과 같은 방법으로 설치 가능합니다.

**개발 환경:**
 1. Repo를 클론합니다.:  `git clone https://github.com/mindgitrwx/alpha.git`
 2. 디렉토리로 이동합니다: `cd alpha` 
 3. `npm install` 이나 `yarn install` 로 의존성 라이브러리들을 설치합니다.
 4. `npm start` 로 서버를 동작시킵니다.
 5. **[localhost:3001](http://localhost:3001/)** 당신의 브라우저에서 localhost 3001에 접속합니다.

## **대화 커스터마이징**

>*대화를 편집하고 싶다면, **app/BotMind/_initialBubble.js** 과 **app/BotMind/BotMindFlows/index.js**. 를 보시면 됩니다.*
#### **The BotMind**
BotMind 의 메인 파일은 **BotMind.js** 입니다. 하지만 **BotMind.js** 파일은 **_initialBubble.js**, **_nextBubble.js**, **_recommendationBubbles.js** 등을 묷어주는 용도로 사용됩니다.
#### **_initialBubble.js**
대화의 시작을 어떤 question에서 시작할 것인지 결정합니다.
#### **_nextBubble.js**
이 파일은 Bot이나 user의 마지막 답변에 대해 어디로 점프할것인지 결정하는 로직을 담고 있습니다. 
굳이 로직을 바꿀 필요는 없으나, 더 다양한 커스터마이징을 하고 싶을 때 이 파일을 바꾸면 됩니다.

#### **쉽게 채팅을 편집하는 법**
 `app/BotMind/BotMindFlows/`. 기본적으로 `index.js` 파일에서 채팅 내용을 편집할수도 있지만, 대화가 너무 많아져서 채팅 내용이 너무 커질 경우 다음과 같은 방법으로 리팩토링 할 수 있습니다.

```
import greetings from './conversation1';
import designSprint from './conversation2';
import designSprintQuestions from './conversation3';

const questions = {
	...conversation1,
	...conversation2,
	...conversation3,
}

export default questions;
```

모든 question hash값들은 **각자의 특정한 id를 가지고 있습니다.**. 조금 id가 길어지더라도 최대한 알아보기 쉽기 네이밍할 것을 권합니다. 코드의 사이즈가 커지면, id를 기억하는 것 자체가 힘이 들 수 있습니다.

모든 Question들은 다음과 같은 Option들을 가지고 있습니다.

- **botPrompt ([String] required):** Bot이 말하는 메세지입니다.
- **answers ([Array] required):** 유저가 무엇을 답변하는지에 따라서 다음 answer가 달라집니다. 다음과 같은 옵션을 포함합니다.
	- **answer ([String | RegEx])**: 유저의 답변이 이 hash를 트리거합니다. 당신이 `selectField` 나 `tagsField` 를 적용시켰다면 유저의 클릭에 따라 다른 answer로 if문처럼 이동시킬 수 있습니다.
	- **nextId ([String] required)**: 다음에 Bot이 무슨 Question을 말할지 결정합니다.
	- **catchName ([Boolean])**: catchName 옵션이 있으면, user가 send하는 정보를 추출하여 user 이름을 등록합니다.
- **finishConversation ([Boolean])**: 대화를 끝내는 Option입니다.
- **input ([Object])**:  *botPrompt*가 나오고 나서, 유저가 봇에게 어떤 input을 줄 수 있는지 결정합니다. (text field, tags, select, disabled, 등.). 
- **type ([String])**: Bot이 전달하는 메세지의 타입을 정합니다. ("text", "media", "link", 또는 "transformedText"). transformedText는 varname을 text에서 바꿀 수 있도록 합니다. link는 클릭 가능한 링크를 만들 수 있게 합니다. media는 gif, png 파일 등을 챗봇에 보이게 합니다.
- **varName ([String])**: input type이 "transformedText" 일때, *botPrompt* 에 있는 `@varName` 이 바뀝니다. 

## **UI 커스터마이징**
이 오픈소스는 자유롭게 UI를 커스터마이징 할 수 있도록 도와줍니다.

대부분의 스타일은 이 한 파일에서 수정가능하도록 분리되어 있습니다. `/app/customization/styleVariables.js`

## **Customizing the React app**
이 repository의 React 코드는 [react-boilerplat](https://github.com/react-boilerplate/react-boilerplate)를 기반으로 만들어졌습니다.  React가 가지고 있는 최고의 장점들과 기술들을 누려보세요.

 - Redux
 - ImmutableJS
 - Reselect
 - Redux-Saga
 - Styled-Components
 
Alpha의 React 부분이 어떻게 구성되어 있는지 알고싶다면, 이 **[문서](https://github.com/react-boilerplate/react-boilerplate/tree/master/docs)** 를 먼저 보세요.

## **다른 오픈소스들의 적용**
React와 Webpack으로 만들어진 오픈소스입니다. BackEnd든 Frontend든 다양하게 새로운 오픈소스들을 커스터마이징하고 적용하기 편리합니다.

## **AI Engine의 적용**
현재 이 프로젝트는 alpha/app/BotMind/MessageSender.js 에서 AI model과 연결되고 있습니다.