let correo = document.getElementById('correo')
let telefono = document.getElementById('telefono')
let texto =document.getElementById('texto')
let comentario = document.getElementById('comentarios')
let botonEnviar = document.getElementById('enviar')

function validarEmail(valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		alert('email no valido');
	}
	else console.log('email valido');
	}

function validarTelefono(valor){
    re=/^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/
    if(!re.exec(valor)){
		alert('telefono no valido');
	}
	else console.log('telefono valido');
	}
  botonEnviar.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(correo.value)
    console.log(telefono.value)
    validarEmail(correo.value)
    validarTelefono(telefono.value)
    texto.textContent = comentario.value
  })