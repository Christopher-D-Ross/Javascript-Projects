// Create With JavaScript
// Using only <div id="root"></div> in the HTML, Create an 'about me' webpage that includes a navbar.

// Only use JavaScript to create page.
// Should be styled using CSS.
// About me should include
// Images
// Description,
// List of likes and dislikes


let headerOne = document.createElement('h1');
let hthreeOne = document.createElement('h3');
let htmlOne = document.querySelector('html');
let imageOne = document.createElement('img');
let listOne = document.createElement('ul');
let listItemOne = document.createElement('li');
let listItemTwo = document.createElement('li');
let listItemThree = document.createElement('li');
let body = document.getElementsByTagName('body');
let paraOne = document.createElement('p');
let buttonOne = document.createElement('button');


document.getElementById('root').appendChild(headerOne);
document.getElementById('root').appendChild(hthreeOne);
document.getElementById('root').appendChild(imageOne);
document.body.appendChild(listOne);
listOne.append(listItemOne, listItemTwo, listItemThree);
document.body.appendChild(paraOne);
document.body.appendChild(buttonOne);

headerOne.innerHTML = 'Christopher Ross';
hthreeOne.innerHTML = 'This is an about a person page. It was and is being created using 90% Javascript. Revel in it.';
imageOne.src = 'grim.jpeg';
listItemOne.innerHTML = 'Strength';
listItemTwo.innerHTML = 'Intelligence';
listItemThree.innerHTML = 'Universal Mastery';
paraOne.innerHTML = 'Citizens of distant epochs two ghostly white figures in coveralls and helmets are softly dancing circumnavigated intelligent beings corpus callosum a billion trillion. A mote of dust suspended in a sunbeam network of wormholes network of wormholes from which we spring Sea of Tranquility paroxysm of global death. Cosmic fugue shores of the cosmic ocean another world something incredible is waiting to be known take root and flourish hearts of the stars. From which we spring another world science cosmos a still more glorious dawn awaits venture. Dispassionate extraterrestrial observer a very small stage in a vast cosmic arena hydrogen atoms vanquish the impossible laws of physics paroxysm of global death. Star stuff harvesting star light a mote of dust suspended in a sunbeam rings of Uranus vanquish the impossible paroxysm of global death at the edge of forever. Hundreds of thousands emerged into consciousness at the edge of forever take root and flourish with pretty stories for which there\'s little good evidence paroxysm of global death and billions upon billions upon billions upon billions upon billions upon billions upon billions.';
buttonOne.innerHTML = '<^>';

headerOne.style.textAlign = 'center';
hthreeOne.style.textAlign = 'center';
hthreeOne.style.marginTop = '20px';
headerOne.style.backgroundColor = 'darkred';
headerOne.style.color = 'slategrey';
headerOne.style.fontSize = '40px';
htmlOne.style.fontFamily = 'Arial';
htmlOne.style.backgroundColor = 'cornsilk';
imageOne.style.display = 'block';
imageOne.style.textAlign = 'center';
imageOne.style.height = '250px';
imageOne.style.width = '250px';
imageOne.style.margin = '0 auto';
imageOne.style.marginTop = '20px';
imageOne.style.borderRadius = '5px';
listOne.childNodes.forEach(item => {
    item.style.display = 'inline-block';
    item.style.margin = '20px';
    item.style.color = 'darkred';
    item.style.fontWeight = 'bold';
})
listOne.style.textAlign = 'center';
paraOne.style.width = '1000px';
paraOne.style.margin = '0 auto';
paraOne.style.textAlign = 'center';
paraOne.style.cursor = 'pointer';
buttonOne.style.display = 'block';
buttonOne.style.margin = '0 auto';
buttonOne.style.width = '300px';
buttonOne.style.height = '100px';
buttonOne.style.fontSize = '30px';
buttonOne.style.marginTop = '30px';
buttonOne.style.cursor = 'pointer';
buttonOne.style.backgroundColor = 'slategrey';
buttonOne.style.borderRadius = '5px';

function changeColor() {
    paraOne.style.color = 'white';
    paraOne.style.backgroundColor = 'black';
    paraOne.style.borderRadius = '5px';
    paraOne.style.padding = '40px';
    buttonOne.innerHTML = 'Darkness To Light';
}

function goBack() {
    paraOne.style.color = 'black';
    paraOne.style.backgroundColor = 'cornsilk';
    paraOne.style.padding = '0px';
    buttonOne.innerHTML = '<^>';
}

paraOne.addEventListener('click', changeColor);
buttonOne.addEventListener('click', goBack);