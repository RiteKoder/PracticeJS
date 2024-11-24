const btn = document.getElementById("random");

btn.addEventListener("click", () => {
  const red = Math.round(Math.random() * 255);

  const green = Math.round(Math.random() * 255);

  const blue = Math.round(Math.random() * 255);

  console.log(red, green, blue);

  const color = `rgb(${red},${green},${blue})`;
  console.log(color);

  document.body.style.backgroundColor = color;
});
