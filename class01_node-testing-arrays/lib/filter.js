
function filter(array, callback) {
    const filtered = [];

    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        if(callback(item, i)) {
            filtered[filtered.length] = item;
        }
    }

    return filtered;
}

module.exports = filter;