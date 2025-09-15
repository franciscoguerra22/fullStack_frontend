// Archivo: js/usuarios.js

// ==================== VALIDACIONES GENERALES ====================

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

// ==================== FUNCION AUXILIAR PARA MOSTRAR ✅❌ ====================

function mostrarValidacion(input, valido) {
  // Quitamos validaciones previas
  input.classList.remove("is-valid", "is-invalid");

  if (valido) {
    input.classList.add("is-valid");   // borde verde
  } else {
    input.classList.add("is-invalid"); // borde rojo
  }
}

// ==================== REGISTRO DE USUARIO ====================

function registroValidado(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const nombre       = document.getElementById("nombre");
  const correo       = document.getElementById("correo");
  const correoconfir = document.getElementById("correoconfir");
  const contra       = document.getElementById("contra");
  const contraconfi  = document.getElementById("contraconfi");
  const telefono     = document.getElementById("telefono");
  const region       = document.getElementById("selRegion");
  const comuna       = document.getElementById("selComuna");

  // === VALIDACIONES EN TIEMPO REAL ===
  nombre.addEventListener("input", () => {
    mostrarValidacion(nombre, nombre.value.trim().length >= 2);
  });

  correo.addEventListener("input", () => {
    mostrarValidacion(correo, mailValido(correo.value.trim()));
  });

  correoconfir.addEventListener("input", () => {
    mostrarValidacion(correoconfir, correo.value.trim() === correoconfir.value.trim());
  });

  contra.addEventListener("input", () => {
    mostrarValidacion(contra, passwordValida(contra.value));
  });

  contraconfi.addEventListener("input", () => {
    mostrarValidacion(contraconfi, contra.value === contraconfi.value);
  });

  telefono.addEventListener("input", () => {
    mostrarValidacion(telefono, telefonoValido(telefono.value.trim()));
  });

  region.addEventListener("change", () => {
    mostrarValidacion(region, region.value !== "");
  });

  comuna.addEventListener("change", () => {
    mostrarValidacion(comuna, comuna.value !== "");
  });

  // === VALIDACIÓN FINAL EN SUBMIT ===
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
      nombre.classList.contains("is-valid") &&
      correo.classList.contains("is-valid") &&
      correoconfir.classList.contains("is-valid") &&
      contra.classList.contains("is-valid") &&
      contraconfi.classList.contains("is-valid") &&
      telefono.classList.contains("is-valid") &&
      region.classList.contains("is-valid") &&
      comuna.classList.contains("is-valid")
    ) {
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const existe = usuarios.some(u => (u.correo || u.email || "").toLowerCase() === correo.value.trim().toLowerCase());
      if (existe) {
        alert("Ese correo ya está registrado");
        return;
      }

      usuarios.push({
        nombre: nombre.value.trim(),
        correo: correo.value.trim(),
        contra: contra.value,
        telefono: telefono.value.trim(),
        region: region.value,
        comuna: comuna.value,
        permiso: 1
      });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      alert("✅ Usuario registrado correctamente");
      form.reset();
      document.querySelectorAll(".is-valid, .is-invalid").forEach(el => {
        el.classList.remove("is-valid", "is-invalid");
      });

      window.location.href = "IniciarSesion.html";
    } else {
      alert("⚠️ Corrige los errores antes de continuar.");
    }
  });
}

// ==================== LOGIN DE USUARIO ====================

function loginValidado(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const email = document.getElementById("email");
  const pass  = document.getElementById("pass");

  // Validación en tiempo real
  email.addEventListener("input", () => {
    mostrarValidacion(email, mailValido(email.value.trim()));
  });

  pass.addEventListener("input", () => {
    mostrarValidacion(pass, passwordValida(pass.value));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!email.classList.contains("is-valid") || !pass.classList.contains("is-valid")) {
      alert("⚠️ Corrige los campos antes de iniciar sesión.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find(u => ((u.correo || u.email || "").toLowerCase() === email.value.trim().toLowerCase()));

    if (!usuario) { alert("❌ Usuario no registrado."); return; }

    const storedPass = (usuario.contra ?? usuario.password ?? "");
    if (storedPass !== pass.value) {
      alert("❌ Contraseña incorrecta.");
      return;
    }

    localStorage.setItem("usuarioActual", JSON.stringify({
      nombre: usuario.nombre,
      correo: usuario.correo || usuario.email,
      permiso: usuario.permiso ?? 1
    }));

    alert(`✅ Bienvenido, ${usuario.nombre}. Has iniciado sesión correctamente.`);
    window.location.href = "paginaInicio.html";
  });
}
