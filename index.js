const setUpDiv = document.querySelector("#setup");
const punchlineDiv = document.querySelector("#punchline");
const newJokeBtn = document.querySelector("#newJokeBtn");
const punchlineBtn = document.querySelector("#punchlineBtn");

let currPunchline;

const getPunchLine = () => {
    punchlineDiv.innerHTML = currPunchline;
    punchlineDiv.classList.add("bubble");
    // hide / show respective button
    punchlineBtn.classList.toggle("hidden");
    newJokeBtn.classList.toggle("hidden");
}

const getJoke = async () => {
    const jokePromise =  await fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    const joke = await jokePromise.json();
    // insert joke into setup Div
    setUpDiv.innerHTML = joke[0].setup;
    // store current punchline
    currPunchline = joke[0].punchline;
    // console.log(currPunchline);

    // remover punchline Div and bubble class
    punchlineDiv.innerHTML = "";
    punchlineDiv.classList.remove("bubble");

    punchlineBtn.classList.toggle("hidden");
    newJokeBtn.classList.toggle("hidden");
}

// Event Listeners for buttons
punchlineBtn.addEventListener("click", getPunchLine);
newJokeBtn.addEventListener("click", getJoke)

getJoke();