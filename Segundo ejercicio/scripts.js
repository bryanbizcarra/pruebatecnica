let texto = document.getElementById('texto')
let nombre  = document.getElementById('nombre')
let segundoNombre = document.getElementById('segundoNombre')
let empresa = document.getElementById('empresa')
let puesto = document.getElementById('puesto')
let correo = document.getElementById('correo')
let telefono = document.getElementById('telefono')
let comentarios = document.getElementById('comentarios')
let botonEnviar = document.getElementById('enviar')
let tituloFormulario = document.getElementById('tituloFormulario')
let botonIngles = document.getElementById('ingles')
let botonEspañol = document.getElementById('español')

const cambiarIdioma = function(){
    botonEspañol.addEventListener('click',(e)=>{
        e.preventDefault()
        texto.textContent = "Coordinemos una reunión para encontrar la mejor solución para sus necesidades. ¿Estás listo para maximizar tu operación COVID-19? Contáctanos y comencemos"
        nombre.placeholder= 'Nombre'
        segundoNombre.placeholder = 'Apellido'
        empresa.placeholder = 'Empresa'
        puesto.placeholder = 'Puesto de trabajo'
        correo.placeholder = 'Correo corporativo'
        telefono.placeholder = 'Celular'
        comentarios.placeholder = 'Comentarios'
        botonEnviar.value = 'Enviar'
        tituloFormulario.textContent = 'Contáctanos'

    })
    botonIngles.addEventListener('click',(e)=>{
        e.preventDefault()
        texto.textContent = "Let's coordinate a meeting to find the best solution for your needs. Are you ready to maximize your COVID-19 operation? Get in touch, we're all ears"
        nombre.placeholder = 'Name'
        segundoNombre.placeholder = 'Last name'
        empresa.placeholder = 'Company'
        puesto.placeholder = 'Job title'
        correo.placeholder = 'Email'
        telefono.placeholder = 'Phone number'
        comentarios.placeholder = 'Comments'
        botonEnviar.value = 'Send'
        tituloFormulario.textContent = 'Contact US'
    })
}
cambiarIdioma()