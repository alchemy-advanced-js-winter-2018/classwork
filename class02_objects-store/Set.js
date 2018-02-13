const set1 = new Set();
const obj1 = { name: 'obj1' };
const obj2 = { name: 'obj2' };
const obj3 = { name: 'obj3' };

set1.add(obj1);
set1.add(obj2);
set1.add(obj1);

console.log(set1.has(obj1));
// expected output: true

console.log(set1.has(obj2));
// expected output: true

console.log(set1.has(obj3));
// expected output: false
set1.forEach(each => console.log(each));

set1.delete(obj2);

console.log(set1.has(obj2));
// expected output: false
