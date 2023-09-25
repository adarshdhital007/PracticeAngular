'use strict';

// Map
console.log('Map');
console.log('');

let map = new Map();
map.set("A", 1);
map.set("B", 2);
map.set("C", 3);

// Alternative ways to create a Map
let map2 = new Map()
  .set("A", 1)
  .set("B", 2)
  .set("C", 3);

let map3 = new Map([
  ["A", 1],
  ["B", 2],
  ["C", 3]
]);

// Iterating over the Map
for (let [key, value] of map) {
  console.log(key, value); // Output: A 1, B 2, C 3
}

// Map operations
console.log(map.get("A"));    // Output: 1
console.log(map.has("A"));    // Output: true
console.log(map.size);        // Output: 3

map.delete("A");
console.log(map.size);        // Output: 2

map.clear();
console.log(map.size);        // Output: 0
console.log('');
console.log('');

// Set
console.log('Set');
console.log('');
let set = new Set();
set.add('APPLE');
set.add('ORANGE');
set.add('MANGO');

// Alternative ways to create a Set
let set2 = new Set()
  .add('APPLE')
  .add('ORANGE')
  .add('MANGO');

let set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);

// Set operations
console.log(set.has('APPLE')); // Output: true

set.delete('APPLE');
console.log(set.size);        // Output: 2

set.clear();
console.log(set.size);        // Output: 0

// Demonstrating unique values in Sets
let set4 = new Set();
set4.add('Moo');
console.log(set3.size);        // Output: 3 (Original Set size)
set4.add('Moo');
console.log(set4.size);        // Output: 1 (Set with duplicates)

// Iterating over a Set
for (let entry of set2) {
  console.log(entry);          // Output: APPLE, ORANGE, MANGO
}
