var houseKeeper1 = { 
    name: "Fulana",
    age: 25,
    yearsOfExperience: 5,
    celaningRepertoire: ["bathroon", "lobby", "bedroom"]
}

console.log(houseKeeper1)
console.log(houseKeeper1.celaningRepertoire[0])




// Função de Construtor

function BellBoy(name, age, hasWorkPermit, languages, cpf){
    this.name = name
    this.age = age
    this.hasWorkPermit = hasWorkPermit
    this.languages = languages
    this.cpf = cpf
}

// Inicalizando o Object

var bellBoy1 = new BellBoy("Timmy", 19, true, ["Portugues", "Inglesh"], "000.450.820-03")
console.log(bellBoy1)