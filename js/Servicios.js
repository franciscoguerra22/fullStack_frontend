// Archivo: js/script.js

// Array de objetos con los datos de los servicios
const servicios = [
    {
        title: "Personaje y fondo Full detallados",
        image: "img/ilustracion_full.JPG",
        description: "Alto nivel de renderizado en texturas (piel, metal, tela, energía), sombras precisas y efectos atmosféricos. Ideal para portadas, material promocional o arte conceptual final.",
        price: "$200.000"
    },
    {
        title: "Ilustración full detallada con fondo simple",
        image: "img/full_Ilustracion_fondo_simple.jpeg",
        description: "Personaje principal altamente detallado: Anatomía precisa, expresión facial definida, texturas realistas (piel, ropa, armas, alas, etc.)",
        price: "$120.000"
    },
    {
        title: "Ilustración y fondo detallado",
        image: "img/fondo detallado.jpeg",
        description: "Composición narrativa compleja: Escenas con múltiples personajes, criaturas, arquitectura y elementos ambientales que cuentan una historia visual.",
        price: "$150.000"
    },
    {
        title: "Personaje + fondo-Pintura simple",
        image: "img/personaje_pintura_simple.jpeg",
        description: "Personaje central con pintura simple: Diseño anatómico preciso, expresión facial intensa, múltiples extremidades o elementos únicos (como armas, joyería, coronas, etc.). Ideal para representar dioses, guerreros, entidades mágicas o figuras legendarias.",
        price: "$90.000"
    },
    {
        title: "Diseño de personaje-Full body",
        image: "img/full_body.jpg",
        description: "Representación anatómica precisa desde la cabeza hasta los pies. Se incluyen elementos como vestimenta, accesorios, armas, postura y expresión facial que definen la personalidad y rol del personaje.",
        price: "$110.000"
    },
    {
        title: "Diseño de personaje-Mid body",
        image: "img/mid_body_final.png",
        description: "Representación desde la cabeza hasta la cintura o muslos: Se enfoca en los rasgos faciales, torso, brazos y parte superior de las piernas. Ideal para mostrar expresividad, vestimenta, accesorios y postura sin abarcar el cuerpo completo.",
        price: "$100.000"
    },
    {
        title: "Diseño de personaje, estilizado, con pintura simple",
        image: "img/simple_estilizado.png",
        description: "Estilo estilizado y simplificado: Se prioriza la forma, silueta y personalidad del personaje sobre el realismo. Las proporciones pueden ser exageradas o caricaturescas para enfatizar rasgos distintivos.",
        price: "$70.000"
    },
    {
        title: "Concept art de personajes",
        image: "img/concept_art.png",
        description: "Diseño exploratorio y expresivo: El personaje se presenta en una pose dinámica o natural, con énfasis en la silueta, proporciones y actitud. Ideal para representar guerreros, magos, criaturas o cualquier figura fantástica en etapa de desarrollo visual.",
        price: "$60.000"
    }
];

/**
 * Función para generar dinámicamente las tarjetas de servicio.
 */
function generarTarjetasServicios() {
    const container = document.getElementById('servicios-container');
    let htmlContent = '';

    servicios.forEach(servicio => {
        htmlContent += `
            <div class="col">
                <div class="card bg-dark text-white">
                    <img src="${servicio.image}" class="card-img-top" alt="${servicio.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${servicio.title}</h5>
                        <!--<p class="card-text">${servicio.description}</p>--!>
                        <p>${servicio.price}</p>
                       
                        <button type="button" class="btn btn-outline-success btn-sm" data-bs-toggle="modal"
                            data-bs-target="#serviceDetailModal"
                            data-title="${servicio.title}"
                            data-image="${servicio.image}"
                            data-description="${servicio.description}"
                            data-price="${servicio.price}">Ver detalle</button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

/**
 * Función para configurar el comportamiento del modal.
 */
function configurarModal() {
    const serviceDetailModal = document.getElementById('serviceDetailModal');
    serviceDetailModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget;
        const title = button.getAttribute('data-title');
        const image = button.getAttribute('data-image');
        const description = button.getAttribute('data-description');
        const price = button.getAttribute('data-price');

        const modalTitle = serviceDetailModal.querySelector('.modal-title');
        const modalImage = serviceDetailModal.querySelector('#modalImage');
        const modalDescription = serviceDetailModal.querySelector('#modalDescription');
        const modalPrice = serviceDetailModal.querySelector('#modalPrice');

        modalTitle.textContent = title;
        modalImage.src = image;
        modalDescription.textContent = description;
        modalPrice.textContent = price;
    });
}

// Se ejecutan las funciones cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    generarTarjetasServicios();
    configurarModal();
});