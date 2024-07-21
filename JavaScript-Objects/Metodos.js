function BellBoy(name, age, hasWorkPermit, languages, cpf){
    this.name = name
    this.age = age
    this.hasWorkPermit = hasWorkPermit
    this.languages = languages
    this.cpf = cpf
    this.clean = function () {
        alert("Clean Loading")
    }
}

// Inicalizando o Object

var bellBoy1 = new BellBoy("Timmy", 19, true, ["Portugues", "Inglesh"], "000.450.820-03")
console.log(bellBoy1.clean())