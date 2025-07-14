// Definindo a classe
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();      
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido"
        }
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

const user1 = new Hero("Jorge", 42, "Mago");
console.log(user1.atacar())
console.log("-----")

const user2 = new Hero("Aragorn", 35, "Guerreiro");
console.log(user2.atacar()); 
console.log("-----")
const user3 = new Hero("Li", 29, "Monge");
console.log(user3.atacar()); 
console.log("-----")
const user4 = new Hero("Hanzo", 28, "Ninja");
console.log(user4.atacar()); 
console.log("-----")
