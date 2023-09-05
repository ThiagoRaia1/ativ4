import PromptSync from "prompt-sync";
const prompt = PromptSync()

function maiorNumero() {
    const num1 = Number(prompt("Digite um número: "))
    const num2 = Number(prompt("Digite o segundo número: "))
    const num3 = Number(prompt("Digite o terceiro número: "))
}

console.log("1 - Comparar números")
let opcao = Number(prompt("Escolha uma opção: "))
if (opcao == 1) {
    maiorNumero()
}