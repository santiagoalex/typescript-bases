 (()=>{

  type Avenger ={
    name: string;
    weapon: string;
  }

    const ironman:Avenger={
      name:'Ironman',
      weapon:'Armor suit'
    }

    const captainAmerica: Avenger ={
      name:'Capitan america',
      weapon:'Escudo'
    }

    const thor : Avenger ={
      name: 'Thor',
      weapon:'Mjlnir'
    }

    const avengers : Avenger []= [ironman,captainAmerica,thor]

    for (const avenger of avengers) {
      console.log('Avenger', avenger)
      
    }

 })()