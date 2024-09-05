/* 
1 - Crie uma classe para representar carros.
Os carros posuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um metódo que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
gasto em reais para realizar este recurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor (marca,cor,gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;

        
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Vermelho', 1/12);
console.log(uno);
console.log(uno.calcularGastoDePercurso(70,5));

const civic = new Carro('Civic', 'Dourado', 1/12);
console.log(civic);
console.log(civic.calcularGastoDePercurso(70,5));