// 1. Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtDetalles() {
    console.log(
      `Hola tu nombre es ${this.nombre} tu edad es ${this.edad} y eres ${this.genero}`
    );
  }
}

let Juan = new Persona('Juan', 28, 'chico');
Juan.obtDetalles();

// 2. Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Persona2 extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  registrar() {
    console.log(
      `Hola tu nombre es ${this.nombre}, tu edad es ${this.edad}, eres ${this.genero}, vas a ${this.curso} en el grupo ${this.grupo}`
    );
  }
}

let Sandra = new Persona2('Sandra', 22, 'chica', 'primero', 'B');

Sandra.registrar();

// 3. Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  asignar() {
    console.log(
      `Hola tu nombre es ${this.nombre}, tu edad es ${this.edad}, eres ${this.genero}, impartes la asignatura de  ${this.asignatura} (aunque no te entiende nadie) y tu nivel es ${this.nivel}`
    );
  }
}

let Mike = new Profesor('Mike', 28, 'chico', 'Ciencias de la Vida', 'Básico');

Mike.asignar();

// 4. ERES UN WARRIOR*****************

class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }
  attack() {
    return this.power;
  }
  defend(damage) {
    return (this.life = this.life - damage);
    console.log(`${this.life}`);
  }
}

class Maya extends Warrior {
  constructor(life, power) {
    super(life, power);
  }
  drinkColaCao() {
    return (this.power = this.power + 10);
  }
}

class Aztec extends Warrior {
  constructor(life, power) {
    super(life, power);
  }
  drinkNesquik() {
    return (this.life = this.life + 10);
  }
}

/*********************************/
// 1. Azteca bebe nesquik

let newAztec = new Aztec(10, 20);
console.log(newAztec);
newAztec.drinkNesquik();
console.log(newAztec);

// 2. Maya bebe Colacao
let newMaya = new Maya(20, 30);
newMaya.drinkColaCao();
console.log(newMaya);

//3.Maya ataca a azteca. Azteca defiende.
let mayaattack = newMaya.attack();
newAztec.defend(mayaattack);
console.log(newAztec.defend(mayaattack));

//4.Azteca ataca a maya. Maya defiende.
console.log(newMaya.defend(newAztec.attack()));
