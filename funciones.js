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
    // formulario.cantidad.value = ''

    for (let item of cuadros) {
        item.classList.replace('border-success', 'border-muted')
        item.ariaChecked = false
    }
}

function checkError() {
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

    // formulario.cantidad.value === ''
    //     ? formulario.cantidad.classList.add('border-danger')
    //     : formulario.cantidad.classList.remove('border-danger')
    
    !valor3
        ? formulario.opciones.classList.add('border-danger')
        : formulario.opciones.classList.remove('border-danger')

    if (valor3 && formulario.nombre.value && formulario.apellido.value) {
        informacion = {
            nombre: formulario.nombre.value,
            apellido: formulario.apellido.value,
            email: formulario.email.value,
            opcion: valor3
            // cantidad: formulario.cantidad.value,
        }
    }
    return informacion
}

function donacionRealizada() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Ha realizado su donación con éxito!',
        text: 'Redirigiendolo...',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true
    })
    setTimeout(function(){
        window.location.href = 'donacion-realizada.html';
    }, 5000);
}

function enviar(e) {
    e.preventDefault()
    const completeForm = checkError()
    completeForm && sessionStorage.setItem('formulario', JSON.stringify(completeForm))
    completeForm && donacionRealizada()
}

boton1.onclick = (e) => { enviar(e) }
boton2.onclick = (e) => { borrar(e) }