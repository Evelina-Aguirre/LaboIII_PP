//import Personaje from "./Personaje.js"

export function Superheroe(id,nombre,alias,editorial,fuerza,arma) {
   
  if(id=="")
  {
    Superheroe.ultimoId =(Superheroe.ultimoId || 0) +1;    
    this.id=Superheroe.ultimoId;
  }
  else{
    this.id=id;
  }
      this.nombre = nombre;
      this.alias = alias;
      this.editorial=editorial;
      this.fuerza = fuerza;
      this.arma = arma;
    }
  


  export function actualizarIds(anuncios) {
    let maxId = 0;
    anuncios.forEach((element) => {
      if (element.id > maxId) {
        maxId = element.id;
      }
    });
    Superheroe.ultimoId = maxId;
  }

