// frames

function frameOver(frame) {
    frame.classList.replace('border-muted', 'border-primary')
}

function frameLeave(frame) {
    frame.classList.replace('border-primary', 'border-muted')
}

function frameClick(frame) {
    frame.ariaChecked = true
    frame.classList.replace('border-primary', 'border-success')
    frame.classList.replace('border-muted', 'border-success')

    select.value = 
        frame.id === 'frame1' && 'premium' ||
        frame.id === 'frame2' && 'standard' ||
        frame.id === 'frame3' && 'junior'

    for (let item of frames) {
        if (item.id !== frame.id) {
            item.classList.replace('border-success', 'border-muted')
            item.ariaChecked = false
        }
    }
}

function assignEvents(frame) {
    frame.addEventListener('mouseover', () => frameOver(frame))
    frame.addEventListener('mouseleave', () => frameLeave(frame))
    frame.addEventListener('click', () => frameClick(frame))
}

assignEvents(frame1)
assignEvents(frame2)
assignEvents(frame3)


// options

function selection() {
    select.value === 'premium' && frameClick(frame1)
    select.value === 'standard' && frameClick(frame2)
    select.value === 'junior' && frameClick(frame3)
}

select.addEventListener('change', selection)


// Botones

function remove(e) {
    e.preventDefault();
    form.name.value = ''
    form.surname.value = ''
    form.email.value = ''
    form.select.value = 'Categoría'
    form.amount.value = ''
    toPay.textContent = ''

    for (let item of frames) {
        item.classList.replace('border-success', 'border-muted')
        item.ariaChecked = false
    }
}

function checkError() {

    setTimeout(function(){
        form.name.value === ''
        form.name.classList.remove('border-danger')

        form.surname.value === ''
        form.surname.classList.remove('border-danger')

        form.email.value === ''
        form.email.classList.remove('border-danger')

        form.amount.value === ''
        form.amount.classList.remove('border-danger')

        !categories
        form.options.classList.remove('border-danger')
    }, 1000);

    let informacion = false;
    const categories =
        form.options.value === 'premium' && 'Premium' ||
        form.options.value === 'standard' && 'Estándar' ||
        form.options.value === 'junior' && 'Junior'

    form.name.value === ''
        ? form.name.classList.add('border-danger')
        : form.name.classList.remove('border-danger')

    form.surname.value === ''
        ? form.surname.classList.add('border-danger')
        : form.surname.classList.remove('border-danger')

    form.email.value === ''
        ? form.email.classList.add('border-danger')
        : form.email.classList.remove('border-danger')

    form.amount.value === ''
        ? form.amount.classList.add('border-danger')
        : form.amount.classList.remove('border-danger')
    
    !categories
        ? form.options.classList.add('border-danger')
        : form.options.classList.remove('border-danger')

    if (categories && form.name.value && form.surname.value) {
        informacion = {
            name: form.name.value,
            surname: form.surname.value,
            email: form.email.value,
            option: categories,
            total: toPay.textContent
        }
    }
    return informacion
}

function donationMade() {
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

function send(e) {
    e.preventDefault()
    const completeForm = checkError()
    completeForm && sessionStorage.setItem('form', JSON.stringify(completeForm))
    completeForm && donationMade()
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
        case "premium": {
            let originalPrice = 50
            sumTicked = originalPrice * numberTickets.value
            discount = sumTicked * 0.7
            totalPayment = sumTicked - discount
            break;
        }
        case "standard": {
            let originalPrice = 25
            sumTicked = originalPrice * numberTickets.value
            discount = sumTicked * 0.5
            totalPayment = sumTicked - discount
            break;
        }
        case "junior": {
            let originalPrice = 10
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

sendButton.onclick = (e) => { send(e) }
deleteButton.onclick = (e) => { remove(e) }
summaryButton.onclick = (e) => { summary(e) }