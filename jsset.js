
const jsset = new Set(); 
console.log(jsset); 

// Set with multiple types of value
const jsset2 = new Set([1, 'Glad to meet', {count : true}]);
console.log(jsset2); 

console.log(jsset.values());//access

const myset = new Set([7, 5]);
console.log(myset.values());

// adding new elements
myset.add(5);
console.log(myset.values());

// adding duplicate elements
// does not add to Set
myset.add(7);
console.log(myset.values());
