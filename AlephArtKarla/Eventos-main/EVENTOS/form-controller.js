// Create a ItemsController class
class ItemsController {
    // Set up the items and currentId property in the constructor
    constructor(currentId = 0) {
        // Cargar los ítems desde localStorage si existen
        this.items = JSON.parse(localStorage.getItem("items")) || [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(nombre, inputDate, inputCity, inputState, inputCategory, inputMode, descripcion) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            titulo: nombre,
            date: inputDate,
            ciudad: inputCity,
            estado: inputState,
            categoria: inputCategory,
            modalidad: inputMode,
            descripcion: descripcion   
        };

        // Push the item to the items property
        this.items.push(item);

        // Save items to local storage
        localStorage.setItem("items", JSON.stringify(this.items));
    }
}