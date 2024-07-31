const regex = new RegExp(/^a...s$/);
console.log(regex.test('adias')); // true


const regex1 = new RegExp(/^a...s$/);
console.log(regex.test('bails')); // true


const regex3 = new RegExp(/^a...s$/);
console.log(regex.test('abcdefg')); // true
