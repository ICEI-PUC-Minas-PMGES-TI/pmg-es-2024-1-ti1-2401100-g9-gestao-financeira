function salvarCategoria() {
  const nomeCategoriaInput = document.getElementById("nomeCategoria");
  const categoriaNome = nomeCategoriaInput.value;

  localStorage.setItem("categoriaSalva", categoriaNome);
  alert("Categoria salva com sucesso!");
}

function preencherCategoriaSalva() {
  const categoriaSalva = localStorage.getItem("categoriaSalva");
  if (categoriaSalva) {
    const nomeCategoriaInput = document.getElementById("nomeCategoria");
    nomeCategoriaInput.value = categoriaSalva;
  }
}

// Call the preencherCategoriaSalva function when the page loads
window.onload = preencherCategoriaSalva;

var valor = 16.00;
var texto = valor.toLocaleString("pt-BR", 
     { style: "currency" , currency:"BRL"});

console.log(texto);

