(
  ()=>{
    const fullName = (firstName:string,...args:string[])=>{

      return `${firstName} ${args.join(' ')}`

    }

    console.log('full name',fullName("Javascript","typescript",'tipad'))
  }
)()