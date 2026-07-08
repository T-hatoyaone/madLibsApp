"use strict";

let userInputs = [];
// index1[0] = Lion, index2[1] = Mouse, index3[2] = adverb, index4[3] = adjective 
// index5[4] = noun, index6[5] = verb 


let numberOfQuestions= 6;
let questionArray= ["Enter any big animal name: ", "Enter name for a smaller one: ", "Enter an adverb: ", "Enter an adjective: ",
     "Enter a noun: ", "Enter a verb: "];
let questionCounter = numberOfQuestions;
let newArray = questionArray.toReversed();
for(let i = newArray.length-1; i >=0; i--){
 questionCounter--;
 const input = prompt (newArray[questionCounter] + `... (${questionCounter})`);
 
if(input.trim() === null|| input.trim()==="" ){
    console.log("You did not enter a text!")
    break;

}else {
    userInputs.push(input); 
 console.log(userInputs + ` (${questionCounter} questions left)`);
}
}
alert("All done! Ready for your totally accurate, not-at-all confusing little fable?")
let originalStory = `One sunny ${userInputs[4]}, a ${userInputs[0]} lay sleeping in the grass.
 A tiny ${userInputs[1]}, scurrying by, ${userInputs[2]} ran right over the ${userInputs[0]}'s nose, waking him up.
 The ${userInputs[3]} ${userInputs[0]} pinned the squeaking ${userInputs[1]} down with his massive paw, ready to ${userInputs[5]} him.
 "Please, let me go!" squeaked the little ${userInputs[1]}. "If you spare my life, I promise I will
 repay you one day."The ${userInputs[0]} chuckled at the idea that a ${userInputs[3]} ${userInputs[1]} could ever help him,
 but his pride softened and he let the ${userInputs[1]} go.Months later, the ${userInputs[0]} was caught in a
 strong hunter's net. He roared ${userInputs[2]} in frustration, unable to break free. Hearing the roar,
 the little ${userInputs[1]} rushed over. Seeing his friend trapped, the ${userInputs[1]} chewed through the 
 thick ropes of the net one by one until the ${userInputs[0]} was free. The ${userInputs[0]} smiled and thanked
 the ${userInputs[1]}, realizing that even the smallest friends can be of great help.`;

 console.log(originalStory);
document.write(originalStory);










































   /*  
   let originalStory = `One sunny afternoon, a mighty lion lay sleeping in the grass.
 A tiny mouse, scurrying by, accidentally ran right over the lion's nose, waking him up.
  The angry lion pinned the squeaking mouse down with his massive paw, ready to eat him.
  "Please, let me go!" squeaked the little mouse. "If you spare my life, I promise I will repay you
   one day."The lion chuckled at the idea that a tiny mouse could ever help him, but his
   pride softened and he let the mouse go.Months later, the lion was caught in a strong 
   hunter's net. He roared loudly in frustration, unable to break free. Hearing the roar,
   the little mouse rushed over. Seeing his friend trapped, the mouse chewed through the 
   thick ropes of the net one by one until the lion was free. The lion smiled and thanked
   the mouse, realizing that even the smallest friends can be of great help.
   */