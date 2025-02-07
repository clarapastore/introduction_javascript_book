// Launch school exercise:
// Using arithmetic operators, get the individual digits of a 4-digit number like 4936

let cifer = 4936;

// Get the 1s place
cifer % 10;

// Get the 10s place
// I'm going to use parseInt for this, although I'm not sure this is the correct solution because the info says to use arithmetic operators, and doesn't mention whether or not I can use methods on them.
parseInt((cifer % 100) / 10);

// Get the 100s place
parseInt((cifer % 1000) / 100);

// Get the 1000s place
parseInt(cifer / 1000);

// Another solution (using only arithmetic operators)
// Got to this solution because I looked at the hints from launchschool
let onesPlace = cifer % 10;
console.log(onesPlace);

let tens = (cifer - onesPlace) % 100;

let tensPlace = tens / 10;
console.log(tensPlace);

let hundreds = (cifer - tens - onesPlace) % 1000;

let hundredsPlace = hundreds / 100;
console.log(hundredsPlace);

let thousands = (cifer - hundreds - tens - onesPlace);

let thousandsPlace = thousands / 1000;
console.log(thousandsPlace);

// Launchschool's solution
let lsNumber = 4936;
let lsOnes = lsNumber % 10;
lsOnes;
lsNumber = (lsNumber - lsOnes) / 10;
let lsTens = lsNumber % 10;
lsTens;
lsNumber = (lsNumber - lsTens) / 10;
let lsHundreds = lsNumber % 10;
lsHundreds;
let lsThousands = (lsNumber - lsHundreds) / 10;
lsThousands;

