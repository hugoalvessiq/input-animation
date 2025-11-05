const form = document.getElementById("cadastroForm");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("password");
const toggleSenha = document.getElementById("toggleSenha");

// ===== Real-time validation =====
form.addEventListener("input", (e) => {
  validarCampo(e.target);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const campos = [nome, email, senha];
  let valido = true;

  campos.forEach((campo) => {
    if (!validarCampo(campo)) valido = false;
  });

  if (valido) {
    alert("Registration successful! 🎉");
    form.reset();
  }
});

// ===== Validation function =====
function validarCampo(campo) {
  const erroMsg = campo.parentElement.querySelector("#erro");
  let valido = true;

  // Check for empty fields
  if (campo.value.trim() === "") {
    erroMsg.textContent = "Required field";
    campo.classList.add("erro-input");
    valido = false;
  } else if (campo.id === "email" && !validarEmail(campo.value)) {
    erroMsg.textContent = "Invalid E-mail";
    campo.classList.add("erro-input");
    valido = false;
  } else if (campo.id === "password" && campo.value.length < 6) {
    erroMsg.textContent = "Minimum 6 characters";
    campo.classList.add("erro-input");
    valido = false;
  } else {
    erroMsg.textContent = "";
    campo.classList.remove("erro-input");
  }

  return valido;
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== Show/Hide password =====
toggleSenha.addEventListener("click", () => {
  const tipo = senha.getAttribute("type") === "password" ? "text" : "password";
  senha.setAttribute("type", tipo);
  toggleSenha.textContent = tipo === "password" ? "👁️" : "🙈";
});
