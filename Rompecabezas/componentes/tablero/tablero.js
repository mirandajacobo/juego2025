import { todas_las_cartas } from "./data.js";

function item(contenido){
    let div = document.createElement('div');
    div.className = "div-item";
    div.textContent = contenido;

    return div;
}

function cargarCartas(){
let div = document.createElement('div');
div.className = "div-tableros1";

todas_las_cartas.forEach((letra)=>{
    div.appendChild(item(letra));
});

return div;
}
export { cargarCartas }