import PromptSync from "prompt-sync";
const prompt = PromptSync()

let opcao = 0

function maiorNumero() {
    const num1 = Number(prompt("Digite um número: "))
    const num2 = Number(prompt("Digite o segundo número: "))
    const num3 = Number(prompt("Digite o terceiro número: "))
    console.log(`O maior número digitado é: ${Math.max(num1, num2, num3)}`)
}



do {
    console.log("1 - Comparar números")
    opcao = Number(prompt("Escolha uma opção: "))
    switch (opcao) {
        case 1: maiorNumero(); break;
        case 0: console.log(`Programa encerrado`); break;
        default: console.log(`Opção inválida.`)
    }
} while (opcao != 0)