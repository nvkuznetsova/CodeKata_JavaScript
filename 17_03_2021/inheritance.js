// Функции-конструкторы, без new

function miceCreator(name) {
    const newMouse = {}

    newMouse.name = name
    newMouse.sayHi = function () {
        console.log('Hi!')
    }

    return newMouse
}

const mouse = miceCreator('Jimmy')

// Функции-конструкторы, с использованием new

function MiceCreator(name) {
    this.name = name

    this.sayHi = function () {
        console.log('Hi!')
    }
}

const jerry = new MiceCreator('Jerry')
const jerry2 = new MiceCreator('Jerry')
const jerry100500 = new MiceCreator('Jerry')

console.log(jerry.hasOwnProperty('sayHi')) //true

//------------------

function MiceCreator2(name) {
    this.name = name
}

MiceCreator2.prototype.sayHi = function () {
    console.log('Hi!')
}

const mickey = new MiceCreator2('Mickey')

mickey.sayHi()

console.log(mickey.hasOwnProperty('sayHi')) //false

// Прототипное наследование, ES5

function Human (options) {
    this.name = options.name
}

Human.prototype.walk = function () {
    console.log(this.name, ' can walk!')
}

const human = new Human({
    name: 'Boris Junior'
})

human.walk()

function Athlete (options) {
    Human.call(this, options)
    this.medals = options.medals
}

Athlete.prototype = Object.create(Human.prototype)


Athlete.prototype.constructor = Athlete

console.log(Athlete.prototype)

Athlete.prototype.walk = function () {
    Human.prototype.walk.apply(this)
    console.log('And has ', this.medals, ' medals!')
}

const athlete = new Athlete({
    name: 'Boris Senior',
    medals: 5
})

athlete.walk()

// Наследование на классах, ES6

class Human2 {
    constructor(options) {
        this.name = options.name
    }

    walk () {
        console.log(`${this.name} can walk!`)
    }
}

const human2 = new Human2({
    name: 'Boris Junior 2'
})

human2.walk()

class Athlete2 extends Human2 {
    constructor(options){
        super(options)
        this.medals = options.medals
    }

    walk(){
        super.walk()
        console.log('And has ', this.medals, ' medals!')
    }
}

const athlete2 = new Athlete2({
    name: 'Boris Senior 2',
    medals: 5
})

athlete2.walk()

// Функциональное наследование, legacy

function Human3 (options) {
    this.name = options.name
    this.walk = function () {
        console.log(this.name, ' can walk!')
    }
}

const human3 = new Human3({
    name: 'Boris Junior 3'
})

human3.walk()

function Athlete3 (options) {
    Human3.call(this, options)
    this.medals = options.medals

    var stroll = this.walk;
    this.walk = function () {
        stroll.call(this)
        console.log('And has ', this.medals, ' medals!')
    }
}

const athlete3 = new Athlete3({
    name: 'Boris Senior 3',
    medals: 5
})

athlete3.walk()