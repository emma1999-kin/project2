
const username = document.getElementById('name');
const mail = document.getElementById('mail');
let formulaire = document.getElementById('form1');

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const valid = checkInputs();
    if (!valid) return;
    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('mail', document.getElementById('mail').value);
    location.href = '/question.html';
})


function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = mail.value.trim();
    let errors = false;
    if (usernameValue === '') {
        setErrorFor(username, "le champ de votre nom ne doit pas etre vide");
        errors = true;
    }
    else if(usernameValue.length < 2){
        setErrorFor(username,"Votre nom doit avoir plus de trois lettres");
        errors = true;
    } else {
        setSuccessFor(username);
    }
    if (emailValue === '') {
        setErrorFor(mail, "le champ d'email ne doit pas etre vide");
        errors = true;
    } else if (!isEmail(emailValue)) {
        setErrorFor(mail, "l'email n'est pas valide ")
        errors = true;
    } else {
        setSuccessFor(mail);
    }
    return !errors;
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add message inside small
    small.innertText = message;
    formControl.className = 'form-control error';

}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control succes';
}
function isEmail(mail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)| (".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
}

