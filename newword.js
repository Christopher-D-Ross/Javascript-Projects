//LeetSpeak Function
let newWord = [];
function leetSpeak(str) {
  for(let i = 0; i < str.length; i++)
    if(str[i]==="a") {
      newWord.push("4");
    }else if(str[i]==="e"){
      newWord.push("3");
    }else if(str[i]==="g"){
      newWord.push("6");
    }else if(str[i]==="i"){
      newWord.push("1");
    }else if(str[i]==="o"){
      newWord.push("0");
    }else if(str[i]==="s"){
      newWord.push("5");
    }else if(str[i]==="t"){
      newWord.push("7");
    }else {
      newWord.push(str[i]);
    }
return newWord.join('');
}

console.log(leetSpeak('real life spy talk'));


//Increasing vowels in a word function
let otherW = [];
function plusFive(str) {
    for(let i = 0; i < str.length; i++) {
        if(str[i]==="a") {
            otherW.push("aaaaa");
        } else if(str[i]==="e") {
            otherW.push("eeeee");
        } else if(str[i]==="i") {
            otherW.push("iiiii");
        } else if(str[i]==="o") {
            otherW.push("ooooo");
        } else if(str[i]==="u") {
            otherW.push("uuuuu");
        } else {
            otherW.push(str[i]);
        }
    }
return otherW.join('');
}

console.log(plusFive("counter"));





//Banner function below
let dash1 = [];
let dash2 = [];

function dashW(phrase) {
    for(let i = 0; i < phrase.length; i++) {
        while(i < phrase.length) {
            dash1.push("-");
            dash2.push("-");
            i++;
        }
    }
console.log("-" + dash1.join('') + "-");
console.log("-" + phrase + "-");
console.log("-" + dash2.join('') + "-");
return;
}
dashW("Welcome To Olympus");





 let boxT = [];
 let boxLs = [];
 let boxRs = [];
 let boxB = [];

 function boxOfL(numT) {
    for(let i = 0; i < numT; i++) {
        while(i < numT) {
            boxT.push("-");
            boxLs.push("|");
            // boxRs.push(" ");
            boxRs.push("|");
            boxB.push("-");
            i++;
        }
    }
console.log(boxT.join(''));
console.log(boxLs.join(''));
console.log(boxRs.join(''));
console.log(boxB.join(''));
}

boxOfL(5);
boxOfL(7);
boxOfL(9);
boxOfL(11);
boxOfL(13);

let positiveNumbers = []
function extractNum(arr) {
  for(let i = 0; i < arr.length; i++) {
  if(arr[i] >= 0) {
    positiveNumbers.push(arr[i]);
  }
}
console.log(positiveNumbers);
}

extractNum([1, -3, 5, -3, 0, -666, 777, 82, -22])
