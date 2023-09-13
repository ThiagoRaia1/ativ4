import PromptSync from "prompt-sync";
const prompt = PromptSync()
let i

const num1 = prompt(console.log(`Digite um número para saber sua tabuada: `))
const num2 = prompt(console.log(`Digite até que número você deseja que a tabuada seja feita: `))

for (i = 0; i <= num2; i++) {
    console.log(`${num1} * ${i} = ${num1 * i}`)
}