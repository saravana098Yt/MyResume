var js = ["Tic Tac Toe", "Rock Paper Scissors", "Sudoku", "Calculator", "Tip Calculator"];
var js_links = ["https://tic-tac-toe.saravanan6.repl.co/", "https://cricket.saravanan6.repl.co/", "https://sudoku.saravanan6.repl.co/", "https://calculator.saravanan6.repl.co/", "https://js4.saravanan6.repl.co/"];
var js_img = ["tictactoe.png", "cric.png", "sudoku.png", "calc.png", "tip.png"];


const ddd = document.getElementById("ddd");
function createEleinJs(n) {
  for (var i = 0; i < n; i++) {
    var a = document.createElement("a");
    var div = document.createElement("div");
    var span = document.createElement("span");
    ddd.appendChild(a);
    a.appendChild(div);
    a.classList.add("cl");
    a.href = js_links[i];
    div.style.setProperty("background-image", "url(" + js_img[i] + ")");
    div.classList.add("divv");
    div.appendChild(span);
    span.classList.add("cla");

    span.style.setProperty("background", "blue");
    span.innerText = js[i];
  }
}
createEleinJs(5);


var html = ["Scooter web", "sipn-up form", "Profile card", "Preview card", "Skilled e-learning", "Suite landing page", "Product preview card", "Video background Page", "Order summary web", "qr code component web"];

var html_links = ["https://dest.saravanan6.repl.co", "https://assign10.saravanan6.repl.co/", "https://preview-card-2.saravanan6.repl.co/", "https://preview-card-1.saravanan6.repl.co/", "https://assign11.saravanan6.repl.co/", "https://assign12.saravanan6.repl.co/", "https://preview-card.saravanan6.repl.co/", "https://post.saravanan6.repl.co/", "https://helo-1.saravanan6.repl.co/", "https://helo.saravanan6.repl.co/"];

var html_img = ["scooter.png", "signup.png", "preview.png", "preview1.png", "web.png", "web1.png", "preview2.png", "video.png", "web3.png", "qr.png"];
const ddd1 = document.getElementById("ddd1");

function createEleinHtml(n) {
  for (var i = 0; i < n; i++) {
    var a = document.createElement("a");
    var div = document.createElement("div");
    var span = document.createElement("span");
    ddd1.appendChild(a);
    a.appendChild(div);

    a.classList.add("cl");
    a.href = html_links[i];
    div.style.setProperty("background-image", "url(" + html_img[i] + ")");
    div.classList.add("divv");
    div.appendChild(span);
    span.classList.add("cla");

    span.style.setProperty("background", "blue");
    span.innerText = html[i];
  }
}
createEleinHtml(9);

var scratch = ["Sudoku", "Digital clock", "Analog clock"];
var scra_links = ["https://scratch.mit.edu/projects/725667527/fullscreen/", "https://scratch.mit.edu/projects/717604437/fullscreen/", "https://scratch.mit.edu/projects/716224706/fullscreen/"];
var scra_img = ["sudo.png", "digit.png", "analog.png"];
const ddd2 = document.getElementById("ddd2");
function createEleinScratch(n) {

  for (var i = 0; i < n; i++) {
    var a = document.createElement("a");
    var div = document.createElement("div");
    var span = document.createElement("span");
    ddd2.appendChild(a);
    a.appendChild(div);
    a.classList.add("cl");
    a.href = scra_links[i];
    div.style.setProperty("background-image", "url(" + scra_img[i] + ")");
    div.classList.add("divv");
    div.appendChild(span);
    span.classList.add("cla");

    span.style.setProperty("background", "blue");
    span.innerText = scratch[i];
  }
}

createEleinScratch(3);
var cour = ["Grayscale", "Rainbow"];
var cour_links = ["https://codepen.io/hycqjknm-the-styleful/pen/NWMmreE", "https://codepen.io/hycqjknm-the-styleful/pen/mdLgrZY"];
var cour_img = ["grey.png", "data:image/jpeg;base64,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"];
const ddd3 = document.getElementById("ddd3");
function createEleinCoursera(n) {

  for (var i = 0; i < n; i++) {
    var a = document.createElement("a");
    var div = document.createElement("div");
    var span = document.createElement("span");
    ddd3.appendChild(a);
    a.appendChild(div);
    a.classList.add("cl");
    a.href = cour_links[i];
    div.style.setProperty("background-image", "url(" + cour_img[i] + ")");
    div.classList.add("divv");
    div.appendChild(span);
    span.classList.add("cla");

    span.style.setProperty("background", "blue");
    span.innerText = cour[i];
  }
}
createEleinCoursera(2);

const ddd4=document.getElementById("ddd4");

var javalink=["https://github.com/saravana098Yt/FindATeacher/tree/main/src/main/java/Teacher","https://github.com/saravana098Yt/LinkHashMap","https://github.com/saravana098Yt/ChatApplication","https://github.com/saravana098Yt/ArrayList","https://github.com/saravana098Yt/LinkedList","https://github.com/saravana098Yt/Console-in-FindATeacher"];
var java=["FindATeacher","LinkedHashMap","chatApplication","ArrayList","LinkedList","Console-in-FindATeacher"];
var java_img=["find.png","im.jpeg","chat.jpeg","im.jpeg","im.jpeg","im.jpeg"];

function jjj(n){
   for (var i = 0; i < n; i++) {
    var a = document.createElement("a");
    var div = document.createElement("div");
    var span = document.createElement("span");
    ddd4.appendChild(a);
    a.appendChild(div);
    a.classList.add("cl");
    a.href = javalink[i];
    div.style.setProperty("background-image", "url(" + java_img[i] + ")");
    div.classList.add("divv");
    div.appendChild(span);
    span.classList.add("cla");

    span.style.setProperty("background", "blue");
    span.innerText = java[i];
  }
}
jjj(6);

ddd.style = "display:none";
ddd1.style = "display:none";
ddd2.style = "display:none";
ddd3.style = "display:none";
ddd4.style="display:flex";

function htmlinput() {
  ddd.style = "display:none";
  ddd1.style = "display:flex";
  ddd2.style = "display:none";
  ddd3.style = "display:none";
  ddd4.style="display:none";
}
function jsinput() {
  ddd.style = "display:flex";
  ddd1.style = "display:none";
  ddd2.style = "display:none";
  ddd3.style = "display:none";
  ddd4.style="display:none";
}
function scratchinput() {
  ddd.style = "display:none";
  ddd1.style = "display:none";
  ddd2.style = "display:flex";
  ddd3.style = "display:none";
  ddd4.style="display:none";
}
function coursera() {
  ddd.style = "display:none";
  ddd1.style = "display:none";
  ddd2.style = "display:none";
  ddd3.style = "display:flex";
  ddd4.style="display:none";
}

function javainput(){
   ddd.style = "display:none";
   ddd1.style = "display:none";
   ddd2.style = "display:none";
   ddd3.style = "display:none";
   ddd4.style="display:flex";
}
const value=document.querySelectorAll("button");

value.forEach(n=> n.addEventListener("click",function(){
  value.forEach(v=> v.style.background="white");
  value.forEach(v=> v.style.color="black");
  this.style.background="none";
  this.style.color="white";
}));