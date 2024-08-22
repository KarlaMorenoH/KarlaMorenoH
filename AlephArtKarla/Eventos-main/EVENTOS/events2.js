const events = [
    {
        category: 'Music', /**Cambiar a categoria */
        title: 'GIFF Guanajuato,Mx.',
        day: '13',
        month: 'March',
        description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
        image: 'https://via.placeholder.com/150',
    },

    // Agregar más eventos aquí
];

const eventContainer = document.getElementById('eventContainer');

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'col-sm-6'; // Ajusta el tamaño de la columna

    card.innerHTML = `
        <div class="row align-items">
             <div class="card-body">
                 <div class="img-date-icons col-md-6">
                <img src="${event.image}" class="card-img-top" alt="Event Image">         
                 <p class="card-month-element">${event.month}</p>
                   <p class="card-day-element">${event.day}</p>
                   <p class="card-date">${event.hour}</p>
                   <button><img src="/Inicio/assets/íconos/wishlist-star.png" class="icon-save" alt="Icon Save"></button>
                   <button><img src="/Inicio/assets/íconos/calendar-plus.png" class="icon-assist" alt="Icon Assist Event"></button>
                   </div>
          </div>
     
                <h3 class="card-title">${event.title}</h3>
                <p class="card-text">${event.description}</p>
            </div>
        </div>
    `;

    eventContainer.appendChild(card);
}

// Crear los eventos inicialmente
events.forEach(createEventCard);