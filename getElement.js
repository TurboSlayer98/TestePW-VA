
// ID
const myElement = document.getElementById("my-unique-id");
if (myElement) {
  console.log("Elemento encontrado:", myElement);
} else {
  console.log("Elemento não encontrado com o ID 'my-unique-id'");
}

// Name
const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  console.log("Botão encontrado:", button);
}

//Class
const paragraphs = document.getElementsByClassName("paragraph");
for (const paragraph of paragraphs) {
  console.log("Parágrafo encontrado:", paragraph);
}
