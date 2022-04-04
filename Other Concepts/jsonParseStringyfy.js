/*
json vs js object : json has key in " "

JSON.parse() takes a JSON string and transforms it into a JavaScript object. it can take callback as second
args to modify the object.

JSON.stringify() takes a JavaScript object and transforms it into a JSON string.
it can take two additional arguments. The first one is a replacer function. 
The replacer function can be used to filter out values, as any value returned as undefined will be out of the returned string:
The second is a String or Number value to use as a space in the returned string.

*/

//object json String

let obj = '{"one": "123","two": "123"}';
console.log(
  JSON.parse(obj, (key, value) => {
    if (key == "one") {
      value = "1";
    }
    return value;
  })
); // { one: '123', two: '123' } -- key not in " "

function replacer(key, value) {
  if (key === "one") {
    return undefined;
  }
  return value;
}

let objrev = { one: 123, two: 123 };
console.log(JSON.stringify(objrev, replacer, "___")); // {___"two": 123 } key in " "
