let formulaire = document.getElementById('form1');
formulaire.addEventListener('submit',()=>{
    localStorage.setItem('name',document.getElementById ('name').value);
    localStorage.setItem('mail',document.getElementById ('mail').value);
})

