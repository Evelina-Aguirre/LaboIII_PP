import {personajes,actualizarStorage} from "./stroraje.js";
import {cargarFormulario,vaciarFormulario} from "./formulario.js";
import {actualizarTabla} from "./tabla.js";
import {Superheroe,actualizarIds} from "./Superheroe.js";
import {mostrarGifCarga} from "./animaciones.js";

const $formulario=document.forms[0];
const $tabla=document.getElementById("tabla");

const $btnEliminar = document.getElementById("btnEliminar");
const $btnAlta = document.getElementById("btnAlta");
const $btnCancelar= document.getElementById("btnCancelar");
const $gif=document.getElementById("gifCarga");

if (personajes.length) {
    actualizarIds(personajes);
    actualizarTabla($tabla, personajes);
  }

window.addEventListener("click",handlerClick);

$formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("entreal submit");
    console.log($formulario.txtId.value);
    mostrarGifCarga();

    const {txtId,txtNombre,txtAlias,rdoEditorial,txtFuerza,txtArma} = $formulario;

    if(txtId.value === ""){
        const newPersonaje=new Superheroe("",txtNombre.value,txtAlias.value,rdoEditorial.value,txtFuerza.value,txtArma.value);
        handlerCreate(newPersonaje);
    }
    else{
        const updetedPersonaje=new Superheroe(parseInt(txtId.value),txtNombre.value,txtAlias.value,rdoEditorial.value,txtFuerza.value,txtArma.value);
        handlerUpdate(updetedPersonaje);
    }

    actualizarIds(personajes);
    vaciarFormulario($formulario);
});

function handlerClick(e) {
    if(e.target.matches("td"))
    {
        const id =e.target.parentElement.dataset.id;
        const selectedPersonaje= personajes.find((per)=>{
            return per.id == id;
        })
        cargarFormulario($formulario, selectedPersonaje);
        
        $btnAlta.value="Modificar";
        $btnEliminar.disabled = false;
        
    }
   else if(e.target.matches("input[type='button'][value='Eliminar']"))
    { 
         handlerDelete(parseInt($formulario.txtId.value));
         
    }
    else if (e.target.matches("input[type='button'][value='Cancelar']"))
{
    vaciarFormulario($formulario);
}

   
}

function handlerCreate(nuevoPersonaje){
    
    personajes.push(nuevoPersonaje);
    actualizarStorage("personajes",personajes);
    actualizarTabla($tabla,personajes);
}

function handlerUpdate(editPersonaje){
  let index = personajes.findIndex((anun)=> anun.id== editPersonaje.id);
  personajes.splice(index,1,editPersonaje);
  actualizarStorage("personajes",personajes);
  actualizarTabla($tabla,personajes);
}

function handlerDelete(id){
    
    const confirmDelete = confirm("¿Está seguro de que desea eliminar este personaje?");
       console.log(confirmDelete);
    if (confirmDelete) {
      let index = personajes.findIndex((anun) => anun.id == id);
      console.log(index);
      personajes.splice(index, 1);
      
      actualizarStorage("personajes", personajes);
      actualizarIds(personajes)
      actualizarTabla($tabla, personajes);
      $formulario.reset();
      $formulario.txtId.value = "";
    }
}


 




