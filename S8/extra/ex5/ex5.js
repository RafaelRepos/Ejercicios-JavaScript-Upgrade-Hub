// En base a la api Open Trivia (https://opentdb.com/api_config.php), vamos a desarrollar un trivial con la siguiente url 'https://opentdb.com/api.php?amount=10'. Esta api nos devolverá una serie de preguntas con sus respuestas, tanto erroneas como correctas. 

// La idea es hacer un juego en el que el usuario introduzca en un input las caracteristicas del Trivial y que al darle al 'Start Game' le salgan las preguntas de la api para que pueda comenzar el juego. Una vez las responda todas, le mostraremos al usuario el resultado.

// Ten en cuenta que hay dos tipos de preguntas. Aquellas con 3 respuestas erroneas y 1 correcta y aquellas con respuesta verdadero / falso.

let endPoint = `https://opentdb.com/api.php?amount=10`;
let inputQuestions = document.querySelector('[data-function="questions-number"]');
let divContent = document.querySelector('[data-function="gameboard"]');
let buttonStarG = document.querySelector('[data-function="start-game"]');
let buttonCheckG = document.querySelector('[data-function="check-game"]');
let allAnswers = [];
let correctAnwers = [];
let contadorAciertos = 0;

fetch (endPoint)
.then( function(respuesta) {
 return  respuesta.json()
})
.then(function(data) {
    print(data);        
});


//_____________________________________________
function print(data) {
    
    for (const result of data.results) {
;        let h3Ques$ = document.createElement('h3')
        divContent.appendChild(h3Ques$);
        let pAns$ = document.createElement('p');        
        divContent.appendChild(pAns$);        
        h3Ques$.innerHTML = result.question;
        for (const incorrect of result.incorrect_answers) {
            let pAnsInc$ = document.createElement('p');
            divContent.appendChild(pAnsInc$);
            pAnsInc$.innerHTML = incorrect;            
        }
        pAns$.innerHTML = result.correct_answer;     
        correctAnwers.push(result.correct_answer);
    }
}



