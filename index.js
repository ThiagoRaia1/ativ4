import PromptSync from "prompt-sync";
const prompt = PromptSync()

let opcao = 0

function maiorNumero() {
    const num1 = Number(prompt("Digite um número: "))
    const num2 = Number(prompt("Digite o segundo número: "))
    const num3 = Number(prompt("Digite o terceiro número: "))
    if (num1 > num2 && num3) {
        console.log(`O número ${num1} é o maior entre os 3 digitados\n`)
    } else if (num2 > num1 && num3) {
        console.log(`O número ${num2} é o maior entre os 3 digitados\n`)
    } else if (num3 > num1 && num2) {
        console.log(`O número ${num3} é o maior entre os 3 digitados\n`)
        console.clear()
    }
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