/* MULTIPLICATION SIMPLE
 * This program should ask multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */


/* main controls the program. 
 * Store the number of questions to ask in a variable called questions.
 * Call askQuestions, sending questions as an argument, which returns the number right. 
 * Give feedback depending on the number right returned: Either "Perfect!" or say 
 * how many right out of the number asked (questions). 
 * @param none
 * @return none
 */
function main() {
    let questions=5
    let right = askQuestions(questions)
    if (right==questions) alert("Perfect!")
    else alert("You got " + right + " out of " + questions)
}


/* askQuestions calls askQuestion() questions times (for loop), sending the question number as an argument. 
 * It counts the number right returned, and returns number right to main() for feedback.
 * @param: {integer} questions 
 * @return: {integer} right (0-questions)
 */
function askQuestions(questions) {
    right=0
    let question=1
    while(question <= questions){
        right+= askQuestion(question)
        question++
    }
}

/* askQuestion asks a multiplication question, using the question parameter to say which
 * question is being asked.  It returns 1 if correct, 0 if incorrect.
 * @param: {integer} question (1 - questions)
 * @return: {integer} correct (0 or 1) or {boolean} correct
 */
function askQuestion(question){
  let a =  Math.floor(Math.random()*7)+3;
  let b =  Math.floor(Math.random()*7)+3;
  let product= a*b
  let equation= question(a*b)
  answer= prompt(equation)
  if (answer==product) alert("Correct");
    else alert("Wrong")
}