# 우리회사 웹으로 이해하는 프로그래밍 맛보기

---
<!--
page_number: true
$size: A4
footer : KB Card x Fastcampus, Wooyoung Choi, 2018
-->

## javaScript

---
## Review
- Computational Thinking
- HTML
- CSS
- BootStrap

---
## Recap Project
- HTML, CSS, Bootstrap을 활용해 카드 상세페이지 만들어보기
- Layout, Style, Grid는 모두 자유!
- 똑같이 만들어도 좋아요^^

---
## javaScript

---
### javaScript란?
- 객체 기반의 스크립트 프로그래밍 언어
- 웹페이지의 동적인 제어 목적
- Netscape의 Brendan Eich가 모카(Mocha)를 개발
- LiveScript -> javaScript로 개명

---
### HTML was like ..
![](http://www.yourdictionary.com/images/definitions/lg/7294.blueprint.jpg)

---
### And CSS was like ..
![](https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg)

---
### And javaScript is like ..
![](https://media.tenor.com/images/cd455edfed0af426235c0006b3a88c0e/tenor.gif)

---
### Static Web site - 1
<div id="dynamic-btn1" style="width:200px; height:200px; background:red;"></div>

---
### Static Web site - 2
<div id="dynamic-btn2" style="width:200px; height:200px; background:green;"></div>

---
### Static Web site - 3
<div id="dynamic-btn3" style="width:200px; height:200px; background:blue;"></div>


---
### Dynamic Web site
<div id="dynamic-btn" style="width:200px; height:200px; background:black;"></div>
<button type="button" onclick="document.getElementById('dynamic-btn').style.background='red'" style="font-size:20px;">Red</button>
<button type="button" onclick="document.getElementById('dynamic-btn').style.background='green'" style="font-size:20px;">Green</button>
<button type="button" onclick="document.getElementById('dynamic-btn').style.background='blue'" style="font-size:20px;">Blue</button>


---
### Java != javaScript

|Java|vs|javaScript|
|:--:|:--:|:--:|
|Sun|개발|Brendan Eich|
|JVM|구동방식|Script Engine(Browser)|
|C|영향|C|
|인도|Like|인도네시아|

---
### Try "hello world!"

```javaScript
console.log("hello javaScript!");
alert("hello javaScript!");
document.write("hello javaScript!");
```

---
### variable, statements, operation

```javaScript
// declare a,b,c
var a,b,c;
// assign a,b
a = 3;
b = 5;
// assign statements with + operator
c = a + b;
```

---
### functions

```javaScript
function name(parameter1, parameter2, ..) {
    // code to be executed
}
```

---
### functions

```javaScript
function printHello(name) {
    console.log("hello, " + name);
}
```

---
### functions

```javaScript
function aweSum(num1, num2) {
    return num1 + num2;
}
```

---
## Conditional statements - if, else

```javaScript
var a = 10;
if (a===10){
    console.log("a is 10");
} else {
    console.log("a is not 10");
}
```

---
## Conditional statements - if in else

```javaScript
var a = 10;
if (a===10){
    console.log("a is 10");
} else if (a===5){
    console.log("a is 5");
} else {
    console.log("a is neither 10 nor 5");
}
```

---
### =? ==? ===??

- `=`: Assignment Operator(`a=10`)
- `==`: Equal Operator(`1=="1"`)
- `===`: Strict Equal Operator(`1==="1"`)

---
## Conditional statements - switch
```python
Null
```
```javaScript
switch (new Date().getDay()){
    case 0:
    case 6:
        console.log("Weekend!!!");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday..");
        break;
}
```

---
### loop - for

```javaScript
for (i = 1; i < 11; i++) { 
    console.log("hello for "+i+" times");
}
```

---
### loop - while

```javaScript
while (i<11){
    console.log("hello");
    i++;
}
```

---
### loop - break
```python
for i in range(1,10+1):
    if i == 5:
        break
    print("hello for "+i+" times")
```

```javaScript
for (i = 1; i < 11; i++) {
    if (i===5) {break;}
    console.log("hello for "+i+" times");
}
```

---
### loop - continue
```python
for i in range(1,10+1):
    if i%2==0:
        continue
    print("hello for "+i+" times")
```
```javaScript
for (i = 1; i < 11; i++) {
    if (i%2===0) {continue;}
    console.log("hello for "+i+" times");
}
```

---
## 우리회사 javaScript 알아보기

---
### javaScript HTML DOM

---
## DOM
Document Object Model

```html
<!doctype html>
<html>
 <head>
  <meta charset="utf-8">
  <title>My page</title>
 </head>
 <body>
  <h1>Home</h1>
  <p>Hello there!</p>
 </body>
</html>
```

---
## DOM
![](./img/htmldom5.1.png)

---
## with HTML DOM, javaScript can ..
- HTML 요소, 속성 생성, 변경, 삭제
- HTML 이벤트 수행
- CSS 스타일 변경

---
## HTML Document Object
- window는 브라우저의 탭 또는 창을 의미합니다.
- document는 웹페이지의 모든 요소의 소유자입니다.
- element는 document의 하위 요소를 의미합니다.
- attribute는 element의 속성을 의미합니다.
---
### Set document
```html
<!doctype html>
<html>
 <head>
  <meta charset="utf-8">
  <title>DOM Practice</title>
 </head>
 <body>
 <div id="container">
  <h1 id="article-title"></h1>
  <p class="article-text"></p>
 </div>
 </body>
</html>
```

---
### Find Element
```javaScript
document.getElementById(id)
document.getElementsByTagName(tagname)
document.getElementsByClassName(classname)
```
```javaScript
var mainArticle = document.querySelectorAll("div.main-article");
```


### Change Element
```javaScript
element.innerHTML = 'new content'
element.{{attribute}} = 'new value'
element.setAttribute(attribute, value)
element.style.{{property}} = 'new style'
```

---
### Add Element
```javaScript
document.createElement(element)
document.appendChild(element)
document.write(text)
```

### Replace and Delete Element
```javaScript
document.replaceChild(element)
document.removeChild(element)
```

---
### DOM Event
Mouse Event
```javaScript
onclick

onmouseover
onmouseout

onmousedown
onmouseup
```

---
### DOM Event
Keyboard Event
```javaScript
onkeypress

onkeyup
onkeydown
```
<script>
function kpLower(){
var x = document.getElementById("kpInput");
x.value = x.value.toLowerCase();
}
function kuUpper(){
var x = document.getElementById("kuInput");
x.value = x.value.toUpperCase();
}
</script>
<input id="kpInput" onkeypress="kpLower()">
<input id="kuInput" onkeypress="kuUpper()">


---
### DOM Event
Form Event
```javaScript
onchange

oninput

onselect

onsubmit
```
<script>
function chUpper() {
    var x = document.getElementById("chInput");
    x.value = x.value.toUpperCase();
}
function showInput() {
    var x = document.getElementById("shInput").value;
    document.getElementById("showcase").innerHTML = "You mean: " + x;
}
</script>
<form>
<input id="chInput" onchange="chUpper()">
<input id="shInput" oninput="showInput()">
<p id="showcase"></p>
</form>



---
### Add Event Handler
```javaScript
element.onclick = function(){alert('hello')}
```
### Add Event Listener 
```javaScript
element.addEventListener("click", function(){alert('hello')});
```

---
## Countdown with javaScript
<p id="demo"></p>

<script>
var countDownDate = new Date("Sep 14, 2018 17:50:25")
.getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) 
  / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) 
  / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = 
  days + "일 " 
  + hours + "시간 "
  + minutes + "분 " 
  + + seconds + "초 ";


if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script>


---
### add countdown feature

```javascript
<p id="demo"></p>

<script>
var countDownDate = new Date("Sep 14, 2018 17:50:25")
.getTime();

var x = setInterval(function() {
}, 1000);
</script>
```

---
### add countdown feature

```javascript
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) 
  / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) 
  / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = 
  days + "일 " 
  + hours + "시간 "
  + minutes + "분 " 
  + + seconds + "초 ";


if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
```

---
## 사용자 입력정보 표출
```html
<script>
  document.getElementById('submit').onclick = function(){
    var inputName = document.getElementById('name').value
    var inputEmail = document.getElementById('email').value
    alert('신청해주셔서 감사합니다 ' + inputName + ' 님. \n 제출해주신 ' + inputEmail + '로 곧 연락드리겠습니다.')
  }
</script>
```

---
## 실무에서의 활용방안?!

---
## 앞서 만든 프로젝트에 javaScript 한 스푼 첨가하기

---
## Thank you!

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