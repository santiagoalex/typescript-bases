(()=>{
  class Avenger {
    weapon;
    power;
    constructor( weapon='gun', power=50){
      this.weapon =weapon,
      this.power=power
    }
  }
    const captainAmerica= new Avenger ('shield', 3000)

    class FlyingAvenger extends Avenger {
      fly;
      
      constructor(weapon,power){
        super(weapon,power)
        this.fly=true
      }
    }


    const falcon = new FlyingAvenger('Wings', 500)
    console.log(captainAmerica)

    console.log(falcon)

})()