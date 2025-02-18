let myArr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(stringArr) {
  return stringArr.reduce((acc, el) => {
    if (el.length % 2 === 1) {
      acc.push(el.length);
    }
    return acc;
  }, []);
}

console.log(oddLengths(myArr));
