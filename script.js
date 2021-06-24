let rightOrder = "GOMENXGAMES"
let someLetters = "KOSMEN21UKATAIKA34567890"

let letters = rightOrder+someLetters;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let content = document.querySelector(".content");

for (let i=0; i<letters.length; i++) {
    let letter = letters[i];
    let letterbox = "<p id="+i+" class=\"letterbox\">"+ letter +"</p>";
    content.innerHTML += letterbox;

}

let pLetters = document.querySelectorAll("p");

function refreshPosition() {
    for (let i=0; i<pLetters.length; i++) {
        let randomPosition = "top:"+getRandomInt(content.clientHeight-50)+"px; left:"+getRandomInt(content.clientWidth-50)+"px;";
        pLetters[i].setAttribute("style", randomPosition);
    }
}
refreshPosition();

let letterboxes = document.querySelectorAll(".letterbox");

let container = content;
let testString = "";
container.onmouseover = container.onmouseout = handler;

function log(value) {
    console.log(value);
}

function handler(event) {

    function str(el) {
        if (!el) return "null"
        return el.className || el.tagName;
    }
    if ((event.target.className == "letterbox") && (event.target.style.backgroundColor != "#5b00ff")) {
        if (event.type == 'mouseover') {
            testString += event.target.innerText;
            event.target.style.backgroundColor = "#5b00ff";
            console.clear();
            console.log(testString);
        }

        for (let i=0; i<testString.length; i++) {
            if (testString[i] == rightOrder[i]) {
                console.log("Nice!");
            }
            else {
                refreshPosition();
                testString = "";
                let x = 0;
                while (x<letterboxes.length) {
                    letterboxes[x].style.backgroundColor = "";
                    x++;
                }
            }
            if (testString == rightOrder) {
                let x = 0;
                while (x<letterboxes.length) {
                    letterboxes[x].remove();
                    x++;
                }
                document.querySelector("h1").textContent = "You are done!";
                content.style.backgroundImage = "url(rofl2.jpg)";
            }
        }

        /*
        if (event.type == 'mouseout') {
            event.target.style.backgroundColor = '';
        }
        */
    }
}


