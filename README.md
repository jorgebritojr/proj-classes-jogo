# 🧙‍♂️ Desafio - Classe `Hero` em JavaScript

Este projeto foi desenvolvido como parte do desafio prático da **DIO (Digital Innovation One)**, com o objetivo de aplicar os conhecimentos sobre programação orientada a objetos em JavaScript, criando uma classe que representa heróis com comportamentos distintos de ataque.

---

## 📌 Descrição do Projeto

A proposta do desafio é:

- Criar uma classe chamada `Hero` com:
  - `nome`: nome do herói
  - `idade`: idade do herói
  - `tipo`: classe/tipo do herói (ex: mago, guerreiro, monge, ninja)

- Implementar um método `atacar()` que imprime uma mensagem no formato:

O {tipo} atacou usando {ataque}


Com ataques diferentes dependendo do tipo de herói:

| Tipo      | Ataque              |
|-----------|---------------------|
| mago      | magia               |
| guerreiro | espada              |
| monge     | artes marciais      |
| ninja     | shuriken            |
| outro     | um ataque desconhecido |

---





## 💻 Código-fonte (`index.js`)

```javascript
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

// Exemplos de uso
const user1 = new Hero("Jorge", 42, "Mago");
console.log(user1.atacar());
console.log("-----");

const user2 = new Hero("Aragorn", 35, "Guerreiro");
console.log(user2.atacar());
console.log("-----");

const user3 = new Hero("Li", 29, "Monge");
console.log(user3.atacar());
console.log("-----");

const user4 = new Hero("Hanzo", 28, "Ninja");
console.log(user4.atacar());
console.log("-----");
```
🧪 Resultado Esperado no Console

O mago atacou usando magia
-----
O guerreiro atacou usando espada
-----
O monge atacou usando artes marciais
-----
O ninja atacou usando shuriken
-----


🚀 Como executar
Certifique-se de ter o Node.js instalado.

Salve o código acima em um arquivo chamado index.js.

No terminal, execute o comando:

node index.js

🧠 Conceitos aplicados
Classes e Objetos

Métodos e Construtores

Estruturas Condicionais (switch)

Manipulação de Strings

Boas Práticas de Organização de Código

