class Hero {
    constructor(nameHero, ageHero, typeHero){
        this.name = nameHero
        this.age = ageHero
        this.type = typeHero
    }

    attack(type){
        let attack
        if(type === "ninja"){
            attack = "shuriken"
        }else if(type === "mago"){
            attack = "magia"
        }else if(type === "guerreiro "){
            attack = "espada"
        }else if(type === "monge "){
            attack = "artes marciais"
        }else {
            attack = "tipo de heroi invalido"
        }

        console.log(`O ${type} atacou usando ${attack}`)
    }
}

let heroi1 = new Hero("Naruto", 16, "ninja")
heroi1.attack(heroi1.type)

let heroi2 = new Hero("Harry", 14, "mago")
heroi1.attack(heroi2.type)
