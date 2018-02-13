

let i = 0;
for(; i < 10; i++) {
    wait(i);
}

function wait(x) {
    setTimeout(() => {
        console.log(x);
    }, 0);
}