

let x = 12;

function addTo(y) {
    
    return () => x + y;

}

const reveal = addTo(3);
console.log(reveal());

x = 6;

console.log(reveal());