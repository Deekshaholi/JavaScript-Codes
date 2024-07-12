const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

const obj = {1:5};

// add to a weakSet
weakSet.add(obj);
console.log(weakSet); 


console.log(weakSet.has(obj)); // true

// delete 
weakSet.delete(obj);
console.log(weakSet); // WeakSet {}