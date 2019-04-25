# 우리회사 웹으로 이해하는 프로그래밍 맛보기

---
<!--
page_number: true
$size: A4
footer : KB Card x Fastcampus, Wooyoung Choi, 2019
-->
## Introduce


### 최우영
- Co-founder, Developer at disceptio
- Solution Architect, Web Developer, Instructor
- python web crawling bootcamp(gilbut, 2018 expected)
- Skills: Python, Golang, Julia, Node.js, Google tag manager ...

#### blog: https://blog.ulgoon.com/
#### github: https://github.com/ulgoon/
#### email: me@ulgoon.com

---
## Notice
- 수업의 난이도는 문과생도 이해할 수 있을 정도로 쉽게 진행할 예정입니다.
- 50분 수업, 10분 휴식
- 점심시간: 12시 ~ 13시
- https://github.com/ulgoon/html-for-everyone 에서 슬라이드와 수업에 필요한 자료를 다운로드 받을 수 있습니다.
- https://www.codepen.io/ 에서 기본적인 실습을 진행합니다.
- 브라우저는 Google Chrome!

---
## Index
- 프로그래밍 Warm-up
	- 컴퓨터와 프로그래밍
	- Computational Thinking
	- 웹 이해하기
- 프로그래밍 맛보기
	- HTML/CSS
		- HTML이란?
		- HTML 구현하기, 우리회사 구조 알아보기
		- CSS란?
		- CSS 구현하기, 우리회사 스타일 알아보기


---
## 프로그래밍 Warm-up

---
### IT Jobs Explained With A Broken Lightbulb
https://blog.toggl.com/lightbulb-cartoon-developers/

---
### 프로그래밍을 위한 사전 지식

---
### Computer

- Compute + er: 연산을 수행하는 기계,장치 또는 사람

---
### Computer vs Calculator
<div align="center">
<img src="http://www.publicdomainpictures.net/pictures/160000/velka/ordinateur-de-bureau-pc-1456070535WEH.jpg" style="width:200px;">
<img src="https://static.pexels.com/photos/159804/accountant-accounting-adviser-advisor-159804.jpeg" style="width:200px;">
</div>

- `Stored Program` computer -> Computer
	- Stores and Executes intructions
- `Fixed Program` computer -> Calculator
	- just calculate 

---
## Basic Computer Architecture
![](img/cssca1.1.png)

---
### Computational Thinking
> 정답이 정해지지 않은 문제에 대한 해답을 일반화하는 과정

컴퓨터와 개발자의 동작 및 사고체계를 이해하는데 매우 도움이 됩니다!

---
<iframe width="960" height="540" src="https://www.youtube.com/embed/cDA3_5982h8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

---
### Process of Computational Thinking
1) 문제 조직화(추상화) - Problem Formulation (abstraction)
2) 솔루션 구현(자동화) - Solution Expression (automation)
3) 솔루션 실행 및 평가(분석) - Solution Execution & Evaluation (analyses)

---
### Computational Thinking by example
- 문제인지: **배가고프다!**
- 문제조직화
	- 문제분해
		- 얼마나 배가고픈가
			- 간단히 떼운다
			- 정식을 먹는다
		- 나는 지금 어디인가?
			- 집: 밥솥의 밥 또는 라면을 먹는다
			- 여의도
				- 편의점: 삼각김밥 ~ 도시락
				- 식당: 패스트푸드 ~ 점심뷔페

---
### Computational Thinking by example
- 패턴인지
	- <span style="font-size:24px;">`아! 배가 어느정도 고프면 어디서 뭔가를 먹음으로써 Hunger가 False가 되는구나` </span>
- 일반화/추상화
	- 추상화(간결하고 명확하게 단순화, 일반화, 개념화)
		- <span style="font-size:24px;">`배가 고프면` `{{얼마나}}`배가 고플때, `{{어디}}`에서 `{{어떻게}}`해결함</span>
	- 알고리즘

---
### Computational Thinking by practice


---
## 웹 이해하기

---
### Data?
- 컴퓨터가 처리할 수 있는 문자, 숫자, 소리, 그림 따위의 형태로 된 정보.
- Latin "Datum"의 복수형 "Data"에서 유래

---
### Internet
- Internet(`International Network`): TCP/IP를 활용하여 정보를 주고 받는 통신 네트워크(www)

---
### WWW(World Wide Web)
- URL로 구분될 수 있는 문서와 리소스들이 하이퍼링크를 통해 연결되는 정보공간
- 1989년, Tim Berners-Lee가 CERN의 내부 문서 공유 시스템을 개발


---
## 개발 알아보기


