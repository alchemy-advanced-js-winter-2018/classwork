const person = {
    firstName: 'pops',
    lastName: 'johnson',
    color: 'blue'
};

Object.keys(person).forEach(key => {
    console.log(key, person[key]);
});

Object.entries(person).forEach(([ key, value ]) => {
    console.log(key, value);
});
