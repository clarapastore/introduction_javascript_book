/* Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets: */

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

/* Without running this code, can you determine whether these two snippets produce the same output? Why? */

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// Expected output: 'qux'


for (let key in myObj) {
  console.log(key);
}

// Expected output: 'qux' 'foo' 'bar'

// These two snippets will not produce the same output.
// The first snippet will only output 'qux', because the Objects.keys static method returns an array of the object's own properties, and not the ones inherited from the parent object.
// On the other hand, the for/in loop loops through both the object's own properties as well as the ones inherited from the parent object. 
