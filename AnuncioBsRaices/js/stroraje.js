export const personajes= JSON.parse(localStorage.getItem("personajes")) || [];

export function actualizarStorage(clave,data){
    localStorage.setItem(clave, JSON.stringify(data));
}