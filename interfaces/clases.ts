(()=>{

  interface Xmen {
    name:string
    realName:string,
    mutantPower(id:number):string
  }

  interface Human{
    age:number
  }

  class mutant implements Human,Xmen{

    constructor(
      public age: number,
      public name: string,
      public realName: string,
    ){}
 
    
    mutantPower(id: number): string {
        return 'Magneto'
    }
  }
})()