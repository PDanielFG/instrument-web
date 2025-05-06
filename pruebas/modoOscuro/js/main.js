const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');     //quita y pone una clase al body
    btnSwitch.classList.toggle('active');       //cambia el estado del botón
})