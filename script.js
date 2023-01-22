// class RailwayForm {
//     constructor(givenname, trainno, address) {
//         console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
//         this.name = givenname
//         this.trainno = trainno
//         this.address = address
//     }
//     submit() {
//         alert(this.name + ": Your form is submitted for train number: " + this.trainno)
//     }
//     cancel() {
//         alert(this.name + ": Your form is cancelled for train number: " + this.trainno)
//     }
//     fill(givenname) {
//         this.name = givenname
//         this.trainno = trainno
//     }
// }

// // Create a form for Prasum
// let prasum = new RailwayForm()
//     // Fill the form with Prasum's details
// prasumForm.fill("prasum", 12132)
//     // Create a form for Rohan
// let rohan = new RailwayForm()
//     // Fill the form with Rohan's details
// rohanForm.fill("Rohan", 24233)

// prasum.submit()
// rohan.submit()
// prasum.cancel()


// class Employee {
//     constructor(name) {
//         console.log("Employee's constructor is  here")
//         this.name = name
//     }
//     login() {
//         console.log(`Employee has logged in`);
//     }

//     logout() {
//         console.log(`Wmployee has logged out`);
//     }

//     requestLeaves(leaves) {
//         console.log(`Employee has requested ${leaves} leaves - Auto approved`)
//     }
// }

// class Programmer extends Employee {
//     constructor(name) {
//             super(name)
//             console.log(`This is a newly written constructor`)
//         }
//         // constructor(...args){ ----> If there is no constructor in the child class, this is created automatically
//         //     super(...args)
//         // }
//     requestCoffee(x) {
//         console.log(`Employee has requested ${x} coffees`)
//     }
//     requestLeaves(leaves) {
//         super.requestLeaves(4)
//         console.log("One extra is granted")
//             // console.log(`Employee has requested ${leaves+1} leaves (one extra)`)
//     }
// }

// let e = new Programmer()
// e.login()
// e.requestLeaves(3)


// class Animal {
//     constructor(name) {
//         this.name = Animal.capitalize(name)
//     }
//     walk() {
//         alert("Animal " + this.name + " is walking")
//     }
//     capitalize(name) {
//         return name.charAt(0).toUpperCase() + name.substr(1, name.length)
//     }
// }

// j = new Animal("Jack")
// j.walk()
// console.log(j.capitalize("thisa")) // ---> This doesnt work


// class Animal {
//     constructor(name, color) {
//         this.name = name
//         this.color = color
//     }
//     run() {
//         console.log(this.name + " is running!")
//     }
//     shout() {
//         console.log(this.name + " is barking!")
//     }
// }

// class Monkey extends Animal {
//     eatBanana() {
//         console.log(this.name + " is eating banana")
//     }
//     hide() {
//         console.log(`{this.name} is hiding`)
//     }
// }

// let ani = new Animal("Bruno", "white")
// let m = new Monkey("Chimpu", "orange")

// ani.shout()
// m.eatBanana()
// m.hide()


class Animal {
    constructor(name) {
        this.name = name
    }
    fly() {
        console.log("I'm flying")
    }
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
}

class Rabbit extends Animal {
    eatCarrot() {
        console.log("Eating carrot")
    }
}

let a = new Rabbit("Bruno")
a.fly()
console.log(a.name)
a.name = "Prasum"
console.log(a.name)
let c = 56

console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(a instanceof Animal)