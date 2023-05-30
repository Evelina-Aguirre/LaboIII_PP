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
                tr.setAttribute("data-id", element[key]);
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
    contenedor.appendChild(crearTabla(data));
};
