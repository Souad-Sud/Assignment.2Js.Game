const gameQuestions = [
  
  {
    question : "People buy me to eat, but never eat me!!!!!!  What am I?" ,
    answer : "Plate" ,
    message : "It is not that simple right....... you just need little imagination :)",
  },
  {
    question : "You see me once in June, twice in November, and not at all in May!!!!!  What am I?" ,
    answer : "E" ,
    message : "Sometimes the answer is in the question: It is the letter E",
  },
  {
    question : "I shoot but never kill!!!!!!!!! What am I?" , 
    answer : "Camera" ,
    message : "Commmmmm on. You know I shoot, but I am inocente",
  }, 
  {
    question : "I am a delicious way of representing data!!!!!!! What am I?" ,
    answer : "Pie chat" ,
    message : "Hahahaha it is a Hard one I know nice Try",
  }, 
  {
    question : "What can you add to a bucket full of water to make it lighter!!!!!!!!!" ,
    answer : "Hole" ,
    message : "The only way to get it empty is a hoooooole.",
  }, 
  {
    question : "I am a sister, but I may not have any siblings!!!!!!? What am I?" ,
    answer : "Nun" ,
    message : "You did not know!!!! then you should watch the Nuuun ",
  }, 
  {
    question : "I am a bird, I am a fruit, and I am a person!!!!!. What am I?" ,
    answer : "Kiwi" ,
    message : "Yes It is a Kiwiiiiiiii is the answer because A kiwi is a person from New Zealand. Kiwi is a New Zealand bird with a long beak, short wings, and no tail. Kiwi: and is a small fruit with thin brown skin covered with small  hairs. "
  },                                                                                         
  {
    question : "Mary's mother has three children; May, June, and...?!!!!", 
    answer : "Mary",
    message : "As I said before, the answer is in the question.",
  }, 
  {
    question : "What can you catch, but not throw !!!!",
    answer : "Cold",
    message : "This one is funny, buut!!! not when you catch it: :("
  }, 
  {
    question : "All 5 brothers are busy. Ola is reading, Peter is cooking, Steve is playing chess, and Rasmus is doing laundry. What the fifth brother is doing!????? !?????",
    answer : "Playing chess",
    message : "This one is tricky :p"
  }
];

const button = document.querySelector("#start_button");
let questions = 10;
const playGame = () => {
  let wrongQuestions = 3;
  let userWins = 0;
  window.alert(
    `Hello,
        
    welcome to the game!!!!!!!!!!!!  Let me explain to you how to play!!

    It's a very nice and Fynny riddle game. All you have to do is 
  
    to guess

    an answer -----------BUUUT!!!--------- think before you start: `);
  while(wrongQuestions > 0) {
  let randomQuestionIndex = Math.floor(Math.random() * (gameQuestions.length));
  let randomQuestion = gameQuestions[randomQuestionIndex];
  let userGuess =  prompt(` questions:  ${randomQuestion.question}`);  
  if(userGuess === "") {
    window.alert("Com on You should enter an answer---------.)");    
  } else if(userGuess.toUpperCase() === randomQuestion.answer.toUpperCase()) {
    window.alert(`Bravo -------- ${randomQuestion.answer}--------- is the good answer`);
    userWins++;             
        alert( "! You have got  "  + userWins + " of " + questions + " right ");   
        if(userWins === questions) {
          let finishTheGame = prompt(`You have finished the game -----Your score is ${userWins} / ${questions} congratulations---------- You are genius Enter finish to end the game`) ;
          if(finishTheGame === "finish") {
            startGame() = false;
            break;
            }                    
          }
        } else  {
          window.alert(`-------${userGuess}---  ---- is not correct. the right answer is ${randomQuestion.answer}------- ${randomQuestion.message} `);      
          wrongQuestions--
        }   
      }            
}

const startGame = () => {
  let PlayAgain = true;
  while(PlayAgain) {
  playGame();
    for(let i = 0; i <= 10; i++) {
    let wrongQuestions = 3;
    if(i === wrongQuestions) {
      let userInput = prompt(`You have got -------${wrongQuestions}-------wrong questions!!!! Do you want to play again ???? Enter yes to stop playing`);     
      if (userInput === "yes") {
        PlayAgain = false;
        alert("I hope you enjoyed the game.")
        }else {
        PlayAgain = true
        }
      }
    }
  } 
}

button.addEventListener('click', function() {
startGame();     
})