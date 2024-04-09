let counter = 0;

function increment() {
    counter++;
    document.getElementById("count").textContent = counter;
}

function decrement() {
    counter--;
    document.getElementById("count").textContent = counter;
    if (counter < 0) {
        alert("Smettila");
        counter = 0;
    }
}

function reset() {
    counter = 0;
    document.getElementById("count").textContent = counter;
}