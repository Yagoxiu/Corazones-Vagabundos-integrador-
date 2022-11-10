let form = sessionStorage.getItem('form')
form = JSON.parse(form)

const valor3 = document.getElementById('valor3')
document.getElementById('name').innerHTML = `<b>Nombre:</b> ${form.name}`
document.getElementById('surname').innerHTML = `<b>Apellido:</b> ${form.surname}`
document.getElementById('email').innerHTML = `<b>Email: </b>${form.email}`
document.getElementById('categories').innerHTML = `<b>Categoría: </b>${form.categories}`
categories.innerHTML = `<b>Categoría: </b>${form.option}`
document.getElementById('total').innerHTML = `${form.total}`

document.getElementById('donateAgain').innerText = ('Volver a donar')
donateAgain.addEventListener('click', () => { location.href = 'https://yagoxiu.github.io/corazones-vagabundos-integrador/src/donaciones/donaciones.html' })
document.getElementById('returnMainPage').innerText = ('Volver a la página principal')
returnMainPage.addEventListener('click', () => { location.href = 'https://yagoxiu.github.io/corazones-vagabundos-integrador/' })
