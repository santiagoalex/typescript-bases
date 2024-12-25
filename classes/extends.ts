
(()=>{
  

  class Avenger {
    static avgAge: number

    constructor ( 
      public name:string,
      public reaName?:string){

    } 

    private getFullName ():string{
      return`${this.name} - ${this.reaName}`
    }
   }


   class Xmen extends Avenger {

    constructor(
      public name:string,
      public realName:string,
      public mutant:string
    ){
      // console.log("constructor iniciado")
      super( name, realName)
    }

    get fullName(){
      return `${this.name} - ${this.realName} `
    }

    set fullName( name: string){

      if(name.length < 3){
        throw new Error(" la variable name debe tener más de 3 caracteres");
      }

      this.name=name

    }

    getFullNameDesdeXmen(){
      console.log(this.name,this.realName, this.mutant)
    }
 
   }


   const antman: Avenger = new Avenger('Steve Rogers ','Capitan America')
  //  console.log(antman)

   const logan: Xmen = new Xmen("Wolwrine","Logan","regerancion")

   logan.fullName='Santiago'
  //  logan.getFullNameDesdeXmen()
})()