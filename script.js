let nomePessoa = {
  nome: "Arnaldo",
  sobrenome: "Pitin",
};
let enderecoPessoa = {
  rua: "Pigatto",
  numero: 715,
};

let cachorroAlemao = ["Pastor Alemão", "Dobermann", "Rottweiler"];
let cachorroFrances = ["Bulldog Francês", "Barbet", "Poodle"];

function mostraObjeto(obj, lugar) {
  let elemento = document.getElementById(lugar);
  elemento.innerHTML = "";
  for (let key in obj) {
    let listItem = document.createElement("li");
    listItem.textContent = `${key}: ${obj[key]}`;
    elemento.appendChild(listItem);
  }
}

function mostraArray(arr, lugar) {
  let elemento = document.getElementById(lugar);
  elemento.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let item = document.createElement("li");
    item.textContent = arr[i];
    elemento.appendChild(item);
  }
}

function spreadObjeto() {
  const pessoaCompleta = { ...nomePessoa, ...enderecoPessoa };
  return mostraObjeto(pessoaCompleta, "objeto");
}

function spreadArray() {
  const cachorros = [...cachorroAlemao, ...cachorroFrances];
  return mostraArray(cachorros, "array");
}

mostraObjeto(nomePessoa, "amostra1");
mostraObjeto(enderecoPessoa, "amostra2");
mostraArray(cachorroAlemao, "amostra3");
mostraArray(cachorroFrances, "amostra4");
