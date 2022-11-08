// Cuadros //

function cuadroOver(cuadro) {
    cuadro.classList.replace('border-muted', 'border-primary')
}

function cuadroLeave(cuadro) {
    cuadro.classList.replace('border-primary', 'border-muted')
}

function cuadroClick(cuadro) {
    cuadro.ariaChecked = true
    cuadro.classList.replace('border-primary', 'border-success')
    cuadro.classList.replace('border-muted', 'border-success')

    select.value = 
        cuadro.id === 'cuadro1' && '1' ||
        cuadro.id === 'cuadro2' && '2' ||
        cuadro.id === 'cuadro3' && '3'

    for (let item of cuadros) {
        if (item.id !== cuadro.id) {
            item.classList.replace('border-success', 'border-muted')
            item.ariaChecked = false
        }
    }
}

function asignarEventos(cuadro) {
    cuadro.addEventListener('mouseover', () => cuadroOver(cuadro))
    cuadro.addEventListener('mouseleave', () => cuadroLeave(cuadro))
    cuadro.addEventListener('click', () => cuadroClick(cuadro))
}

asignarEventos(cuadro1)
asignarEventos(cuadro2)
asignarEventos(cuadro3)


// Opciones //

function seleccionHecha() {
    select.value === '1' && cuadroClick(cuadro1)
    select.value === '2' && cuadroClick(cuadro2)
    select.value === '3' && cuadroClick(cuadro3)
}

select.addEventListener('change', seleccionHecha)


// Botones //

function borrar(e) {
    e.preventDefault();
    formulario.nombre.value = ''
    formulario.apellido.value = ''
    formulario.email.value = ''
    formulario.seleccion.value = 'Categoría'
    formulario.cantidad.value = ''
    toPay.textContent = ''

    for (let item of cuadros) {
        item.classList.replace('border-success', 'border-muted')
        item.ariaChecked = false
    }
}

function checkError() {

    setTimeout(function(){
        formulario.nombre.value === ''
        formulario.nombre.classList.remove('border-danger')

        formulario.apellido.value === ''
        formulario.apellido.classList.remove('border-danger')

        formulario.email.value === ''
        formulario.email.classList.remove('border-danger')

        formulario.cantidad.value === ''
        formulario.cantidad.classList.remove('border-danger')

        !valor3
        formulario.opciones.classList.remove('border-danger')
    }, 1000);

    let informacion = false;
    const valor3 =
        formulario.opciones.value === '1' && 'Premium' ||
        formulario.opciones.value === '2' && 'Estándar' ||
        formulario.opciones.value === '3' && 'Junior'

    formulario.nombre.value === ''
        ? formulario.nombre.classList.add('border-danger')
        : formulario.nombre.classList.remove('border-danger')

    formulario.apellido.value === ''
        ? formulario.apellido.classList.add('border-danger')
        : formulario.apellido.classList.remove('border-danger')

    formulario.email.value === ''
        ? formulario.email.classList.add('border-danger')
        : formulario.email.classList.remove('border-danger')

    formulario.cantidad.value === ''
        ? formulario.cantidad.classList.add('border-danger')
        : formulario.cantidad.classList.remove('border-danger')
    
    !valor3
        ? formulario.opciones.classList.add('border-danger')
        : formulario.opciones.classList.remove('border-danger')

    if (valor3 && formulario.nombre.value && formulario.apellido.value) {
        informacion = {
            nombre: formulario.nombre.value,
            apellido: formulario.apellido.value,
            email: formulario.email.value,
            opcion: valor3,
            total: toPay.textContent
        }
    }
    return informacion
}

function donacionRealizada() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Ha realizado su donación con éxito!',
        text: 'Redirigiendo...',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true
    })
    setTimeout(function(){
        window.location.href = './donacion-realizada/donacion-realizada.html';
    }, 5000);
}

function enviar(e) {
    e.preventDefault()
    const completeForm = checkError()
    completeForm && sessionStorage.setItem('formulario', JSON.stringify(completeForm))
    completeForm && donacionRealizada()
}

function summary(e) {
    e.preventDefault();

    let numberTickets = document.querySelector(".numberTickets");

    if (Number(numberTickets.value)) {
        let selectedCategory = document.querySelector(".selectedCategory");
        let totalPayment
        let sumTicked
        let discount

        switch (selectedCategory.value) {
        case "1": {
            let originalPrice = 20
            sumTicked = originalPrice * numberTickets.value
            discount = sumTicked * 0.8
            totalPayment = sumTicked - discount
            break;
        }
        case "2": {
            let originalPrice = 10
            sumTicked = originalPrice * numberTickets.value
            discount = sumTicked * 0.5
            totalPayment = sumTicked - discount
            break;
        }
        case "3": {
            let originalPrice = 5
            sumTicked = originalPrice * numberTickets.value
            discount = sumTicked * 0.1
            totalPayment = sumTicked - discount
            break;
            }
        }
        toPay.textContent = `Total: ${totalPayment} $`;
    } 

    const completedForm = checkError();
    }  

boton1.onclick = (e) => { enviar(e) }
boton2.onclick = (e) => { borrar(e) }
boton3.onclick = (e) => { summary(e) }