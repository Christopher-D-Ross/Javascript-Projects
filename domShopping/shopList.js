let input = document.getElementsByTagName("input")[0];

let submitButton = document.getElementsByTagName("button")[0];

let items = document.getElementById("items");

let removeButton = document.getElementById("buttonR");


console.log(submitButton);

submitButton.addEventListener("click", function(event) {
    let item = document.createElement("li");
    item.style.color = "cornsilk";
    item.style.listStyle = "none";
    item.style.fontSize = '1.5rem';
    item.innerHTML = input.value;
    if(input.value.length > 0) {
        removeButton.style.display = "block";
    };
    items.appendChild(item);

    input.value = "";



})


removeButton.addEventListener("click", function(event) {
    console.log()
})
    

