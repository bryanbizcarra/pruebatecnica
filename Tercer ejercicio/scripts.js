/* let url = 'http://index.php?user=1234'
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var anuncioParam = urlParams.get('usuario'); */

let nombre  = document.getElementById('nombre')
let correo = document.getElementById('correo')
let telefono = document.getElementById('telefono')
let boton = document.getElementById('enviar')


boton.addEventListener('click',()=>{
    sessionStorage.setItem('Nombre de usuario',nombre.value)
    sessionStorage.setItem('Correo de usuario',correo.value)
    sessionStorage.setItem('Telefono de usuario',telefono.value)
    
    localStorage.setItem('Tipografía', 'Sans serif')
    localStorage.setItem('Tamaño texto','14px')
    localStorage.setItem('Color principal', '#01bee6')
})