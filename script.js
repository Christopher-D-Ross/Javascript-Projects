1// alert('Welcome to Chris\'s page...');

let marsRover = "Hello World"

console.log(marsRover)

let ranTh = "mars rover"

function printNumbers(num1, num2) {
    while (num1 <= num2) {
    console.log(ranTh + ' ' + num1);
    num1++;
  }
  }
printNumbers(1,10)

var theFeet = ["terra", "stone", "beatnik"]

for(let i = 0; i < theFeet.length; i++) {
    console.log(theFeet[i]);
}
let backWar = ranTh.split('').reverse().join('')
console.log(ranTh)
console.log(backWar)

function reverseIt(str) {
   return str.split('').reverse().join('');
}

console.log(reverseIt("christopher ross"));

console.log(typeof reverseIt)

console.log(theFeet.slice(0,2))


let goodS = 0.2
let fairS = 0.15
let badS = 0.10

function tipCalc(bill, service) {
  if(service === "good") {
    return "Your good tip is " + bill * goodS + ".";
  } else if(service === "fair") {
    return "Your good tip is " + bill * fairS + ".";
  } else if(service === "bad") {
    return "Your good tip is " + bill * badS + ".";
  } else {
    return "You have decided not to tip.";
  }
}

console.log(tipCalc(37,"good"))

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


const vowelList = ["a","e","i","o","u"];
const vowelTest = ["G", "o", "o", "d"];
let longWord = []
for(let i = 0; i < vowelList.length; i++) {
  for(let j = 0; j < vowelTest.length; j++) {
    if(vowelList[i] === vowelTest[j]) {
      longWord.push(vowelList[i]);
    }
  }
};

console.log(longWord);

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

// console.log(leetSpeak('leet'));
console.log(leetSpeak('real life spy talk'));

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

console.log(plusFive("Man"));



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
console.log(dash1.join(''));
console.log(phrase);
console.log(dash2.join(''));
return;
}
 console.log(dashW("Welcome To Olympus"))

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