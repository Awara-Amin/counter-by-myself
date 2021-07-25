// set inital value to zero first
let count = 0;


// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns); // this gives NodeList which is an array but only works with forEach


btns.forEach(function (btn) {
  // console.log(btn);
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget);
    const styles = e.currentTarget.classList;
    // this is beautiful walla kaka, if the above styles contaian this class do that or that
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

// this is nice too kaka
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }


    value.textContent = count;
  });

});


// note, hex color is the color with number
