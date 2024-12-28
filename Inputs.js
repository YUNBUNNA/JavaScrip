const form = document.getElementById('myForm');
const input = document.getElementById('userInput');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputValue = input.value;

    console.log('Input Value:', inputValue);
});