---
### Frontend? Backend?
![](https://davidmles.com/wp-content/uploads/2017/02/frontend-vs-backend-768x432.png)

---
### Frontend
![](https://cdn.pixabay.com/photo/2016/10/14/18/31/glacier-1740889_960_720.jpg)

---
### Backend
![](http://ddi-dev.com/uploads/media/news/0001/01/f2da1c598e2ff9bc29b229773a189d33d38e0252.jpeg)

---
### Web architecture

![](http://www.tutorialspoint.com/nodejs/images/web_architecture.jpg)


---
### 웹, 앱 개발에 쓰이는 언어와 도구들

---
### Frontend(Web)
- HTML/CSS
- javaScript(Web Assembly, dart)
- jQuery
- AJAX
- Frontend Frameworks
	- Angular
	- React.js
	- vue.js
- gulp, webpack, babel, .. 

---
### Frontend(App)
- swift, objC(iOS)
- kotlin, java(Android)
- Lots of Tools..(ex.retrofit, rxjava, cocoa touch)

---
### Backend
- Depend on Language..
```javaScript
{
    java:spring,
    python:[django, flask],
    c,c++: asp.net,
    ruby: ruby on rails,
    php: Laravel,
    javaScript: node.js,
    Golang: itself,
}
```
- Database
- Cloud(AWS, google cloud, MS Azure)

---
### Tools for Developer
- git
- travisCI, jenkins
- slack, trello

---
## HTML/CSS
Requirement
- codepen: https://www.codepen.io/

---
### HTML
- HyperText Markup Language
- 웹사이트의 구조를 정의하기 위해 탄생
- HTML 5.2가 웹 표준

---
![](http://www.yourdictionary.com/images/definitions/lg/7294.blueprint.jpg)

---
### 웹은 표준과 접근성이 매우 중요합니다!
- 위를 준수하지 않으면 검색 점수에서 불리해집니다.
- 접근성을 높여야 보다 다양한 사용자가 상품구매까지 도달할 수 있습니다.
- 현재 웹 표준은 5.2!!

---
### Get Started!
```html
<!doctype html>
<html>
 <head></head>
 <body></body>
</html>
```

---
### Get Started!
```html
<!doctype html>
<html>
 <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, 
  initial-scale=1.0">
  <title>My first HTML</title>
 </head>
 <body></body>
</html>
```

---
### Get Started!
```html
<!doctype html>
<html>
 <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, 
  initial-scale=1.0">
  <title>My first HTML</title>
 </head>
 <body>
  <h1>Home</h1>
  <p>This is home.</p>
 </body>
</html>
```

---
### add Hyperlink
```html
<body>
 <h1>Home</h1>
 <p>This is home.</p>
 <a href="https://www.kbcard.com/">KB 국민카드 바로가기</a>
</body>
```

---
### add Image
```html
<body>
 <h1>Home</h1>
 <p>This is home.</p>
 <a href="https://www.kbcard.com/">KB 국민카드 바로가기</a>

 <img src="http://www.koreaittimes.com/news/photo/201507/51625_20243_1941.jpg">
</body>
```

---
### table for data!
```html
<body>
<!-- beneath img -->
<table>
 <thead>
 </thead>
 <tbody>
 </tbody>
</table>

</body>
```

---
### table for data! - thead
```html
 <thead>
  <tr>
   <th>구분</th>
   <th>서비스영역</th>
   <th>적립률</th>
  </tr>
 </thead>
```

---
### table for data! - tbody
```html
 <tbody>
  <tr>
   <td>주유서비스</td>
   <td>주유</td>
   <td>500/l 적립</td>
  </tr>
 </tbody>
```

---
### div, span
- div는 요소들을 묶어 표현할 때 사용합니다.
```html
<div>
<h1></h1>
<p></p>
</div>

```

- span은 텍스트의 일부에 스타일을 지정할 때 사용합니다.
```html
<p>
<span style="font-weight:bolder;">
KB 국민카드 
</span>
페이지에 오신것을 환영합니다.</p>
```

---
## List
1. `<ul>`: unordered list
- `<ol>`: ordered list

```html
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>

<ol>
<li>Item 1</li>
<li>Item 2</li>
</ol>
```

---
## 우리회사 페이지 구조 알아보기
with Google Chrome 개발자도구


---
### CSS

---
## CSS
- Cascading Style Sheet
- 웹 문서(HTML)의 스타일을 간단하게... 꾸밀 수 있도록 도와주는 스타일 문서
- 현재 CSS3 릴리즈

---
## So, CSS is ..
![](https://i.imgur.com/Q3cUg29.gif)

---
## So, CSS is ..
![](https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg)

---
## CSS를 적용하는 법

---
### 1. Internal Stylesheet
```html
<head>
 <style>
 body {background-color:#bbbbbb;}
 </style>
</head>
```

---
### 2. In-line Stylesheet
`<span style='color:gray;'></span>`

---
### 3. style.css(External Stylesheet)
- index.html이 있는 디렉토리에 static 디렉토리를 생성하세요
- static 디렉토리에 style.css파일을 만드세요
- index.html의 head에 style.css를 적용하면 끝!
`<link rel="stylesheet" type="text/css" href="static/style.css">`

---
## 왜 style.css를 써야할까요??
without CSS
```html
<p style='color:#ff0000;'>blah blah 1</p>
<p style='color:#00ff00;'>blah blah 2</p>
<p style='color:#0000ff;'>blah blah 3</p>
```

with CSS
```html
<p class='font-red'>blah blah 1</p>
<p class='font-green'>blah blah 2</p>
<p class='font-blue'>blah blah 3</p>

```
```css
.font-red {color:#ff0000;}
.font-green {color:#00ff00;}
.font-blue {color:#0000ff;}
```

---
## id, class, just tags
```css
#some-id {color:#ff0000;}

.some-class {color:#00ff00;}

body {background-color:#dddddd;}
```

---
### Font size
em 대문자 M의 너비를 기준으로 크기 조절
px 모니터 픽셀에 따라 크기 변함
pt 포인트. 문서에서 많이 사용함
`font-size: em | px | pt;`

---
### Font Weight
글자 굵기 지정

`font-weight: normal | bold | bolder | lighter | 100 ~ 900`

---
### color
`color: <색상>`
```
rgb(0,255,0)
green
#00ff00
#0f0
```

---
## Font Family

웹 폰트를 지정할 때에는 다음과 같이 진행합니다.

ex: `https://fonts.google.com/`

html
```html
<link href="https://fonts.googleapis.com/css?
family=Nanum+Gothic" rel="stylesheet">
```
css
```css
.title-text {
	font-family:'Nanum Gothic', sans-serif;
}
```

---
## CSS Box

---
### Content Box width, height
`width: px | em | % | auto`

`height: px | em | % | auto`

---
### Content align
```css
{
	width: 30%;
	margin-left: auto;
	margin-right: auto;
    
    or
    
	margin: 0 auto;
}
```

```css
{
	height: 10em;
	line-height: 10em;
    
    or
    
	vertical-align: middle;
}
```

---
### Margin
외부 여백 영역
```html
<body>
<div class="box1"></div>
<div class="box2"></div>
<div class="box3"></div>
<div class="box4"></div>
</body>
```

---
### Margin
```html
div {
 width: 800px;
 height: 450px;
 background: #0099ee;
}
.box1 {margin:20px 30px 40px 50px;}
.box2 {margin:20px;}
.box3 {margin:20px 30px;}
.box4 {margin:20px 30px 50px;}
```

---
### padding
내부 여백 영역

```css
.padding-box {
 width: 400px;
 height: auto;
 background: #0099ee;
 display: inline-block;
 margin: 10px;
 color: #ffffff;
}

.padding-box1 {padding: 1px;}
.padding-box2 {padding: 1px 10px;}
.padding-box3 {padding: 1px 20px 30px 40px;}
```
```html
<div class="padding-box padding-box1">Sed.</div>
<div class="padding-box padding-box2">
Sed posuere consectetur est at lobortis. </div>
<div class="padding-box padding-box3">
Sed posuere consectetur est at lobortis. </div>
```

---
## 우리회사 스타일 알아보기


---
## Bootstrap
![](https://dotnetnuke.nl/Portals/16/EasyDNNNews/18/600600p3764EDNmainbootstrap-social-logo.png)

---
## Bootstrap
- 트위터(twitter)에서 개발한 CSS Framework
- 웹사이트 디자인 구현에 걸리는 시간을 단축
- 모바일 반응형 웹사이트를 손쉽게 구축 가능
- 비슷비슷한 스타일..

https://getbootstrap.com/

---
## Bootstrap을 활용해 웹사이트를 꾸며봅시다.

---
## Layout
### Container
- grid system을 사용하기 위해 필요한 요소
- `<div class="container"></div>`

### Grid
- 요소를 정렬하여 나타내기 위한 기준
- 12칸을 기준으로 필요한 만큼 구성
- 모바일과 데스크탑에서의 페이지 레이아웃을 다르게 표현 할 수 있음

---
### Grid

`col-`{breakpoint}`-`{width}

#### breakpoint
- sm(576px)
- md(720px)
- lg(960px)
- xl(1200px)

#### width
- `1`~`12`

----
### example
```html
<div class="container">
  <div class="row">
    <div class="col-lg-4 col-sm-12">
    </div>
    <div class="col-lg-4 col-sm-12">
    </div>
    <div class="col-lg-4 col-sm-12">
    </div>
  </div>
</div>
```

---
## Components

https://getbootstrap.com/docs/4.3/components/alerts/

---
## Utilities

https://getbootstrap.com/docs/4.3/utilities/borders/

<link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,800" rel="stylesheet">
<link rel='stylesheet' href='//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css'>

<style>
h1,h2,h3,h4,h5,h6,
p,li, dd {
font-family: 'Nanum Gothic', Gothic;
}
span, pre {
font-family: Hack, monospace;
}
</style>