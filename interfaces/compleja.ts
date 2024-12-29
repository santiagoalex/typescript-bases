(()=>{
  interface Client{
    name:string,
    age?:number,
    address:Address
    getFullAddress(id:string):string
  }


  interface Address {
    id:number,
    zip:string,
    city:string
  }


  const client :Client={
    name:'Ramiro',
    age:25,
    address:{
      id:83,
      zip:'KY2 SUD',
      city:'otawa'
    },
    getFullAddress(id:string) {
      return this.address?.city
    },
  }

  const client2 :Client={
    name:'Felipe',
    age:25,
    address:{
      id:83,
      zip:'KY2 SUD',
      city:'otawa'
    },
    getFullAddress(id:string) {
      return this.address?.city
    },
  }


})()