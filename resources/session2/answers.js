  // 카운트다운 만들기
  var countDownDate = new Date("Sep 14, 2018 17:25:00").getTime();
  var x = setInterval(function (){
    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor(distance%(1000*60*60*24)/(1000*60*60));
    var minutes = Math.floor(distance%(1000*60*60)/(1000*60));
    var seconds = Math.floor(distance%(1000*60)/1000);
    
    document.getElementById("demo").innerHTML = days + "일" + hours + "시간" + minutes + "분" + seconds + "초";
    
    if (distance<0){
      document.getElementById('demo').innerHTML = "시험종료";

    }

  }, 1000);
  // 입력 정보 보여주기
  document.getElementById('submit').onclick = function(){
    var inputName = document.getElementById('name').value;
    var inputEmail = document.getElementById('email').value;
    alert(inputName+'님 감사합니다. 입력하신 ' + inputEmail + '로 연락 드리겠습니다.');
  }


