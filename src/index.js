const init = () => {
  const inputForm = document.querySelector("form");
  const input = document.querySelector("input#searchByID");
  
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(e.target.children[1].value)
    console.log(input.value)

    fetch(`http://localhost:5000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
