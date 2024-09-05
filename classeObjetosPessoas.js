/* Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/ (altura * altura))
Istancie uma pessoa chamada José que tenha 70k de peso e 1,75 de altura e peça pra José dizer o valor
do seu imc */

class Pessoa {
    nome;
    peso;
    altura;
    IMC;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
    classificarIMC(){
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo do peso. IMC: ' + imc.toFixed(2));
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal. IMC: ' + imc.toFixed(2))
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso. IMC: ' + imc.toFixed(2))
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso. IMC: ' + imc.toFixed(2))
        } else {
            return ('Obesidade grave. IMC: ' + imc.toFixed(2))
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log('Seu IMC é: ' + jose.calcularImc());
console.log(jose.classificarIMC());

const murilo = new Pessoa('Murilo', 114, 1.81);
console.log('Seu IMC é: ' + murilo.calcularImc());
console.log(murilo.classificarIMC());