const btnSwitch = document.querySelector("#switch");
const nombre=document.querySelector(".nombre");
const contenido = document.querySelector(".contenido");
const noticias = document.querySelector(".p-5");
const footer = document.querySelector("footer");
const footerSec = document.querySelector("sec");
const containerProducto = document.querySelector(".containerProducto");
const card = document.querySelector(".bodyy");

btnSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');     //quita y pone una clase al body
    btnSwitch.classList.toggle('active');       //cambia el estado del botónç
    nombre.classList.toggle('dark');
    contenido.classList.toggle('dark');
    noticias.classList.toggle('dark');
    footer.classList.toggle('dark');
    footerSec.classList.toggle('dark');
    containerProducto.classList.toggle('dark');
})
