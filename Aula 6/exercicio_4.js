// ============================================
// EXERCÍCIO 4 - Clínica Veterinária
// ============================================
console.log("\n=== EXERCÍCIO 4 ===");
let clinica = [];
clinica.push("Cachorro");
clinica.push("Gato");
clinica.push("Papagaio");
console.log("Animais na fila da clínica:", clinica);

console.log("\nRemovendo animais da fila...");
let animal1 = clinica.shift();
console.log(`${animal1} foi atendido. Fila atual:`, clinica);

let animal2 = clinica.shift();
console.log(`${animal2} foi atendido. Fila atual:`, clinica);

let animal3 = clinica.shift();
console.log(`${animal3} foi atendido. Fila atual:`, clinica);

console.log("\nEstado final da fila:", clinica);