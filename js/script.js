document.querySelector("form").addEventListener("submit", function (e) {
  const user = document.getElementById("user").value.trim();
  const password = document.getElementById("password").value.trim();

  if (user === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
    e.preventDefault(); // impede envio
  } else {
    alert("Login enviado com sucesso!"); // Simulação
  }
});