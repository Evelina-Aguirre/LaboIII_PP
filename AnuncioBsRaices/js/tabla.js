/*export const crearTabla = (data) =>{
    if (!Array.isArray(data)) return null;
    const tabla = document.getElementById("tabla");
    console.log("a ver que hay en la tabla ",tabla);
    console.log(data[0]);
    console.log("estoy en crear tabla ");
    tabla.appendChild(crearCabecera(data[0]));
    tabla.appendChild(crearCuerpo(data));
    
    return tabla;
}*/
export const crearTabla = (data) => {
    if (!Array.isArray(data)) return null;
    const tablaElement = document.createElement("table");
    tablaElement.appendChild(crearCabecera(data[0]));
    tablaElement.appendChild(crearCuerpo(data));
  
    return tablaElement;
  }

const crearCabecera=(elemento) =>{

    const tHead = document.createElement("thead");
    const headRow = document.createElement("tr");
    //cargo los th con los nombres de la keys
    for (const key in elemento) {
        if (key === "id") continue;
        const th = document.createElement("th");
        th.textContent = key;
        headRow.appendChild(th);
    }
    tHead.appendChild(headRow);

    return tHead;
}

const crearCuerpo=(data) =>{
    if (!Array.isArray(data)) return null;

    const tBody = document.createElement("tbody");

    data.forEach((element, index) => {
        const tr = document.createElement("tr");

        if (index % 2 == 0) {
            tr.classList.add("rowPar");
        }

        for (const key in element) {
            if (key === "id") {
                tr.setAttribute("data-id", element[key]);//o así
            } else {
                const td = document.createElement("td");
                td.textContent = element[key];
            
                tr.appendChild(td);
            }
        }
        tBody.appendChild(tr);

    });
    return tBody;
}

export  const actualizarTabla=(contenedor, data)=>{
    contenedor.innerHTML = '';
//while(contenedor.hasChildNodes()){
    //console.log("Contenedor: ",contenedor);
    //console.log("data",data);
   //   while(contenedor.firstChild){
    //contenedor.removeChild(contenedor.firstChild);
    //}
    
    contenedor.appendChild(crearTabla(data));
};
