const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date_of_birth = document.getElementById('date_of_birth');

form.addEventListener('submit', e => {
e.preventDefault();

checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const dateValue = date_of_birth.value.trim();

    if(usernameValue === '') {
        // show error 
        // add error class
        setErrorFor(username);
    } else {
        //add success class
        setSuccessFor(username);
    }
}

function setErrorFor(input) {
    const inputControl = element.parentElement; //.input-control
    const errorDisplay = inputControl.querySelector('.error');

    //add error class
   
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

fetch ('https://chess-tournament-api.devtest.ge/api/grandmasters')
    .then(res => res.json())
    .then(data => console.log(data))