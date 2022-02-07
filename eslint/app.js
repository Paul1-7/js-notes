// objects
const personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California'
  },
  'ultima-pelicula': 'Infinity War'
}
console.log(personaje)
delete personaje.edad
console.log(personaje)
//  enumarate to object,make it iterable
const entriesPares = Object.entries(personaje)
console.log(typeof entriesPares)
//  freeze object
Object.freeze(personaje)
//  but don´t it freeze properties inside it
personaje.direccion.ubicacion = 'Costa Rica'
console.log(personaje)
const propiedades = Object.getOwnPropertyNames(personaje)
const valores = Object.values(personaje)
console.log({ propiedades, valores })

//  is not necessary to specify the value if the name of the property is the same as that value
// function crearPersona( nombre, apellido ) {
//     return { nombre,apellido }
// }

//  for return an object directly is done with brackets
const crearPersona = (nombre, apellido) => ({ nombre, apellido })

//  for rest params is not allowed other arg after it
const imprimeArgumentos2 = (edad, ...args, notValid) => {
  console.log({ edad, args })// if is want
  // return args;
}

//        destructuring

//  destructuring an array
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola')
console.log({ casado, vivo, nombre, saludo })

//  if is necessary change the variable name, is colocate : and the new name variable
const { apellido: nuevoApellido } = crearPersona('Fernando', 'Herrera')
console.log({ nuevoApellido })

//  example of rest operator destructuring
const tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster']
}

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log({ nombre })
  console.log({ codeName })
  console.log({ vivo })
  console.log({ edad })
  console.log({ trajes })
}

imprimePropiedades( tony )

//          params for value and reference
//  is per value in the primitive data and per reference in the objects

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');//more effective that the slice
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');



//  for objects
const cambiaNombre = ({ ...persona }) => {
  persona.nombre = 'Toony';
  return persona;
}

let peter = { nombre: 'Peter' };
let tonyf  = cambiaNombre( peter );


//  ------- bolean logic -----------
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150; // ?
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;

//  -------- ternarian operator ----------------
const nota = 82.5; // A+ A B+
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({ nota, grado });

//  ----- for --------

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[i] );
}


console.warn('For in');
for( let i in heroes ) {
    console.log( heroes[i] );
}

console.warn('For of');
for( let heroe of heroes ){
    console.log( heroe );
}


// --------- classes ---------

class Persona { //by default has 'use strict'

  static _conteo = 0;
  static get conteo() {
      return Persona._conteo + ' instancias';
  }

  static mensaje() {
      console.log( this.nombre ); // undefined
      console.log('Hola a todos, soy un método stático');
  }

  static porObjeto({ nombre, apellido, pais }) { 
    return new Persona( nombre, apellido, pais );
}
// const persona2 = Persona.porObjeto( isObject);

  nombre = '';
  codigo = '';
  frase  = '';
  comida = '';

  constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
      
      this.nombre = nombre;
      this.codigo = codigo;
      this.frase  = frase;

      Persona._conteo++;
  }

  set setComidaFavorita( comida ) {
      this.comida = comida.toUpperCase();
  }
  get getComidaFavorita() {
      return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
  }


  quienSoy() {
      console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
  }

  miFrase() {
      this.quienSoy();
      console.log(`${ this.codigo} dice: ${ this.frase }`);
  }

}

//  ------ inheritance
class Heroe extends Persona{ 
    
  #clan = 'sin clan'; //private attribute

  constructor(nombre, codigo, frase) {
      super(nombre, codigo, frase); // is necessary to access its  inheritances attributes

      this.clan = 'Los Avengers';
  }

  quienSoy() {
      console.log(`Soy ${ this.nombre }, ${ this.clan }`);
      super.quienSoy();
  }

}

