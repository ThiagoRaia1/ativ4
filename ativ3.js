import PromptSync from "prompt-sync"
const prompt = PromptSync()
const numeros = []

while(true) {
    const entrada = prompt("Digite um número (ou 's' para sair): ")
    if (entrada === 's' || entrada === 'S') {
        break;
    }
    const numero = parseFloat(entrada)
    if (!isNaN(numero)) {
        numeros.push(numero)
    } else {
        console.log("Entrada inválida. Por favor, digite um número válido.")
    }
}

if (numeros.length === 0) {
    console.log("A numeros está vazia, não é possível encontrar o maior e o menor valor.")
} else {
    let maior = numeros[0]
    let menor = numeros[0]
    let i
    for (i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    console.log(`Maior valor: ${maior}`)
    console.log(`Menor valor: ${menor}`)
}