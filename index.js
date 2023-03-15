const donutButton = document.querySelector("#donut");
const resetButton = document.querySelector("#redo");
const autoClicker = document.querySelector("#clicker");
const multiButton = document.querySelector("#multiCount");
const multiPic = document.querySelector("#multi");
const finalMultiPrice = document.querySelector("#multiPrice");
const dpc = document.querySelector("#dpc");
let multiCount = 0;
let donutCounter = 0;
let autoClickerCount = 0;
let htmlDonut = document.querySelector("#counter");
let donutAll = document.querySelector("#clickerText");
let htmlFail = document.querySelector("#fail");
let multiFail = document.querySelector("#multiFail");
let finalAutoPrice = document.querySelector("#price");
let autoPrice = 100;
let multiPrice = 10;
let multiPower = Math.floor(Math.pow(1.2, multiCount));
donutButton.addEventListener("click", () =>{
  donutCounter += multiPower;
  htmlDonut.innerText = "Donuts: " + donutCounter;
  if(donutCounter >=
    autoPrice){
    autoClicker.src = "/mouse.png";
  }
  if(donutCounter >= multiPrice){
    multiPic.src = "/x.png";
  }
});

resetButton.addEventListener("click", () =>{
  donutCounter = 0;
  htmlDonut.innerText ="Donuts: " + donutCounter;
  autoClickerCount = 0;
  autoPrice = 100;
  htmlFail.innerText = "";
  multiFail.innerText = "";
  donutAll.innerText = "Auto Clickers: " + autoClickerCount;
  finalAutoPrice.innerText = "Clicker price: " + autoPrice + " donuts";
  multiPrice = 10;
  multiCount = 0;
  multiPower = Math.floor(Math.pow(1.2, multiCount));
  dpc.innerText = "DpC: 1";
  finalMultiPrice.innerText = "Multiplier price: " + multiPrice + " donuts";
  multiButton.innerText = "Multipliers: " + multiCount;
  if(donutCounter < autoPrice){
    autoClicker.src ="/greymouse.png"; 
  }
  if(donutCounter < multiPrice){
    multiPic.src = "/greyx.png";
  }
});

autoClicker.addEventListener("click", () => {
    if(donutCounter >= autoPrice){
autoClickerCount++;
donutAll.innerText ="Auto Clickers: " + autoClickerCount;
donutCounter = donutCounter - autoPrice; 
htmlFail.innerText = "";
autoPrice = Math.floor(autoPrice * 1.1);
finalAutoPrice.innerText = "Clicker price: " + autoPrice + " donuts";
if(donutCounter < autoPrice){
  autoClicker.src ="/greymouse.png"; 
}
if(donutCounter < multiPrice){
  multiPic.src = "/greyx.png";
}
}else{
  htmlFail.innerText = "You do not have enough donuts!";
}
});

function clickTimer(){ 
  donutCounter += autoClickerCount * multiPower;
  htmlDonut.innerText ="Donuts: " + donutCounter;
  if(donutCounter >= autoPrice){
    autoClicker.src = "/mouse.png";
  }
  if(donutCounter >= multiPrice){
    multiPic.src = "/x.png";
  }
}
  setInterval(clickTimer, 1000);

multiPic.addEventListener("click", () => {
  if(donutCounter >= multiPrice){
  multiCount++;
  multiPower = Math.floor(Math.pow(1.5, multiCount));
  multiButton.innerText = "";
  multiFail.innerText = "";
  donutCounter = donutCounter - multiPrice;
  multiPrice =  Math.floor(multiPrice * 1.1);
  dpc.innerText = "DpC: " + multiPower;
  multiButton.innerText = "Multipliers: " + multiCount;
  finalMultiPrice.innerText = "Multiplier price: " + multiPrice + " donuts";
  if(donutCounter < autoPrice){
    autoClicker.src ="/greymouse.png"; 
  }
  if(donutCounter < multiPrice){
    multiPic.src = "/greyx.png";
  }
}else{
  multiFail.innerText = "You do not have enough!";
}
});
const fred = document.querySelector("#fred");
const linkClicks = document.querySelector("#linkClicks");
const fredLink = document.querySelector("#fredLink");
const cookie = document.querySelector("#cookie");

fredLink.addEventListener("click", ()=>{
  if(fred.style.visibility == "visible"){
    fred.style.visibility = "hidden";
  }else{
    fred.style.visibility = "visible";
  }
})

const aboutMe = document.querySelector("#aboutMe");

aboutMe.addEventListener("click", ()=>{
  if(linkClicks.style.visibility == "visible"){
    linkClicks.style.visibility = "hidden";
  }else{
    linkClicks.style.visibility = "visible";
  }
})
const menu = document.querySelector("#menu");

menu.addEventListener("click", ()=> {
  if(fredLink.style.visibility == "visible"){
    fredLink.style.visibility = "hidden";
    cookie.style.visibility = "hidden";
    aboutMe.style.visibility = "hidden";
    fred.style.visibility = "hidden";
    linkClicks.style.visibility = "hidden";
  }else{
    fredLink.style.visibility = "visible";
    cookie.style.visibility = "visible";
    aboutMe.style.visibility = "visible";
  }
})
