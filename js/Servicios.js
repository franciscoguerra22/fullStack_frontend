// Archivo: js/script.js

// Array de objetos con los datos de los servicios
const servicios = [
    {
        id:1,
        title: "Personaje y fondo Full detallados",
        image: "img/ilustracion_full.JPG",
        description: "Alto nivel de renderizado en texturas (piel, metal, tela, energía), sombras precisas y efectos atmosféricos. Ideal para portadas, material promocional o arte conceptual final.",
        price: "$200.000"
    },
    {
        id:2,
        title: "Ilustración full detallada con fondo simple",
        image: "img/full_Ilustracion_fondo_simple.jpeg",
        description: "Personaje principal altamente detallado: Anatomía precisa, expresión facial definida, texturas realistas (piel, ropa, armas, alas, etc.)",
        price: "$120.000"
    },
    {
        id:3,
        title: "Ilustración y fondo detallado",
        image: "img/fondo detallado.jpeg",
        description: "Composición narrativa compleja: Escenas con múltiples personajes, criaturas, arquitectura y elementos ambientales que cuentan una historia visual.",
        price: "$150.000"
    },
    {
        id:4,
        title: "Personaje + fondo-Pintura simple",
        image: "img/personaje_pintura_simple.jpeg",
        description: "Personaje central con pintura simple: Diseño anatómico preciso, expresión facial intensa, múltiples extremidades o elementos únicos (como armas, joyería, coronas, etc.). Ideal para representar dioses, guerreros, entidades mágicas o figuras legendarias.",
        price: "$90.000"
    },
    {
        id:5,
        title: "Diseño de personaje-Full body",
        image: "img/full_body.jpg",
        description: "Representación anatómica precisa desde la cabeza hasta los pies. Se incluyen elementos como vestimenta, accesorios, armas, postura y expresión facial que definen la personalidad y rol del personaje.",
        price: "$110.000"
    },
    {
        id:6,
        title: "Diseño de personaje-Mid body",
        image: "img/mid_body_final.png",
        description: "Representación desde la cabeza hasta la cintura o muslos: Se enfoca en los rasgos faciales, torso, brazos y parte superior de las piernas. Ideal para mostrar expresividad, vestimenta, accesorios y postura sin abarcar el cuerpo completo.",
        price: "$100.000"
    },
    {
        id:7,
        title: "Diseño de personaje, estilizado, con pintura simple",
        image: "img/simple_estilizado.png",
        description: "Estilo estilizado y simplificado: Se prioriza la forma, silueta y personalidad del personaje sobre el realismo. Las proporciones pueden ser exageradas o caricaturescas para enfatizar rasgos distintivos.",
        price: "$70.000"
    },
    {
        id:8,
        title: "Concept art de personajes",
        image: "img/concept_art.png",
        description: "Diseño exploratorio y expresivo: El personaje se presenta en una pose dinámica o natural, con énfasis en la silueta, proporciones y actitud. Ideal para representar guerreros, magos, criaturas o cualquier figura fantástica en etapa de desarrollo visual.",
        price: "$60.000"
    }
];

