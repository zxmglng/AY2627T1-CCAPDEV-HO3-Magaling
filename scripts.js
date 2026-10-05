let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

function generateQuestion() {
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);

    operator = operators[Math.floor(Math.random() * operators.length)];

    if (operator == "+"){
        correctAnswer = num1 + num2;
    }
    else if (operator == "-") {
        correctAnswer = num1 - num2;
    }
    else if (operator == "*") {
        correctAnswer = num1 * num2;
    }

    $("#question").text(num1 + " " + operator + " " + num2);
}


function checkAnswer() {
    if ($("#answer").val()=="") {
        return;
    }
    
    let answer = Number($("#answer").val());
    if (answer == correctAnswer) {
        score++;

        $("#message").text("Correct!");
        $("#message").css("color", "green");
    }
    else {
        $("#message").text("Wrong! Correct answer is " + correctAnswer);
        $("#message").css("color", "red");
    }

    $("#score").text(score);
    $("#answer").val("");
    
    generateQuestion();
    if (score == 5) {
        $("#div-questions").hide();
        $("#div-success").show();
    }
}


function playAgain() {
    score = 0;

    $("#score").text(score);
    $("#message").text("");
    $("#answer").val("");
    $("#div-success").hide();
    $("#div-questions").show();
    generateQuestion();

}

generateQuestion();
