(()=>{


  type Hero ={
    name:string,
    age?:number,
    powers:string[],
    getName?: ()=> string
  }

  let flash :Hero ={
    name:"Barry Allen",
    age:24,
    powers:["super Velocidad","viajar en el tiempo"]
  }


  let superman : Hero ={
    name:"Clark Kent",
    age:24,
    powers:["super Velocidad","Invulnerabilidad"],
    getName(){
      return this.name
    }

  }


})()