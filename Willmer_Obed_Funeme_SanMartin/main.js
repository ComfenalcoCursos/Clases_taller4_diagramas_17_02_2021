class Espada{
    constructor(material, daño, durabilidad, efecto){
        this.material = material;
        this.info = [ 
          function(){
            let durabilidad = this[1];
            let efecto = this[3];
            return function(){
                 durabilidad--;
                 return `Daño realizado ${this[1]} Durabilidad ${this[2]} / ${durabilidad} efecto al enemigo ${this[3]}`;
            }
          },
          daño,  //Puntos de ataque
          durabilidad,  //Durabilidad
          efecto,  //Efectos        
        ];
      }
      atacar(){
        return this.info[0];
      }
      defender(){
      
      }
    set setMateria(material){
      this.material = material;
    }
    get getMaterial(){
      return this.material; 
    }
  }
    const obj = new Espada(""Hierro",20,200,null);
    console.log(obj.atacar());
  
  
  
//   material
//   hoja
//   filo
//   mango
