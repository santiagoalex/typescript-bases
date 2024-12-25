(()=>{

  let flash :{
    name:string,
    age?:number,
    powers:string[],
    getName?: ()=> string
  } ={
    name:"Barry Allen",
    age:24,
    powers:["super Velocidad","viajar en el tiempo"]
  }


  flash ={
    name:"Clark Kent",
    age:24,
    powers:["super Velocidad","Invulnerabilidad"],
    getName(){
      return this.name
    }

  }

  console.log(flash.getName)

})()