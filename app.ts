// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)


interface Car{
encender:boolean,
velocidadMaxima:number,
acelerar():void
}

const conducirBatimovil = ( auto:Car ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil:Car = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}
// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Villain {
  reir?:boolean,
  comer?:boolean,
  llorar?:boolean
}

const guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Villain ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface City{
  (ciudadanos:string[]):number
}

const ciudadGotica:City = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Person {
  nombre:string,
  edad:number,
  sexo:string,
  estadoCivil:string,
  imprimirBio():void
}


/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person{
    constructor(
      public nombre,
      public edad,
      public sexo,
      public estadoCivil
    ){}

    imprimirBio(): void {
      
    }
}