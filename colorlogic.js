const input1 = document.querySelector(".inp");

input1.addEventListener("input", (event) => {
  document.body.style.backgroundColor = event.target.value;
});
