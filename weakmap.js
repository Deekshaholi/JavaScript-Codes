let weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'Glad to meet');

console.log(weakMap); 

// get the element of a WeakMap
console.log(weakMap.get(obj)); 

// check if an element is present in WeakMap
console.log(weakMap.has(obj)); 

// delete the element of WeakMap
console.log(weakMap.delete(obj)); 

console.log(weakMap); // WeakMap {} 