let DOM = document.querySelector("#root");

let contenedor = document.createElement('div');
contenedor.className = "div-contenedor"

let div_foder = document.createElement('div');
div_foder.className = "div-foder"
contenedor.appendChild(div_foder);

let div_header = document.createElement('div');
div_header.className = "div-header"
contenedor.appendChild(div_header);

let div_progreso = document.createElement('div');
div_progreso.className = "div-progreso"
contenedor.appendChild(div_progreso);

let div_tablero = document.createElement('div');
div_tablero.className = "div-tablero"
contenedor.appendChild(div_tablero);

DOM.appendChild(contenedor);

