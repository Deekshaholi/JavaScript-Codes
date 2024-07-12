// create a set
let map1 = new Map();

// insert key-value pair
map1.set('info', {idname: 'Deeksha', usn: 26002});
console.log(map1); 

console.log(map1.get('info'));//access info

console.log(map1.has('info'));//check elements using has()

map1.delete('address');//delete elements

console.log(map1.size); 