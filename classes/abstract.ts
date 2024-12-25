(()=>{
    abstract class Mutant{
      constructor(
        public name:string,
        public realName:string
      ){}
    }

    class Xmen extends Mutant {
      salvarAlMundo(){
          return 'Mundo a Salvo'
      }
    }

    class  Villian extends Mutant {
      dominarElMundo(){
        return 'Mundo conquistado'
      }
    }

    const logan:Mutant = new Xmen('Wolverine','Logan')
    const magneto:Mutant = new Villian('Magneto','Erick')

    const printName= (character:Mutant)=>{
      console.log(character.realName)

    }


    // printName(magneto)
 

})()