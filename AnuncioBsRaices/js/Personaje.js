
export function Anuncio(id,nombre,fuerza) {
   
    if(id=="")
    {
      Anuncio.ultimoId =(Anuncio.ultimoId || 0) +1;    
      this.id=Anuncio.ultimoId;
    }
    else{
      this.id=id;
    }
        this.nombre = nombre;
        this.fuerza = fueza;
      
      }
/*import Personaje from "./Personaje.js";

// ...

// Ejemplo de creación de un nuevo personaje
const nuevoPersonaje = new Personaje("", "Gandalf", 100);

// Ejemplo de creación de un personaje con un id específico
const personajeExistente = new Personaje(1, "Aragorn", 120);

// ...*/ 