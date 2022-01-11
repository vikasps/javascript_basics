const student = {
    name: 'vikas p.s',
    class: 10,
    age: 16
}

// using for...in
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
}