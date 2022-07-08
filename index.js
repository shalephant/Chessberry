
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const date_of_birth = document.getElementById('date_of_birth');

var e = document.getElementById('submit');
if(e){form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
}

const setError = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    inputControl.classList.add('error');
    inputControl.classList.remove('checkmark');
}

const setCheckmark = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.checkmark');

    inputControl.classList.add('checkmark');
    inputControl.classList.remove('error');
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const date_of_birthValue = date_of_birth.value.trim();

    if(nameValue === '') {
        const element = document.getElementById("error-box");	// Get element
        element.style.visibility = "visible";	
    } else {
        const element = document.getElementById("checkmark");	// Get element
        element.style.visibility = "visible";	
    }

    if(emailValue === "") {

    }
};

/* const MASTERS = 'https://chess-tournament-api.devtest.ge/api/grandmasters';
            fetch(MASTERS)
            .then((data)=>{
                return data.json();
            }).then((completedata)=>{
                //console.log(completedata);
                //document.getElementById('root').innerHTML=
                let data1="";
                completedata.map((values)=>{
                    data1+=`<option class="character" value="beg" id="1">${values.name} <img src="https://chess-tournament-api.devtest.ge${values.image}" alt="img"></option>`
                });
                document.getElementById("grandmasters").innerHTML=data1;
            });



            
          
        */
        