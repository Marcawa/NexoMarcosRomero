document.addEventListener("DOMContentLoaded", () => {
  const authBtn = document.getElementById("auth-btn");

  if (!authBtn) return; // si no hay botón, no hace nada

  // Verificar si ya está logueado
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (isLoggedIn === "true" && savedUser) {
    // Cambiar a Logout con nombre opcional
    authBtn.textContent = `Salir (${savedUser.nombre || "Usuario"})`;
    authBtn.removeAttribute("href");
    authBtn.style.cursor = "pointer";

    // Acción de Logout
    authBtn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      alert("👋 Has cerrado sesión.");
      window.location.href = "login.html"; // redirige al login
    });
  } else {
    // Mostrar Registrarse
    authBtn.textContent = "Registrarse";
    authBtn.setAttribute("href", "login.html");
  }
});
