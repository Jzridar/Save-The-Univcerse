


class Human {               //creating main class for humanship 
    constructor(hull, firepower, accuracy) {
        this.hull = 20
        this.firepower = 5
        this.accuracy = 0.7
        this.alive = true
    }
    attack(opponent) {         //Creating a method inside the main class to give the conditions for the game
        let rndNumber = Math.trunc(Math.random())
        if (rndNumber >= this.accuracy) {
            console.log(rndNumber)
            console.log('Well done,you hit the target')
            opponent.hull = opponent.hull - this.firepower
           
            //console.log(`Human hull value ${Hstats}`)
            console.log(`opponent still have ${opponent.hull} hull points left`)
            if (opponent.hull <= 0) {
                opponent.alive = false
                console.log("Hurray!!The opponent ship is destroyed...You have saved the Universe.Now you can move on to attack the next ship or simply have retreat")
            }
        }
        else {
            console.log('You missed it')
        }
    }

}

class Alien {          //creating main class for alienship
    constructor(hull, firepower, accuracy) {
        this.hull = Math.floor(Math.random() * (6 - 3)) + 3
        this.firepower = Math.floor(Math.random() * (4 - 2)) + 2
        this.accuracy = Math.floor(Math.random() * (0.8 - 0.6)) + 0.6
        this.alive = true

    }
    attack(opponent) {        //Creating a method inside the main class to give the conditions for the game
        let rndNumber = Math.trunc(Math.random())
        if (rndNumber >= this.accuracy) {
            console.log(rndNumber)
            console.log('You have been hit')
            opponent.hull = opponent.hull - this.firepower
            // Estats = document.getElementsByClassName('enemyStats')
            // Estats.innerHTML = opponent.hull
            console.log(`You still have ${opponent.hull} hull points left`)
            if (opponent.hull <= 0) {
                opponent.alive = false
                console.log("Sorry!!You are destroyed,better luck next time!!!")
            }
        }
        else {
            console.log('Great escape')
        }
    }

}

playerStats = document.querySelector('.playerStats')
enemyStats = document.querySelector('.enemyStats')

const war = (human, target) => {          //Creating an arrowfunction to check who is alive...if anyone is not alive the game will be ended
    // console.log(`let the war begin ${target}`)
    let game = new Game()
    while (human.alive && target.alive) {
        human.attack(target)
        if (target.alive) {
            target.attack(human)
        }
        setscore(human,playerStats)
        setscore(target,enemyStats)
    }
    game.isAlienKabloo(target)
    game.isHumanKabloo(human)
    alert('Game Ended!')

}

const setscore = (target, eleme) => {  
    let score = `Hull : ${target.hull} <br>
    FirePower : ${target.firepower} <br>
   Accuracy : ${Math.ceil(target.accuracy)} <br>`
   eleme.innerHTML = score
}

//Hstats.innerHTML = opponent.hull

//Hstats.innerHTML = score

class Arnold extends Human {      //Creating a subclass for human and given some random values
    constructor() {
        super()
        this.hull = 25
        this.firepower = 6
        this.accuracy = .8
        this.isAlive = true
    }
}
class Alien1 extends Alien {        //Creating a subclass for alien 
    constructor() {
        super()
        this.hull = Math.round((Math.random() * (9 - 6)) + 6)
        this.firepower = Math.round((Math.random() * (4 - 2)) + 2),
        this.accuracy = (Math.random() * (.9 - .6)) + .7
        this.isAlive = true
    }
}
let start = document.querySelector('.playerImage') //Adding an event listener to the player image to start the game on clicking it
start.addEventListener("click", function () {
    alert(`Game starts`)
    let alien = new Alien()
    let human = new Human()
    war(human, alien)

    let alien1 = new Alien1()
    let arnold = new Arnold()
    war(arnold, alien1)


})

class Game {
    isAlienKabloo(alien) {
        if (alien.hull <= 0) {
            alert(`Alien ship went kabloo-ey`)
            return false
        }
        return true
    }
    isHumanKabloo(human) {
        if (human.hull <= 0) {
            alert(`Human ship went kabloo-ey`)
            return false
        }
        return true
    }
}


