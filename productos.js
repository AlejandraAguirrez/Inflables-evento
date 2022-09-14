let carrito = []
//PAGINA PRODUCTOS CARD: VARIEDAD DE JUEGOS

let variedadJuegos = []
const juegosCard= document.getElementById('variedadJuegos')

class juegosVariedad{
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
} 
}

let metegol = new juegosVariedad('metegol', 3700, 0)
let sapo = new juegosVariedad('sapo', 4500, 1)
let arcade = new juegosVariedad('arcade', 8500, 2)

variedadJuegos.push(metegol)
variedadJuegos.push(sapo)
variedadJuegos.push(arcade)

variedadJuegos.forEach(juegosVariedad=>{
    const option = document.createElement('option')
    option.innerText = `${juegosVariedad.nombre}: $${juegosVariedad.precio}`
    juegosCard.append(option)
})

//PAGINA PRODUCTOS CARD: PLAZA BLANDA

let plazaBlanda = []
const plazaCard= document.getElementById('plazaBlanda')

class plaza{
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
} 
}

let tobogan = new plaza('tobogan', 3500, 3)
let saltarin = new plaza('saltarin', 2600, 4)
let circuito = new plaza('circuito', 7500, 5)

plazaBlanda.push(tobogan)
plazaBlanda.push(saltarin)
plazaBlanda.push(circuito)

plazaBlanda.forEach(plaza=>{
    const option = document.createElement('option')
    option.innerText = `${plaza.nombre}: $${plaza.precio}`
    plazaCard.append(option)
})

//PAGINA PRODUCTOS CARD: INFLABLES

let inflables = []
const inflablesCard= document.getElementById('inflables')

class inflable{
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
} 
}

let castillo = new inflable('castillo', 8000, 6)
let ring = new inflable('ring',12000, 7)
let barco = new inflable('barco', 13500, 8)

inflables.push(castillo)
inflables.push(ring)
inflables.push(barco)

inflables.forEach(inflable=>{
    const option = document.createElement('option')
    option.innerText = `${inflable.nombre}: $${inflable.precio}`
    inflablesCard.append(option)
})





