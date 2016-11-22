
const people = require('./test_script') // regular version
// const musicdb = require('./musicdb-promises') // promises version

var name = process.argv[2];


// See test_script.js for function interface
people.getPersonNames(name, (rows) => {
  console.log(`Found ${rows.length} tracks:\n`);
  rows.forEach((row) => {
    let output = [];
    for (column in row) {
      output.push(`${column}: ${row[column]}`);
    }
    console.log(output.join(', '));
  })
});
