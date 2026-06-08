// LÓGICA DE INTERACTIVIDAD - MICROSITIO T-MEC CEFP

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Selector de Países (Hero Section Tabs)
    const countryButtons = document.querySelectorAll(".country-btn");
    
    countryButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Quitar clase activa de todos los botones
            countryButtons.forEach(btn => btn.classList.remove("active"));
            
            // Agregar clase activa al botón presionado
            this.classList.add("active");
            
            // Simulación de cambio de datos contextuales
            const country = this.getAttribute("data-country");
            console.log("Cambiando contexto de indicadores a: " + country);
            
            // Aquí se actualizarían dinámicamente los componentes del panel de datos si se contara con una API
        });
    });

    // 2. Navegación Principal (Active state switcher)
    const navItems = document.querySelectorAll(".nav-item");
    
    navItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // 3. Sistema de Alertas (Validación simple de suscripción)
    const subscribeBtn = document.querySelector(".btn-subscribe");
    const emailInput = document.querySelector(".subscribe-form input");
    
    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener("click", function() {
            const email = emailInput.value.trim();
            if (email === "") {
                alert("Por favor, introduce un correo electrónico válido.");
                return;
            }
            if (!email.includes("@")) {
                alert("El formato del correo electrónico no es válido.");
                return;
            }
            
            alert("¡Suscripción exitosa! Recibirás las alertas del Observatorio T-MEC en: " + email);
            emailInput.value = "";
        });
    }

    // 4. Carrusel / Flechas de Tema Destacado
    const arrowButtons = document.querySelectorAll(".arrow-btn");
    arrowButtons.forEach((arrow, index) => {
        arrow.addEventListener("click", function() {
            console.log("Navegando en los comunicados destacados... Dirección: " + (index === 0 ? "Anterior" : "Siguiente"));
        });
    });
});
