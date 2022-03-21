let userName = window.prompt('Please enter your name: ')//"Get users name"
let userScore = 0

for (let i = 0; i < questions.length; i++) {//"Start your for "
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        userScore = userScore + 10
        console.log("Correct")
    }
    console.log(userAnswer)
}
window.alert("your score is: "+userScore)
