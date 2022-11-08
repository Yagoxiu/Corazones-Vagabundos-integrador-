let form = sessionStorage.getItem('formulario')
form = JSON.parse(form)

const valor3 = document.getElementById('valor3')
document.getElementById('nombre').innerHTML = `<b>Nombre:</b> ${form.nombre}`
document.getElementById('apellido').innerHTML = `<b>Apellido:</b> ${form.apellido}`
document.getElementById('email').innerHTML = `<b>Email: </b>${form.email}`
document.getElementById('valor3').innerHTML = `<b>Categoría: </b>${form.valor3}`
valor3.innerHTML = `<b>Categoría: </b>${form.opcion}`
document.getElementById('total').innerHTML = `${form.total}`

document.getElementById('donateAgain').innerText = ('Volver a donar')
// donateAgain.addEventListener('click', () => { location.href = '/src/donaciones/donaciones.html' })
document.getElementById('returnMainPage').innerText = ('Volver a la página principal')
// returnMainPage.addEventListener('click', () => { location.href = '/index.html' })
