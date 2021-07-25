// alert("test");

var count = 0;
var decButn = document.querySelector(".dec");
var incButn = document.querySelector(".inc");
var resButn = document.querySelector(".res");
var countNumber = document.querySelector("h2");

var count = 0;

function play(){
  makeZero()
  incButn.addEventListener("click", function(){
    countNumber.innerHTML= count;
    console.log(count);
    countNumber.style.color="green";
    count++
  })
}
play();


decButn.addEventListener("click", function(){
  countNumber.innerHTML=count-2;
  console.log(count);
  countNumber.style.color="red";
  count--
})


function makeZero(){
  resButn.addEventListener("click", function(){
    count= 0;
    countNumber.innerHTML= count;
  });
}
