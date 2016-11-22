const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query("SELECT $1::int AS number", ["1"], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows[0].number); //output: 1
//     client.end();
//   });
// });






// The callback receives result.rows from `pg`
const getPersonNames = (name, callback) => {
  client.connect((err) => { // Open DB connection
    if (err) throw err;

    let query =
      `SELECT
      first_name,
      last_name,
      birthdate
      FROM famous_people
      WHERE first_name = $1 OR last_name = $1;`;


    client.query(query, [name], (err, result) => {
      if (err) {
        console.log("Something went wrong:", err);
        callback([]);
      }
      else {
        callback(result.rows);
      }
      client.end(); // Close db connection - if we don't do this the app doesn't close.
    });
  });
}

// Add other query functions here and export them below

module.exports = {
getPersonNames: getPersonNames
};
