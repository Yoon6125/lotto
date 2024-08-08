var a=6;

var my_choose_lotto= new Array();
var lotto= new Array();
var bonus= new Array(1);
var my_bonus= new Array(1);
// lotto=[2,3,19,20,45,13];
window.onload=function(){

}
function lottery(){

    for(i=0 ; i<a; i++){
        var number=prompt("로또 값을 입력해주세요(1~45): ").trim();//로또 값을 받을때 공백을 제거
        var parsedNumber = parseInt(number,10);//array() 안에 있는 데이터는 문자로 인식함-> 숫자로 인식하게 바꿈


        if(!number){//공백 입력시 동작
            alert("값이 없습니다.");
            i--;
        }else if(isNaN(parsedNumber)||parsedNumber <1 || parsedNumber >45){//1~45 사이 수가 아닌 수를 입력했을때 동작
            alert("1~45 사이의 숫자를 넣어주세요.");
            i--;
        }else if(sameNum2(parsedNumber)){//중복 수 처리 동작
            alert("중복된 값입니다.");
            i--;
        }else{//중복이 안된 element 입력
            my_choose_lotto.push(number);
        
        }
    }
    
    // //랜덤하게 난수를 만들고(1~45) 6칸 배열에 집어넣되, 중복된 수를 넣지 않는다
    // for(i=0 ; i<a; i++){
    //     var rand= Math.floor(Math.random()*45+1);
    //     //입력받은 랜덤수와 배열내 원소가 다르다면 if 실행 아니라면 else 실행
    //     if(! sameNum2(rand)){
    //         my_choose_lotto.push(rand);
    //     }else{
    //         i--;
    //     }
        
    // }

    //랜덤하게 난수를 만들고(1~45) 6칸 배열에 집어넣되, 중복된 수를 넣지 않는다
    for(i=0 ; i<a; i++){
        var rand_com= Math.floor(Math.random()*45+1);
        //입력받은 랜덤수와 배열내 원소가 다르다면 if 실행 아니라면 else 실행
        if(! sameNum1(rand_com)){
            lotto.push(rand_com);
        }else{
            i--;
        }
    }
    
    // lotto=[1,2,3,4,5,6];
    // my_choose_lotto=[1,2,3,4,7,6];
    
    
    document.write("로또번호(보너스 숫자 x): "+lotto);
    document.write("<br>");
    document.write("나의 로또번호(보너스 숫자 x): "+my_choose_lotto);
    document.write("<br>");
    hr();
    //보너스 번호 추가 (1~45까지)
    my_bonus=Math.floor(Math.random()*45+1);
    bonus=Math.floor(Math.random()*45+1);
    
    
    var total_lotto=lotto+","+bonus;
    var total_my_lotto=my_choose_lotto+","+my_bonus;
    hr();
    dw("로또 번호: "+total_lotto);
    hr();
    dw("나의 로또 번호: "+total_my_lotto);
    hr();
    console.log(total_lotto);
    console.log(total_my_lotto);
    
    // document.write(s);
    
    //배열 내 동일한 수가 없는지 확인
    function sameNum1(n){
        return lotto.find((e)=>(e==n)); //lotto 라는 배열 내의 원소가 입력받은 원소와 같을시 리턴
    }
    function sameNum2(n){
        return my_choose_lotto.find((e)=>(e==n));//my_choose_lotto 라는 배열 내의 원소가 입력받은 원소와 같을시 리턴
    }
    
    //두 배열내 같은 값 찾기
    var s= new Array();
    s=my_choose_lotto.filter(x => lotto.includes(x));
    
    console.log(my_choose_lotto.filter(x => lotto.includes(x)));
    
    //맟춘 수 확인
    var correct=s.length;
    hr();
    
    dw("맟춘 수: "+correct);
    
    hr();
    dw("보너스 번호: "+ bonus);
    br();
    dw("내 보너스 번호: "+ my_bonus);
    
    
    
    hr();
    if(correct==6){
        dw("1등");
    }else if(correct==5){
        if(bonus==my_bonus){
            dw("2등");
         }else{
            dw("3등");
    
         }
    }else if(correct==4){
        dw("4등");
    }else if(correct==3){
        dw("5등");
    }else{
        dw("꽝");
    }
    hr();

    // displayBall();
}


    
    
    
    
    
    // document.write(correct);

function displayBall(){
    var resultTags="";
    for(z=0; z<6 ; z++){
        if(s.includes(parseInt(my_choose_lotto[z]))&&(bonus.includes(parseInt(my_bonus[z])))){
            resultTags= resultTags +"<div class='ball win'>"+my_choose_lotto[z]+"<div class='ball win'>"+my_bonus[z]+"</div>"
        }else{
         resultTags= resultTags +"<div class='ball'>"+my_choose_lotto[z]+"<div class='ball'>"+my_bonus[z]+"</div>"
        }

    }
        tagResult.innerHTML = resultTags;
}