// CLASES, POLIMORFISMO, HERENCIA Y MAS

class Espada{




    //Constructor de la clase espada con sus atpropiedades
    constructor(material){
        this.material = material;
    }
    atacar(){
        
    }
    parry(){

    }

        //Set Y Get

        //Set para nuestra espada
        set setMaterial(material){
            this.material = material;
            switch(material){
                case "Madera":
                    this.info[0] = (this.getDano+5);
                    break;
                case "Piedra":
                    this.info[0] = (this.getDani+10);
                    break;
                case "Hierro":
                    this.info[0] = (this.getDano+15);
                    break;
                case "Diamante":
                    this.info[0] = (this.getDano+20);
                    break;

            }
        }
        //Get para nuestra espada
        get getMaterial(material){
            return this.material;
        }
}


/*

 class PlanosDeLaEspada{
        constructor(material, durabilidad, efecto){
            // this.bonus = null;
            this.dano = 10;
            this.material = material;
            this.info = [];
            this.setMaterial = material;
            this.setDurabilidad = durabilidad;
            this.info.push(this.getDano,durabilidad,efecto);
            // console.log(this.info);
        
        }
        atacar(){
            let durabilidad = this.getDurabilidad;
            let info = "";
            // if(this.getBonus!=null){
            //     let bono = this.getBonus;
            //     this.setBonus = bono+1;
            // }
            if(durabilidad<=0 && this.getMaterial!=null){
                this.setMaterial = null;
                info = `'${this.material}' Daño realizado ${this.info[0]} Durabilidad 'exploto' Efecto al enemigo ${this.info[3]}`;
            }else if (durabilidad>0){
                durabilidad--;
                info = `'${this.material}' Daño realizado ${this.info[0]} Durabilidad ${this.info[2]} / ${this.getDurabilidad} Efecto al enemigo ${this.info[3]}`;
                this.setDurabilidad = durabilidad;
            }else{
                info = `'${this.material}' golpeo con la mano`;
            }
            return info;
        }
        defender(){

        }
        // set setBonus(bonus){
        //     if(bonus!=null){
        //         this.bonus = bonus;
        //     }else{
        //         this.bonus = '';
        //     }
        // }
        // get getBonus(){
        //     return this.bonus;
        // }
        set setDurabilidad(durabilidad){
            this.durabilidad = durabilidad;
        }
        get getDurabilidad(){
            return this.durabilidad;
        }
        set setDano(Dano){
            this.dano = Dano;
        }
        get getDano(){
            return this.dano;
        }
        set setMaterial(material){
            this.material = material;
            switch (material) {
                case "Madera":
                    this.info[0] = (this.getDano+5);
                    break;
                case "Piedra":
                    this.info[0] = (this.getDano+15);
                    break;
                case "Hierro":
                    this.info[0] = (this.getDano+25);
                    break;
            
            }
        }
        get getMaterial(){
            return this.material;
        }
    }
    class EspadaMadera extends PlanosDeLaEspada{
        constructor(material, durabilidad, efecto){
            super(material, durabilidad, efecto);
            // this.setBonus = null;
        }
    }
    class EspadaPiedra extends EspadaMadera{
        constructor(material, durabilidad, efecto){
            super(material, durabilidad, efecto);
            // this.setBonus = 1;
        }
    }
    class EspadaHierro extends EspadaPiedra{
        constructor(material, durabilidad, efecto){
            super(material, durabilidad, efecto);
            // this.setBonus = 1;
        }

    }
    const obj = new EspadaMadera("Madera",2,"");
    const obj2 = new EspadaHierro("Hierro",20,"Infeccion");
    const obj3 = new EspadaPiedra("Piedra",80,"Lentitud");
    console.log(obj.atacar());
    console.log(obj.atacar());
    console.log(obj2.atacar());
    console.log(obj2.atacar());
    console.log(obj3.atacar());
    console.log(obj3.atacar());
    console.log(obj3.atacar());

*/