const regionesComunas = [
  { region: "Región de Arica y Parinacota", comunas: ["Arica", "Camarones", "Putre", "General Lagos"] },
  { region: "Región de Tarapacá", comunas: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"] },
  { region: "Región de Antofagasta", comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"] },
  { region: "Región de Atacama", comunas: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"] },
  { region: "Región de Coquimbo", comunas: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"] },
  { region: "Región de Valparaíso", comunas: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María"] },
  { region: "Región Metropolitana de Santiago", comunas: ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Santiago", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil"] },
  { region: "Región del Libertador General Bernardo O'Higgins", comunas: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente de Tagua Tagua", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "Pichilemu"] },
  { region: "Región del Maule", comunas: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén"] },
  { region: "Región de Ñuble", comunas: ["Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco"] },
  { region: "Región del Biobío", comunas: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Lebu", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel"].map(s => s.trim()) },
  { region: "Región de La Araucanía", comunas: ["Temuco", "Carahue", "Cholchol", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén"] },
  { region: "Región de Los Ríos", comunas: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Futrono", "La Unión", "Lago Ranco", "Río Bueno"] },         
  { region: "Región de Los Lagos", comunas: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue"]},
  { region: "Región de Aysén del General Carlos Ibáñez del Campo", comunas: ["Coyhaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Chile Chico", "Río Ibáñez", "Cochrane", "O'Higgins", "Tortel"] },
  { region: "Región de Magallanes y de la Antártica Chilena", comunas: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel"] },
];


const mapaRegiones = Object.fromEntries(
  regionesComunas.map(r => [r.region, r.comunas])
);

function poblarRegiones(regionSelectId, comunaSelectId) {
  const selRegion = document.getElementById(regionSelectId);
  const selComuna = document.getElementById(comunaSelectId);
  if (!selRegion || !selComuna) return;


  selRegion.innerHTML = '<option value="">Seleccione una región</option>';
  selComuna.innerHTML = '<option value="">Seleccione una comuna</option>';
  selComuna.disabled = true;

 
  Object.keys(mapaRegiones).forEach(nombre => {
    const option = document.createElement('option');
    option.value = nombre;           
    option.textContent = nombre;
    selRegion.appendChild(option);
  });

 
  selRegion.addEventListener('change', () => {
    const nombre = selRegion.value;
    selComuna.innerHTML = '<option value="">Seleccione una comuna</option>';
    selComuna.disabled = true;

    const comunas = mapaRegiones[nombre] || [];
    comunas.forEach(c => {
      const option = document.createElement('option');
      option.value = c;
      option.textContent = c;
      selComuna.appendChild(option);
    });

    selComuna.disabled = comunas.length === 0;
  });
}



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

function crearAdmin() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const adminExists = usuarios.some(u => u.permiso === 0);
    if(!adminExists) {
        usuarios.push({
            nombre:"Admin",
            email: "admin@art.cl", 
            password: "admin123", 
            telefono: "000000000",
            region: "Region metropolitana",
            comuna: "Pudahuel",
            permiso: 0 // 0 para admin, 1 para usuario normal
        });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        
    }                 
}

function registroValidado(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  ["nombre","email","confirmEmail","password","confirmPassword","telefono","region","comuna"]
    .forEach(bindLiveClear);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre")?.value?.trim() || "";
    const email = document.getElementById("email")?.value?.trim() || "";
    const confirmEmail = document.getElementById("confirmEmail")?.value?.trim() || "";
    const password = document.getElementById("password")?.value || "";
    const confirmPassword = document.getElementById("confirmPassword")?.value || "";
    const telefono = document.getElementById("telefono")?.value?.trim() || "";
    const region = document.getElementById("region")?.value || "";
    const comuna = document.getElementById("comuna")?.value || "";

    ["nombre","email","confirmEmail","password","confirmPassword","telefono","region","comuna"]
      .forEach(clearError);

    let ok = true;

    if (nombre.length < 2) { setError("nombre","El nombre debe tener al menos 2 caracteres."); ok = false; }
    if (!esEmailValido(email)) { setError("email","Correo inválido. Debe contener @ y terminar en .com o .cl."); ok = false; }
    if (email !== confirmEmail) { setError("confirmEmail","Los correos no coinciden."); ok = false; }
    if (!esPasswordValida(password)) { setError("password","Mínimo 8 caracteres, con mayúscula, minúscula y número."); ok = false; }
    if (password !== confirmPassword) { setError("confirmPassword","Las contraseñas no coinciden."); ok = false; }
    if (telefono && !esTelefonoValido(telefono)) { setError("telefono","El teléfono debe tener entre 9 y 11 dígitos."); ok = false; }
    if (!region) { setError("region","Selecciona una región."); ok = false; }
    if (!comuna) { setError("comuna","Selecciona una comuna."); ok = false; }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const existe = usuarios.some(u => (u.email || "").toLowerCase() === email.toLowerCase());
    if (existe) { setError("email","Este correo ya está registrado."); ok = false; }

    if (!ok) return;

    usuarios.push({ nombre, email, password, telefono, region, comuna, permiso: 1 });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert(" Usuario registrado correctamente.");
    form.reset();
    const selComuna = document.getElementById("comuna");
    if (selComuna) selComuna.disabled = true;
    window.location.href = "Login.html";
  });
}

function mailValido(email) {
    const re = /^[^\s@]+@[^\s@]+\.(com|cl)$/;
    return re.test(email);
}

function passwordValida(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return re.test(password);
}
function telefonoValido(telefono) {
    const re = /^\d{9,11}$/;
    return re.test(telefono);
}

window.onload = function () {
// ---------------- LOGIN ----------------
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        const loginEmail = document.getElementById("email");
        const loginPass = document.getElementById("pass");
        const mensajeCorreoLogin = document.getElementById("mensajeCorreo");
        const mensajePassLogin = document.getElementById("mensajePass");
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Email en vivo
        loginEmail.addEventListener("input", function () {
            const email = loginEmail.value.trim();
            if (email === "") {
                mensajeCorreoLogin.textContent = "El correo no puede estar vacío.";
                mensajeCorreoLogin.className = "text-danger";
            } else if (!regexEmail.test(email)) {
                mensajeCorreoLogin.textContent = "Formato de correo inválido.";
                mensajeCorreoLogin.className = "text-danger";
            } else {
                mensajeCorreoLogin.textContent = "Correo válido ✔️";
                mensajeCorreoLogin.className = "text-success";
            }
        });

        // Contraseña en vivo
        loginPass.addEventListener("input", function () {
            const pass = loginPass.value.trim();
            if (pass === "") {
                mensajePassLogin.textContent = "La contraseña no puede estar vacía.";
                mensajePassLogin.className = "text-danger";
            } else {
                mensajePassLogin.textContent = "";
            }
        });

        // Validación final al enviar
        loginForm.addEventListener("submit", function (event) {
            let mensajeError = "";
            const email = loginEmail.value.trim();
            const pass = loginPass.value.trim();

            if (email === '') mensajeError += "<li>El correo no puede quedar vacío</li>";
            else if (!regexEmail.test(email)) mensajeError += "<li>El correo debe ser válido</li>";
            if (pass === '') mensajeError += "<li>La contraseña no puede quedar vacía</li>";

            if (mensajeError !== "") {
                document.getElementById('errores').innerHTML = "<ul>" + mensajeError + "</ul>";
                event.preventDefault();
            } else {
                document.getElementById('errores').innerHTML = '';
            }
        });
    }

};

// ---------------- REGISTRO ----------------
    const formRegistro = document.getElementById("formRegistro");
    if (formRegistro) {

        const emailRegistro = document.getElementById("emailRegistro");
        const passRegistro = document.getElementById("passRegistro");
        const edad = document.getElementById("edad");
        const mensajeCorreoReg = document.getElementById("mensajeCorreoReg");
        const mensajePassReg = document.getElementById("mensajePassReg");
        const mensajeEdad = document.getElementById("mensajeEdad");
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexPass = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        // Email en vivo
        emailRegistro.addEventListener("input", function () {
            const email = emailRegistro.value.trim();
            if (email === "") {
                mensajeCorreoReg.textContent = "El correo no puede estar vacío.";
                mensajeCorreoReg.className = "text-danger";
            } else if (!regexEmail.test(email)) {
                mensajeCorreoReg.textContent = "Formato de correo inválido.";
                mensajeCorreoReg.className = "text-danger";
            } else {
                mensajeCorreoReg.textContent = "Correo válido ✔️";
                mensajeCorreoReg.className = "text-success";
            }
        });

        // Contraseña en vivo
        passRegistro.addEventListener("input", function () {
            const pass = passRegistro.value.trim();
            if (pass === "") {
                mensajePassReg.textContent = "La contraseña no puede estar vacía.";
                mensajePassReg.className = "text-danger";
            } else if (!regexPass.test(pass)) {
                mensajePassReg.textContent = "Debe tener al menos 8 caracteres, una mayúscula y un número.";
                mensajePassReg.className = "text-danger";
            } else {
                mensajePassReg.textContent = "Contraseña válida ✔️";
                mensajePassReg.className = "text-success";
            }
        });

        // Edad en vivo
        edad.addEventListener("input", function () {
            const val = parseInt(edad.value.trim());
            if (isNaN(val)) {
                mensajeEdad.textContent = "Debe ingresar su edad.";
                mensajeEdad.className = "text-danger";
            } else if (val < 18) {
                mensajeEdad.textContent = "Debe ser mayor de 18 años.";
                mensajeEdad.className = "text-danger";
            } else {
                mensajeEdad.textContent = "Edad válida ✔️";
                mensajeEdad.className = "text-success";
            }
        });

        // Validación final al enviar
        formRegistro.addEventListener("submit", function (event) {
            let mensajeError = "";
            const nombre = document.getElementById('nombre').value.trim();
            const email = emailRegistro.value.trim();
            const pass = passRegistro.value.trim();
            const edadVal = parseInt(edad.value.trim());

            if (nombre === '') mensajeError += "<li>El nombre no puede quedar vacío</li>";
            if (email === '') mensajeError += "<li>El correo no puede quedar vacío</li>";
            else if (!regexEmail.test(email)) mensajeError += "<li>El correo debe ser válido</li>";
            if (isNaN(edadVal)) mensajeError += "<li>Debe ingresar su edad</li>";
            else if (edadVal < 18) mensajeError += "<li>Debe ser mayor de 18 años</li>";
            if (pass === '') mensajeError += "<li>La contraseña no puede quedar vacía</li>";
            else if (!regexPass.test(pass)) mensajeError += "<li>La contraseña debe tener al menos 8 caracteres, una mayúscula y un número</li>";

            if (mensajeError !== "") {
                document.getElementById('errores').innerHTML = "<ul>" + mensajeError + "</ul>";
                event.preventDefault();
            } else {
                document.getElementById('errores').innerHTML = '';
            }
        });
    }