const box1 = document.getElementById("box1");
box1.addEventListener("click", function () {
  box1.style.backgroundColor = "Orange";
});
const box2 = document.getElementById("box2");
box2.addEventListener("click", function () {
  box2.style.backgroundColor = "violet";
});
const box3 = document.getElementById("box3");
box3.addEventListener("click", function () {
  box3.style.backgroundColor = "green";
});
const box4 = document.getElementById("box4");
box4.addEventListener("click", function () {
  box4.style.backgroundColor = "blue";
});

function displayText() {
  const text = document.getElementById("inputText").value;
  document.getElementById("Greet").textContent = "Hello, " + text;
}
