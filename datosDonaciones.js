let form = sessionStorage.getItem('formulario')
form = JSON.parse(form)

const valor3 = document.getElementById('valor3')
document.getElementById('nombre').innerHTML = `<b>Nombre:</b> ${form.nombre}`
document.getElementById('apellido').innerHTML = `<b>Apellido:</b> ${form.apellido}`
document.getElementById('valor3').innerHTML = `<b>Categoría: </b>${form.valor3}`
document.getElementById('email').innerHTML = `<b>Email: </b>${form.email}`
valor3.innerHTML = `<b>Categoría: </b>${form.opcion}`
valor3.style.cursor = 'pointer'
valor3.addEventListener('click', () => { location.href = 'integrador-js.html' })

Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Estos son tus datos',
    showConfirmButton: false,
    timer: 15000
})

// Swal.fire({
//     background: '#fff url(/images/trees.png)',
//     backdrop: `
//     rgba(0,0,123,0.4)
//     url("/images/nyan-cat.gif")
//     left top
//     no-repeat
//     `
// })
