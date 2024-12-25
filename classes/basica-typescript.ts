
(()=>{
  

  class Avenger {
    // private name:string
    // private team:string
    // public realName?:string
    static avgAge: number

    constructor ( 
      private name:string,
      private team:string, 
      public realName?:string){
      // this.name = name;
      // this.team = team;
      // this.realName =realName

    } 

    public bio ():string{
      return`${this.name} - ${this.team}`
    }
   }

  //  const antman: Avenger = new Avenger('Antaman ','Capitan America','Scott Lang')
  //  console.log(antman)
})()