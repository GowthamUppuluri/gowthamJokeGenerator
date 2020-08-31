document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const resp = JSON.parse(this.responseText);
      let output = "<ul>";

      if (resp.type === "success") {
        resp.value.forEach((joke) => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "<li>Some Thing Went Wrong</li>";
      }
      output += "</ul>";

      document.querySelector(".jokes").innerHTML = output;
    }
  };
  xhr.send();
  e.preventDefault();
}
