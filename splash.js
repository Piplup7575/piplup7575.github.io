// haha definitely didn't steal this 
function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}

var say = [];
say[0] = "Welcome!";
say[1] = "Hello!";
say[2] = "[object Object]";
say[3] = "Error 404, Penguin not found";
say[4] = "mogus";
say[5] = "Do you want to have a bad time?";
say[6] = "Do you wish to have a unfortunate experience";
say[7] = "I ask you if you are capable enough to engage in a terrible experience for yourself and I being the cause";
say[8] = "I Sans the Skeleton wish to ask if you comprehend the fact that I will give you a unfortunate time due to the fact that you ended the lives of whom I care";
say[9] = "You keep using that word. I do not think it means what you think it means.";
say[10] = "c h a o s";
say[11] = "a- amogu- *gets shot with laser*";
say[12] = "null";
say[13] = "We didn't start the fire! It was always burning, since the world's been turning";
say[14] = "We started the fire! It was always burning, since the world's been turning";
say[15] = "This code has definitely not been stolen in any way!";
say[16] = "Check out my github!";
say[17] = "Check out my projects!";
say[18] = "Check out my about me!";
say[19] = "imagine school";
say[20] = "(╯°□°)╯︵ ┻━┻";
say[21] = "pain.";
say[22] = "Check out my Music!";

var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}