  
    class PlanosDeLaEspada{
        constructor(material, durabilidad, efecto){
            this.dano = 10;
            this.material = material;
            this.info = [];
            this.setMaterial = material;
            this.setDurabilidad = durabilidad;
            this.info.push(this.getDano,durabilidad,efecto);
        }
        atacar(){
            let durabilidad = this.getDurabilidad;
            let info = ``;
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
            this.setatacar = this.info[3];
            return info;
        }
        defender(){

        }

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

    class AcumulacionEfectos extends PlanosDeLaEspada{
        constructor(material, durabilidad, efecto){
            super(material, durabilidad, null);
            this.setbonus = 0;
            this.setefecto = efecto;
        }
        set setefecto(efecto){
            this.efecto = efecto;
        }
        get getefecto(){
            return this.efecto;
        }
        set setbonus(bonus){
            let bono = bonus;
            bono++;
            this.bonus=bono;
        }
        get getbonus(){
            return this.bonus;
        }
        get getatacar(){
            this.info[3] = `${this.getefecto} ${this.getbonus}`;
            this.setbonus= this.getbonus;
            return this.atacar();
        }
    }
    class EspadaMadera extends AcumulacionEfectos{
        constructor(material, durabilidad, efecto){
            super(material, durabilidad, efecto);
        }
    }
    class EspadaPiedra extends AcumulacionEfectos{
        constructor(material, durabilidad, efecto){
            super(material, durabilidad, efecto);
        }
    }
    class EspadaHierro extends AcumulacionEfectos{
        constructor(material, durabilidad, efecto){
            super(material, durabilidad, efecto);
        }

    }
    const obj1 = new EspadaMadera("Madera",2,"Naturaleza");
    const obj2 = new EspadaHierro("Hierro",20,"Infección");
    const obj3 = new EspadaPiedra("Piedra",80,"Lentitud");
    console.log(obj1.getatacar);
    console.log(obj1.getatacar);
    console.log(obj1.getatacar);
    console.log(obj1.getatacar);
    /**/
    console.log(obj2.getatacar);
    console.log(obj2.getatacar);
    /**/
    console.log(obj3.getatacar);
    console.log(obj3.getatacar);
    console.log(obj3.getatacar);
    console.log(obj3.getatacar);
    console.log(obj3.getatacar);
    console.log(obj3.getatacar);