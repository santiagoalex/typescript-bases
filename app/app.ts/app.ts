(() => {

    // Tipos
    const batman : string = 'Bruce';
    const superman : string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string]  = [batman,superman];
    const villano: [string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];

    enum PowerHero {
      Acuaman = 0,
      Batman = 1,
       Flash = 5,
       Superman = 100,

    }
  
    //Enumeraciones
    const fuerzaFlash: PowerHero= PowerHero.Flash;
    const fuerzaSuperman: PowerHero= PowerHero.Superman;
    const fuerzaBatman: PowerHero= PowerHero.Batman;
    const fuerzaAcuaman: PowerHero= PowerHero.Acuaman;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length  ;
    console.log( largoDelPoder );
  
  
  })()
  
  