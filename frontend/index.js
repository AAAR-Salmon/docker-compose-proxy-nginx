const container = document.getElementById("container");

fetch("http://localhost:3000/api/roll")
  .then(res => {
    return res.text();
  })
  .then(randomValue => {
    container.textContent = randomValue;
  });
