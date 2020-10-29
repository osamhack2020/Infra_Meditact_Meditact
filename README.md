## Meditact

국군 의료 상담 AI챗봇 및 플랫폼 [**_Meditact_**](http://35.224.66.230/)

![logo](https://github.com/osamhack2020/WEB_Meditact_Meditact/blob/main/src/logo2.png)

---

**_Meditact_** 는 Medicine와 Untact를 합친 합성어로, 국군 의료 서비스의 편리함을 향상시키기 위해 탄생한 프로젝트입니다. 사용자들은 기존의 안내가 부족하던 병원 홈페이지에서 벗어나, 본인에게 필요한 서비스를 주도적으로 찾아 이용할 수 있습니다.

#### 1. 사용자 중심형 AI 챗봇 서비스
- 한눈에 이해하기 어려운 기존의 병원 홈페이지에서 벗어나, 환자 본인에게 필요한 서비스와 정보를 주도적으로 찾아 이용할 수 있는 환경을 제공합니다.
- 트리형 구조를 가진 챗봇은 직관적인 UI로 사용자가 원하는 정보를 빠르게 얻을 수 있도록 도와줍니다

#### 2. 딥러닝 기반 진료과 추천 시스템
- 딥러닝을 이용한 자연어처리 기술을 바탕으로 환자가 호소하는 증상을 분석하여 어느 진료과로 가야 최상의 치료를 받을 수 있는지 판단할 수 있도록 도와줍니다.

#### 3. 비대면 의료 상담 서비스
-  GOP/GP 근무와 같은 지리적 한계와 COVID-19와 같은 시대적 상황을 극복하고, 군장병의 건강을 보장하기 위한 기본적인 건강 상담 서비스를 제공합니다.

#### 4. 온라인 진료 예약 서비스
- 진료 대기 시간을 최소화하고, 어렵게 군병원에 발걸음 하는 모든 장병들이 빠짐없이 최상의 의료서비스를 받을 수 있도록 온라인 진료 예약 서비스를 제공합니다.

## 기능 설계

### Web Front-end

#### 디자인 구성

| semantic ui                                                                                                                                                                                            |                                                                    styled-component                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------: |
| !["semantic img"](https://miro.medium.com/max/450/1*2RMwBa_m2kSculsGYB48uQ.png)                                                                                                                        |                             !["styled img"](https://blog.kakaocdn.net/dn/AMVCv/btqGbqFAeG4/VL93Ekz0y1iyALV25fAcS1/img.png)                             |
| 많은 템플릿과 객체(ex : button, table 등)을 제공해주고, 이들을 커스터마이징하기 쉽게 구현되어 있습니다. 또한 모든 객체들은 반응형으로 구성되어 반응형웹을 제작하기에도 편리하기 때문에 선택하였습니다. | 인라인 스타일을 적용하면 코드의 가독성이 떨어지고 스타일을 변경하는데도 어려움이 있습니다. styled-component는 스타일 객체를 한 데 모아 관리하기 때문에 앞에 설명한 문제점들을 해결해 줄 수 있다고 생각하여 선택하였습니다. |

#### 디자인 구성 방향

- 디자인을 구성할 때는 **semantic ui**에서 제공하는 템플릿을 활용하였습니다. 시간 단축에도 큰 도움이 되고, semantic ui에서 제공하는 객체들을 사용하면 반응형 웹을 제작하기에도
  유리하기 때문입니다.

- **semantic ui**에서 제공하는 템플릿을 기초로 하였기 때문에 목업이나 프로토타입을 만들 필요가 없었습니다.

- Grid 레이아웃을 적용하여 페이지 레이아웃을 구성하기로 하였습니다. [Grid](https://semantic-ui.com/examples/grid.html 'what is grid?')

#### 페이지 구성

- **챗봇 페이지**
  - 챗봇 페이지의 프론트는 오픈소스 프로젝트 [Alpha](https://github.com/IcaliaLabs/alpha)를 활용하였습니다. 코드가 직관적이고 커스터마이징이 편하다는 장점이 있었습니다.

- **예약하기 페이지**

  - 핵심 기능 중 하나이기 때문에 해당 페이지로 접근할 수 있는 방법을 "헤더에 위치한 카테고리", "메인 배너 위 버튼" 이 두 가지로 제시 하였습니다.
  - 군의관들의 정보를 카드형태로 출력하였습니다. 해당 카드를 클릭하면 선택된 군의관의 자세한 정보가 기존 페이지에서 출력될 수 있도록 구성하였습니다.
     불필요한 리디렉션을 방지하고 디자인적으로도 깔끔해 보인다고 생각합니다.
  - 유저(환자)들이 원하는 군의관을 빠르게 찾을 수 있게 하기위해 필터를 적용하였습니다. 자신이 희망하는 진료과를 선택하면 해당 진료과에 속해있는 군의관만
     출력됩니다. (검색을 적용하지 않은 이유는 유저(환자)들이 군의관의 이름을 외우는 경우는 드물다고 생각하였고, 때문에 있으나 마나한 기능이 될 수 있다고 생각했기 때문입니다.)
  
- **공지사항 페이지**

  - 메인 페이지에서 출력하도록 구성하였습니다. 굳이 다른 경로를 이용하여 공지사항을 출력해주는 것 보다 시간적으로 더 효율적이라고 생각했기 때문입니다.

- **병원정보 페이지**
  - "병원정보"는 국군수도병원의 정보를 바탕으로 하였습니다. 저희 페이지에서 출력 가능한 부분은 직접 구현하였고, 그렇지 못한 페이지는 국군수도병원 페이지로 리디렉션이 되도록 구현하였습니다.
  - 네비게이션을 구현하여 원하는 정보(병원 가는 길, 시설안내 등)를 클릭하면 그에 맞는 정보가 페이지에서 출력됩니다.

#### 각 페이지별 구성 기능

- 챗봇 페이지 <br>
<table>
	<tbody>
		<tr>
            <td rowspan="6"><div align="center"><img src="https://github.com/osamhack2020/WEB_Meditact_Meditact/blob/main/src/demo.gif" width="40%" height="40%"></a></div></td>
            <td width="33%">NLP를 이용 한 진료과 분류</td>
        </tr>
        <tr>
            <td>병원 예약 기능</td>
        </tr>
        <tr>
            <td>상담 연결 및 군 병원 정보를 출력</td>
        </tr>
    </tbody>
</table>

- 메인 페이지<br>
<table>
    <tbody>
        <tr>
            <td rowspan="6"><div align="center"><img src="https://github.com/osamhack2020/WEB_Meditact_Meditact/blob/main/src/forReadme/main.png" width="40%" height="40%"></a></div></td>
            <td width="33%"> 헤더 출력기능 </td>
        </tr>
        <tr>
            <td> 공지사항 출력</td>
        </tr>
    </tbody>
</table>

- 예약 페이지<br>
<table>
    <tbody>
        <tr>
            <td rowspan="6"><div align="center"><img src="https://github.com/osamhack2020/WEB_Meditact_Meditact/blob/main/src/forReadme/reservation.png" width="40%" height="40%"></a></div></td>
            <td width="33%"> 군의관 리스트 출력 </td>
        </tr>
        <tr>
            <td>군의관 필터기능</td>
        </tr>
        <tr>
            <td>군의관 선택기능</td>
        </tr>
    </tbody>
</table>

- 예약 페이지 _예약하기 클릭 시_<br>
<table>
    <tbody>
        <tr>
            <td rowspan="6"><div align="center"><img src="https://github.com/osamhack2020/WEB_Meditact_Meditact/blob/main/src/forReadme/reservation2.png" width="40%" height="40%"></a></div></td>
            <td width="33%"> 군의관 정보 출력</td>
        </tr>
        <tr>
            <td>예약가능시간 출력</td>
        </tr>
        <tr>
            <td>군의관 선택기능</td>
        </tr>
    </tbody>
</table>

### Web Back-end

3가지 주요 기능별로 API의 End Point를 구별하였습니다.

User, Post, Appt ( 유저, 글쓰기, 예약 ) 3가지 API를 구성하였으며, 그에 따른 API 명세는 다음과 같습니다.

1. [USER API](./server/APIdocs/UserAPI.md) ( 유저 정보 관련 API )
2. [POST API](./server/APIdocs/PostAPI.md) ( 상담 글쓰기 관련 API )
3. [APPT API](./server/APIdocs/ApptAPI.md) ( 예약관련 API )

### Infra Structure

Google Cloud Platform 을 기반으로 채팅 앱을 컨테이너화 했습니다.

도커로 만들어진 컨테이너는 쿠버네티스가 컨트롤 합니다.

쿠버네티스는 24시간동안 무중단으로 챗봇이 작동하는 것을 돕습니다.

[![meditact-Infra.png](https://i.postimg.cc/yYYk4kGs/meditact-Infra.png)](https://postimg.cc/xqh0LTY4)


## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)

- ECMAScript 6 지원 브라우저 사용

- 권장: Google Chrome 버젼 77 이상

## 기술 스택 (Technique Used)

### Deep Learning

<table>
<tbody>
    <tr>
        <td width="60">
            <div align="center"><a href="https://www.python.org" target="_blank"> <img src="https://www.python.org/static/img/python-logo@2x.png" alt="python" height="40"/> </a><br>Python</br></div>
        </td>
          <td>
            <div align="center"><a href="https://www.tensorflow.org/" target="_blank"> <img src="https://www.gstatic.com/devrel-devsite/prod/vfe8af62599ec445552c3fb43608c37ff46463c9fce3b14d8ee63b2e71edddffd/tensorflow/images/lockup.svg?dcb_=0.6050776491075445" alt="tensorflow" height="40"/> 
            </a><br>Tensorflow</br></div>
        </td>
        <td>
            <div align="center"><a href="https://keras.io/" target="_blank"> <img src="https://keras.io/img/logo.png" alt="keras" height="40"/> </a><br>Keras</br></div>
        </td>
        <td width="60">
            <div align="center"><a href="https://github.com/huggingface/transformers" target="_blank"> <img src="https://raw.githubusercontent.com/huggingface/transformers/master/docs/source/imgs/transformers_logo_name.png" alt="transformers" height="40"/> </a><br>Transformers</br></div>
        </td>
    </tr>
</tbody>
</table>

### Web Front-end

<table>
<tbody>
    <tr>
        <td width="60">
            <div align="center"><a href="https://nodejs.org" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a><br>Node.js</br></div>
        </td>
          <td>
            <div align="center"><a href="https://babeljs.io/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> 
            </a><br>Babel</br></div>
        </td>
        <td>
            <div align="center"><a href="https://webpack.js.org" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/webpack/webpack-original.svg" alt="webpack" width="40" height="40"/> </a><br>Webpack</br></div>
        </td>
        <td width="60">
            <div align="center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><br>Javascript</br></div>
        </td>
        <td width="60">
            <div align="center"><a href="https://redux.js.org/" target="_blank"> <img src="https://e7.pngegg.com/pngimages/413/852/png-clipart-redux-react-logo-javascript-dq-purple-violet-thumbnail.png" alt="redux" width="40" height="40"/> </a><br>redux</br></div>
        </td>
        <td width="60">
            <div align="center"><a href="https://github.com/zalmoxisus/redux-devtools-extension" target="_blank"> <img src="https://lh3.googleusercontent.com/vCbHTO3hh4rIPl5XPab0ZXYEY1kmwzHvbvd3CPcXxunuCSn8ouz54Kc6xuxR88RP83bErQOt4Q=w128-h128-e365" alt="redux" width="40" height="40"/> </a><br>redux-devtool</br></br></div>
        </td>
    </tr>
</tbody>
</table>

### Web Back-end

<table>
<tbody>
    <tr>
        <td width="60">
            <div align="center"><a href="https://nodejs.org" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a><br>Node.js</br></div>
        </td>
              <td width="60">
            <div align="center"><a href="https://expressjs.com" target="_blank"> <img src="https://expressjs.com/images/express-facebook-share.png" alt="MONGODB" width="40" height="40"/> </a><br>express.js</br></div>
        </td>
          <td>
            <div align="center"><a href="https://babeljs.io/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> 
            </a><br>Babel</br></div>
        </td>
        <td width="60">
            <div align="center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><br>Javascript</br></div>
        </td>
        <td width="60">
            <div align="center"><a href="https://www.mongodb.com/" target="_blank"> <img src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=780&h=408&crop=1" alt="MONGODB" width="40" height="40"/> </a><br>mongoDB</br></div>
        </td>
       <td width="60">
            <div align="center"><a href="https://mongoosejs.com/" target="_blank"> <img src="https://cms-assets.tutsplus.com/uploads/users/34/posts/29527/preview_image/mongoose.jpg" alt="MONGODB" width="40" height="40"/> </a><br>mongoose</br></div>
        </td>
​</tbody>
</table>

### Infra

<table>
<tbody>
    <tr>
        <td width="60">
            <div align="center"><a href="https://www.docker.com/" target="_blank"> <img src="https://media.vlpt.us/images/nickanism/post/06e649c9-fc39-406a-9c54-375bd2ab0d62/lfVWBmiW_400x400.png" alt="docker" width="40" height="40"/> </a><br>Docker</br></div>
        </td>
              <td width="60">
            <div align="center"><a href="https://kubernetes.io/" target="_blank"> <img src="https://miro.medium.com/max/800/1*WpKHLIDsJZgWKJe-SkOtcg.png" alt="kubernetes" width="40" height="40"/> </a><br>Kubernetes</br></div>
        </td>
          <td>
            <div align="center"><a href="https://cloud.google.com/gcp" target="_blank"> <img src="https://cloud.google.com/images/social-icon-google-cloud-1200-630.png" alt="gcp"  height="40"/> 
            </a><br>Google Cloud Platform</br></div>
        </td>
 </tbody>
</table>

## 설치 안내 (Installation Process)

### 공통 사항

**git clone**

```
$ git clone https://github.com/osamhack2020/WEB_Meditact_Meditact
```

### Web Front-end

**필수 의존성 설치**

```
$ yarn install ( or npm install )
```

### Web Back-end

**환경 변수 설정**

server 디렉토리 최상단에 .env 파일을 만들어서 다음과 같은 세 환경 변수를 지정.

```
PORT
SECRET_KEY
DB_URL
```

**필수 의존성 설치**

```
$ yarn install ( or npm install )
```

## 프로젝트 사용법 (Getting Started)

### Web Front-end

**실행**

```
$ yarn start ( or npm start )
```

### Web Back-end

**실행**

서버 실행 전 Mongod이 실행 중인지 확인이 필요합니다.

또한, 설정 해놓은 환경변수의 문제가 없는지도 확인이 필요합니다.

```
$ yarn start ( or npm start )
```

[기능설계](#기능-설계) 파트의 APIdocs를 참고하여 사용하실 수 있습니다.

## 팀 정보 (Team Information)

- [김성일 상병](https://github.com/kshired) E-mail : [shiroed1211@gmail.com](mailto:shiroed1211@gmail.com), **팀장 및 Web-Backend**

- [강재현 상병](https://github.com/ashhyun) E-mail : [youkind98@gmail.com](mailto:youkind98@gmail.com), **Deep Learning**

- [이현훈 대위(군의관)](https://github.com/hyeonhoonlee) E-mail : [jackli0373@gmail.com](mailto:jackli0373@gmail.com), **Deep Learning**

- [김찬호 일병](https://github.com/chanhhoo) E-mail : [hpyho33@naver.com](mailto:hpyho33@naver.com), **Web-Frontend**

- [여종현 상병](https://github.com/mindgitrwx) E-mail : [jonghyeon.rw@gmail.com](mailto:jonghyeon.rw@gmail.com), **Infra**

## 저작권 및 사용권 정보 (Copyleft / End User License)

- [MIT LICENSE](https://github.com/osamhack2020/Infra_Meditact_Meditact/blob/master/LICENSE.md)
