let score = prompt("What is your score :");

if (score >= 80 && score <= 100) {
  alert("Great job you have highest score :D");
} else if (score >= 70 && score < 80) {
  alert("Good keep it try :)");
} else if (score >= 60 && score < 70) {
  alert("Try again and keep going :O");
} else if (score >= 50 && score < 60) {
  alert("Dont give up :)");
} else if (score >= 40 && score < 50) {
  alert("You need to focus and work harder :O");
} else {
  alert("Bad :( , you need to learn and practice again");
}
