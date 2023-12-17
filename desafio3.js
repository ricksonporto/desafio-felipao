// Declara as variáveis
const nome = prompt("Digite o nome do herói: ");
const xp = parseInt(prompt("Digite a quantidade de experiência do herói: "));

// Verifica a classificação do herói
let classificação;
if (xp < 1000) {
  classificação = "Ferro";
} else if (xp >= 1000 && xp < 2000) {
  classificação = "Bronze";
} else if (xp >= 2000 && xp < 5000) {
  classificação = "Prata";
} else if (xp >= 5000 && xp < 8000) {
  classificação = "Ouro";
} else if (xp >= 8000 && xp < 9000) {
  classificação = "Diamante";
} else if (xp >= 9000 && xp < 10000) {
  classificação = "Ascendente";
} else {
  classificação = "Radiante";
}

// Imprime a classificação do herói
console.log(`O herói ${nome} está na classificação ${classificação}.`);