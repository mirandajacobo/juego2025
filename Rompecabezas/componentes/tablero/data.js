let carta_par_1 = ['A','B', 'C', 'D', 'E', 'F','G', 'H'];
let carta_par_2 = ['A','B', 'C', 'D', 'E', 'F','G', 'H'];
let todas_las_cartas = carta_par_1.concat(carta_par_2);


function mezcla(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Intercambio de posiciones
    }
    return deck;
}


// Mezclar cartas
todas_las_cartas = mezcla(todas_las_cartas);

export { todas_las_cartas };
