var counter = document.querySelector(".count");
var counter2 = document.querySelector(".count2");
var counter3 = document.querySelector(".count3");
var counter4 = document.querySelector(".count4");


let i = 1;
let j = 1;
let k = 1
let l = 1

setInterval(() => {
  if (i < 100) {
    i++;
    counter.innerText = i;
  }
}, 10);

setInterval(() => {
  if (j < 63) {
    j++;
    counter2.innerText = j;
  }
}, 10);

setInterval(() => {
  if (k < 70) {
    k++;
    counter3.innerText = k;
  }
}, 10);

setInterval(() => {
  if (l < 80) {
    l++;
    counter4.innerText = l;
  }
}, 10);

