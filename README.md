# Advanced-JavaScript-and-DOM-Manipulation

## Índice

- [Sobre](#sobre)
- [Recursos](#recursos)
- [Instalação](#instalação)

## Sobre

Node.js é um repositorio dividido em duas partes [Drum-Kit-Starting Files](#Drum-Kit-Starting Files) e [JavaScript-Objects](#JavaScript-Objects)


## Drum-Kit-Starting Files
Drum Kit

Este projeto é um aplicativo interativo de bateria que permite ao usuário tocar diferentes sons de bateria clicando em botões ou pressionando teclas do teclado. Ele utiliza HTML, CSS e JavaScript para criar uma experiência divertida e educativa.

### Funcionalidades

- **Botões de Bateria**: O usuário pode clicar nos botões da bateria para tocar sons correspondentes.
- **Teclado**: Sons de bateria podem ser acionados usando as teclas "w", "a", "s", "d", "j", "k" e "l".
- **Animação de Botão**: Quando um botão é pressionado, ele é visualmente destacado para indicar que foi ativado.

Estrutura do Código

**Adicionando Eventos de Clique**
O código seleciona todos os botões de bateria e adiciona um listener de evento de clique a cada um. Quando um botão é clicado, ele toca o som correspondente e aplica uma animação.
**Eventos de Teclado**
Além de cliques, o aplicativo também responde a eventos de tecla, permitindo que os usuários toquem sons de bateria usando o teclado.
 **Função `makeSound`**
Essa função recebe uma chave e toca o som correspondente. Cada tecla do teclado ou botão tem um som associado.
 **Animação de Botão**
A função `buttonAnimation` aplica uma classe CSS ao botão pressionado, criando um efeito visual, e remove essa classe após um curto período de tempo.


## JavaScript-Objects

Subdividido em dois arquivos [Metodos](#Metodos) e [Objects-FunctionConstructor](#Objects-FunctionConstructor)


### Metodos
Este código define uma função construtora chamada BellBoy, que cria objetos representando um "carregador" (bellboy) em um hotel. Os objetos têm as seguintes propriedades e métodos:

Propriedades do Carregador:

name: O nome do carregador.
age: A idade do carregador.
hasWorkPermit: Um booleano que indica se o carregador possui permissão de trabalho.
languages: Um array que contém as línguas que o carregador fala.
cpf: O CPF (Cadastro de Pessoas Físicas) do carregador.
Método clean:

Este método exibe um alerta com a mensagem "Clean Loading".

### Objects-FunctionConstructor

Define um objeto literal chamado houseKeeper1, representando uma empregada doméstica com informações pessoais e um repertório de limpeza. Além disso, utiliza uma função construtora BellBoy para criar objetos de carregadores (bellboys), inicializando bellBoy1 com propriedades como nome, idade, e habilidades linguísticas. Essas abordagens demonstram diferentes maneiras de estruturar dados e criar instâncias em JavaScript.


## Recursos

- HTMl
- CSS
- JavaScript
- Manipulação DOM
- Orientação a Objetos

## Instalação

Passos para instalar e configurar o projeto localmente.

1. **Clonar o repositório:**
   ```bash
   git clone git@github.com:Joao-VictorCm/Advanced-JavaScript-and-DOM-Manipulation.git
