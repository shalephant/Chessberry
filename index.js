const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date_of_birth = document.getElementById('date_of_birth');

form.addEventListener('next', (e) => {
e.preventDefault();

checkInputs();
})

function checkInputs() {
    const ameValue = username.value;
    const emailValue = email.value;
    const phone = Valuephone.value;
    const dateValue = date_of_birth.value;

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
    const info = input.parentElement; //.info
    const div = info.querySelector('div');

    //add error class
    info.className = 'info error';
}