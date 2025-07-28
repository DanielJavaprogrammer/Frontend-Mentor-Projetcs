// script.js

// Pega o container onde os cards vão aparecer
const container = document.getElementById("extensions-container");

// Função para carregar os dados do JSON
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    // Para cada extensão, criamos um card
    data.forEach(extension => {
      const card = document.createElement("div");
      card.classList.add("extension-card");

      card.innerHTML = `
        <img src="${extension.logo}" alt="${extension.name} logo">
        <h2>${extension.name}</h2>
        <p>${extension.description}</p>
        <p>Status: <strong style="color:${extension.isActive ? 'green' : 'red'}">
          ${extension.isActive ? 'Ativo' : 'Inativo'}
        </strong></p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Erro ao carregar o JSON:", error);
    container.innerHTML = "<p>Erro ao carregar extensões.</p>";
  });
