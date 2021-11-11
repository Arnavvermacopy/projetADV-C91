player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
var ans=0;

function send() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    ans=parseInt(number1)*parseInt(number2);

    get_word = "<h4>"+number1+"X"+number2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn- success' onclick='check()'>Check</button>"
    row = get_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
var Question_turn="player_1";
var Ans_turn="player_2";

function check(){
    get_ans=document.getElementById("input_check_box").value;
    ans=get_ans.toLowerCase();
    if (ans==word){
        console.log("correct ans");
        if (Ans_turn=="player_1"){
            console.log("player1 ans");
            player1_score= player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }

        else{
            console.log("player2 ans");
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if (Question_turn=="player_1"){

        Question_turn="player_2";
        document.getElementById("player_question").innerHTML="Question turn- "+player2_name;
    }
    else {
        Question_turn="player_1";
        document.getElementById("player_question").innerHTML="question turn- "+player1_name;

    }
    if (Ans_turn=="player_2"){
        Ans_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer turn- "+player1_name;
    }
    else{
        Ans_turn="player_2";
        document.getElementById("player_answer").innerHTML="Answere turn- "+player2_name;
    }
    document.getElementById("output").innerHTML="";
}