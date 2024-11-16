const gameQuestions = [
  [
    {
      question : "People buy me to eat, but never eat me!!!!!!  What am I?" ,
      answer : "Plate" ,
      message : "It is not that simple right....... you just need little imagination :)",
    },

  ],
  [

    {
      question : "You see me once in June, twice in November, and not at all in May!!!!!  What am I?" ,
      answer : "E" ,
      message : "Sometimes the answer is in the question: It is the letter E",
    },
  ],
  [

    {
      question : "I shoot but never kill!!!!!!!!! What am I?" , 
      answer : "Camera" ,
      message : "Commmmmm on. You know I shoot, but I am inocente",
    },
  ],
  [
    {
      question : "I am a delicious way of representing data!!!!!!! What am I?" ,
      answer : "Pie chat" ,
      message : "Hahahaha it is a Hard one I know nice Try",
    },
  ],
  [
    {
      question : "What can you add to a bucket full of water to make it lighter!!!!!!!!!" ,
      answer : "Hole" ,
      message : "The only way to get it empty is a hoooooole.",
    },
  ],
  [

    {
      question : "I am a sister, but I may not have any siblings!!!!!!? What am I?" ,
      answer : "Nun" ,
      message : "You did not know!!!! then you should watch the Nuuun ",
    },
  ],
  [
    {
      question : "I am a bird, I am a fruit, and I am a person!!!!!. What am I?" ,
      answer : "Kiwi" ,
      message : "Yes It is a Kiwiiiiiiii is the answer because A kiwi is a person from New Zealand. Kiwi is a New Zealand bird with a long beak, short wings, and no tail. Kiwi: and is a small fruit with thin brown skin covered with small  hairs. "
    },                                                                                        
  ],
  [    
    {
      question : "Mary's mother has three children; May, June, and...?!!!!", 
      answer : "Mary",
      message : "As I said before, the answer is in the question.",
    },
  ],
  [
    {
      question : "What can you catch, but not throw !!!!",
      answer : "Cold",
      message : "This one is funny, buut!!! not when you catch it: :("
    },
  ],
  [
    {
      question : "All 5 brothers are busy. Ola is reading, Peter is cooking, Steve is playing chess, and Rasmus is doing laundry. What the fifth brother is doing!????? !?????",
      answer : "Playing chess",
      message : "This one is tricky :p"
    }
  ]
];


const button = document.querySelector("#start_button");
let PlayAgain = true;
let attempt = 0;
//I tried to use attempt in a loop, but it does not work i wanted that the user after 2 tries failed he gets the answer but the loop start from the begining and stoped
//while(attempt < 2) ==> prompt question if question is correct continu otherwise if(attempt === 1) ==> incorrect else show the answer.
button.addEventListener('click', function() {

    for(let i = 0; i < 5; i++) {
      let userWins = false;
      window.alert(
      `Hello,
              
      welcome to the game!!!!!!!!!!!!  Let me explain to you how to play!!
    
      It's a very nice and Fynny riddle game. All you have to do is 
        
      to guess

      an answer -----------BUUUT!!!--------- think before you start: `);

    while(!userWins) {
      let randomCategpryIndex = Math.floor(Math.random() * (gameQuestions.length));
      let randomQuestionIndex = Math.floor(Math.random() * (gameQuestions[randomCategpryIndex].length));
      //I assign random questions answer and message to index. 
      let {question, answer, message} = gameQuestions[randomCategpryIndex][randomQuestionIndex];
      let userGuess =  prompt(` questions:  ${question}`);
  
        if(userGuess.toUpperCase() === answer.toUpperCase()) {
          window.alert(`Bravo -------- ${answer}--------- is the good answer`);
          userGuess = true;
           
        }else if(userGuess === ""){
          window.alert("Com on You should enter an answer---------.)");    
        }else 
          window.alert(`-------${userGuess}------- is not correct. the right answer is ${answer}------- ${message} `);
        
      }
    }
})