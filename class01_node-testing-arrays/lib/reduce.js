
function reduce(array, callback, accum) {
    const hasAccum = accum !== undefined;
    if(!hasAccum) accum = array[0];
    const start = hasAccum ? 0 : 1;
    
    for(let i = start; i < array.length; i++) {
        accum = callback(accum, array[i], i);
    }

    return accum;
}

module.exports = reduce;