(()=>{

  type Avengers ={
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
}

  const avengers ={
    nick: "Samuel L Jackson",
    ironman: "Robert Downey JR",
    vision: "Paul Bettany",
    activo:true,
    poder:1500.123
  }


  const printAvenger= ({ironman,...resto}:Avengers)=>{

    console.log('Avengers',ironman,resto)
  }

  printAvenger( avengers)

  const avengerArr=['cap. America',true,150.13]

  const [capi, ironman, numero]=avengerArr

  console.log('respuesta',capi, ironman, numero)

})()