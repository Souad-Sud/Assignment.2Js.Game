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
      //I assign random questions answer and message to index. 
      let randomQuestion = gameQuestions[randomQuestionIndex];
      let userGuess =  prompt(` questions:  ${randomQuestion.question}`);  
        //for(let i = 3; i > 0; i-- ) {}
        // let guesses = 3;
        if(userGuess.toUpperCase() === randomQuestion.answer.toUpperCase()) {
          window.alert(`Bravo -------- ${randomQuestion.answer}--------- is the good answer`);
          userWins++;
          alert( "! You have got"  + userWins + " of " + questions + "right");           
          // break;       
          // alert(guesses = i)       
          //  alert(guesses = i);
          //  break;
          // you wanna play again   
        } else if (userGuess === "") {
          window.alert("Com on You should enter an answer---------.)");  
          // guess left =   
        } else {       
          window.alert(`-------${userGuess}---  ---- is not correct. the right answer is ${randomQuestion.answer}------- ${randomQuestion.message} `);      
          wrongQuestions--
        }
      }
      // user gets 3 guesses
  // for loop _ runs 3 times let i = 3; i> 0. i--
  // if userGuess.toUpperCase() === answer.toUpperCase()) _ break
  // Alert guesses = i
 // alert( "! You got"  + userwins + questions + "right");
}
const  startGame = () => {
      let PlayAgain = true;
  while(PlayAgain) {
     wrongQuestions = 3;
    playGame();
      let userInput = prompt(`You have got ${wrongQuestions} wrong question Do you want to play again ???? Enter yes to stop playing`);    
      if (userInput === "yes") {
        PlayAgain = false;
      }else {
        alert("I hope you enjoyed the game.")
      }
    } 
  //}
}

button.addEventListener('click', function() {
  startGame();     
})