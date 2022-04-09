/*

set - data structure which cant have dublicate values.
set methods .has .values .add .delete .clear .size
Itrable using for...of loop.


weak set - just like set but has only objects in it. not itralbe
*/

let arr = [1, 23, 4, 4, 5, 67, 1, 1, 1, 3, 3, 3, 3]
let set1 = new Set(arr)
console.log(set1)
console.log(set1.size);
console.log(set1.values())
console.log(set1.has(9)) //false
console.log(set1.add(8))
console.log(set1.delete(8))//true
console.log(set1.delete(8))//false
console.log(set1)//previous set
set1.clear();
console.log(set1) // set:0{}

let set2 = set1
set2.add(9)
console.log(set1) // they point to same memory address.

/*

Map - similar to objects in js . allow to store data in key/value pair.
the elemets are insterted in inserted order.
A map can have object, function or other datatype as keys.
we can itrate map using for..of or forEach


.set .get .has .delete .clear .size  .keys .values .entries

*/

let map1 = new Map()
console.log(map1)
map1.set("a", "abc")
console.log(map1);
map1.set("a", "abc");
map1.set("a", "abcd"); //replaces the previous val
console.log(map1);
map1.set("b", "abc");
map1.set("c", "abc");
console.log(map1);
console.log(map1.get("a"))
console.log(map1.get("z")); // undefined
console.log(map1.has("z")); // false
console.log(map1.size);
console.log(map1.keys());
console.log(map1.values());
console.log(map1.entries());

console.log(map1.delete("a")) //true
console.log(map1)
map1.clear()
console.log(map1)//Map(0) {size: 0}