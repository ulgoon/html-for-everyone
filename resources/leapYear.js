// KBCard(like fizzbuzz)
// 3의 배수 -> 'KB', 5의 배수 -> 'Card', 15의 배수 -> 'KBCard', 나머지 -> 그 수 

for (i=0;i<101;i++){
    if (i%15===0){
        console.log('KBCard');
    } else if (i%3===0){
        console.log('KB');
    } else if (i%5===0){
        console.log('Card');
    } else {
        console.log(i);
    }
}


// 윤년판독기
// 4의 배수 -> 윤년, 100의 배수 -> 평년, 400의 배수 -> 윤년
// solution 1 with plain for, if, continue

for (i=1999;i<2104;i++){
	if (i%4===0){
		if (i%100===0 && i%400!=0){
			console.log(i);
			continue;
		}
		console.log(i,"Leapyear");
	} else {
		console.log(i);
	}
}




// solution 2 with logical operator
for (i=1999;i<2104;i++){
	if (i%400===0 || (i%4===0 && i%100!=0)){
		console.log(i,"Leapyear");
	} else {
		console.log(i);
	}
}
