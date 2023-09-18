import PromptSync from "prompt-sync"
const prompt = PromptSync()

let opcao
let i = 0
let j
let k
let entrada
let matriz = [
    []
]

do {
    j = 0
    k = 1
    while (true) {
        entrada = prompt("Digite um nome: ")
        if (entrada !== "") {
            matriz[i].push(entrada)
            j++
            break;
        }
    }
    while (true) {
        entrada = prompt(`Digite um hobbie de ${matriz[i][j-k]} (Aperte enter sem digitar nada para não digitar mais hobbies): `)
        if (entrada !== "") {
            matriz[i].push(entrada)
            j++
            k++
        } else {
            break;
        }
    }
    i++
    matriz.push([])
    opcao = prompt("Deseja adicionar outro nome? (S/N): ")
} while (opcao === 's' || opcao === 'S')

for (k = 0; k < i; k++) {
    console.log(matriz[k])
}