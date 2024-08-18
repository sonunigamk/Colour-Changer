const buttons = document.querySelectorAll('.button');
const body = document.querySelector('.container');

buttons.forEach(function (button) {

    button.addEventListener('click', function (e) {

        if (e.target.id === "gray") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        }
    });
});


