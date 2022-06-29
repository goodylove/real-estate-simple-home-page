let postion = 0;
let slider = document.querySelectorAll(".sliders");
let dot = document.querySelectorAll(".dot");



const active = () => {
  for (let index = 0; index < slider.length; index++) {
    slider[index].style.display = "none";
  }
  if (postion > slider.length-1) {
    postion = 0;
  }
  postion++
  
  slider[postion-1].style.display = "block";
 };
setInterval(() => {
  active();
  activateThumbail()
},2000);

function activateThumbail() {
  dot.forEach((p)=>{
    p.style.opacity ="0.5"
  })
  if (postion > dot.length) {
    postion = 0;
    postion++
  }
  dot[postion-1].style.opacity ="1"
}



let hambuger = document.querySelector(".buger");
let mobile = document.querySelector(".mobile");
let close = document.querySelector(".close");
let container = document.querySelector(".container");
hambuger.addEventListener("click", () => {
  mobile.classList.toggle("show");
  container.classList.toggle("show");
});

close.addEventListener("click", () => {
  // mobile.style.height = 0
  mobile.classList.remove("show");
});
let right = document.querySelector(".right");
right.addEventListener("click", () => {
  let unlist = document.querySelector(".list");
  unlist.style.display = "block";
});
