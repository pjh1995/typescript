/**
 * Let's make a game 🕹
 */

const position = {
    x: 0,
    y: 0
};

type Placement = "up" | "down" | "left" | "right";

function move(placement:Placement) {
    switch(placement) {
        case "up" :
            position.y++; break;
        case "down" :
            position.y--; break;
        case "left" : 
            position.x--; break;
        case "right" :
            position.x++; break;
        default:
            throw new Error(`unknown placement: ${placement}`);
    }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
