const colorArr = [
  "red",
  "blue",
  "green",
  "yellow",
  "perpal",
  "orange",
  "white",
  "gray",
  "black",
];

const randColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;

const changeMe = function () {
  if (!intervalId) {
    intervalId = setInterval(changColor, 1000);
  }
  function changColor() {
    document.body.style.backgroundColor = randColor();
  }
};

const stopChang = function () {
  clearTimeout(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", changeMe);

document.querySelector("#stop").addEventListener("click", stopChang);

// console.log(stopBtn, startBtn);

// const changColor = function () {
//   //   console.log(pickColor);
//   document.querySelector("body").style.backgroundColor = `${
//     colorArr[Math.round(Math.random() * 10)]
//   }`;
// };
