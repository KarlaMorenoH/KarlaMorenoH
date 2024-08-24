// Initialize a new ItemsController with currentId set to 0
const itemsController = new ItemsController(0);

// Select the New Event Form
const newEventForm = document.querySelector('#formularioEvento');

// Add an 'onsubmit' event listener
newEventForm.addEventListener('submit', function(event) {
    console.log('Formulario enviado');
    // Prevent default action
    event.preventDefault();

    // Get the values of the inputs
    const nombre = document.getElementById('nombre');
    const inputDate = document.getElementById('inputDate');
    const inputCity = document.getElementById('inputCity');
    const inputState = document.getElementById('inputState');
    const inputCategory = document.getElementById('inputCategory');
    const inputMode = document.getElementById('inputMode');
    const descripcion = document.getElementById('descripcion');

    const errores = [];

    // Limpiar mensajes anteriores
    document.getElementById('nombreError').textContent = '';
    document.getElementById('inputDateError').textContent = '';
    document.getElementById('inputCityError').textContent = '';
    document.getElementById('inputStateError').textContent = '';
    document.getElementById('inputCategoryError').textContent = '';
    document.getElementById('inputModeError').textContent = '';
    document.getElementById('descripcionError').textContent = '';

    // Validación de campos
    if (nombre.value.trim() === '') {
        errores.push('Nombre');
        document.getElementById('nombreError').textContent = 'Este campo es obligatorio.';
    }
    if (inputDate.value.trim() === '') {
        errores.push('Fecha');
        document.getElementById('inputDateError').textContent = 'Este campo es obligatorio.';
    }
    if (inputCity.value.trim() === '') {
        errores.push('Ciudad');
        document.getElementById('inputCityError').textContent = 'Este campo es obligatorio.';
    }
    if (inputState.value === 'Estado') {
        errores.push('Estado');
        document.getElementById('inputStateError').textContent = 'Debes seleccionar un estado.';
    }
    if (inputCategory.value === 'Categoría') {
        errores.push('Categoría');
        document.getElementById('inputCategoryError').textContent = 'Debes seleccionar una categoría.';
    }
    if (inputMode.value === 'Modalidad') {
        errores.push('Modalidad');
        document.getElementById('inputModeError').textContent = 'Debes seleccionar una modalidad.';
    }
    if (descripcion.value.trim() === '') {
        errores.push('Descripción');
        document.getElementById('descripcionError').textContent = 'Este campo es obligatorio.';
    }

    // Mostrar alertas Swal según el número de errores
    if (errores.length === 0) {
        Swal.fire({
            icon: "success",
            title: "¡Formulario enviado!",
            text: "Formulario enviado correctamente. Tu evento será publicado."
        });

        // Almacenar los datos en localStorage
        const evento = {
            nombre: nombre.value.trim(),
            fecha: inputDate.value.trim(),
            ciudad: inputCity.value.trim(),
            estado: inputState.value,
            categoria: inputCategory.value,
            modalidad: inputMode.value,
            descripcion: descripcion.value.trim()
        };
        // Obtener la lista de eventos guardada en localStorage
        let eventos = JSON.parse(localStorage.getItem('eventos')) || [];
        // Añadir el nuevo evento a la lista
        eventos.push(evento);
        // Guardar la lista actualizada en localStorage
        localStorage.setItem('eventos', JSON.stringify(eventos));

        // Limpiar los campos del formulario
        nombre.value = '';
        inputDate.value = '';
        inputCity.value = '';
        inputState.value = 'Estado';
        inputCategory.value = 'Categoría';
        inputMode.value = 'Modalidad';
        descripcion.value = '';

    } else if (errores.length === 1) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `El campo ${errores[0]} es obligatorio.`
        });
    } else if (errores.length === 7) {
        Swal.fire({
            icon: "error",
            title: "Completa el formulario",
            text: "Todos los campos son obligatorios."
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Verifica los datos faltantes",
            text: "Hay varios campos que necesitan ser completados."
        });
    }
});
