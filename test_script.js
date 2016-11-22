const pg = require("pg");
const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'pg',
  connection: {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
  }
});



// const getPersonNames = (name, callback) => {
//   client.connect((err) => {
//     if (err) throw err;
//
//     let query =
//       `SELECT
//       first_name,
//       last_name,
//       birthdate
//       FROM famous_people
//       WHERE first_name = $1 OR last_name = $1;`;
//
//
//     client.query(query, [name], (err, result) => {
//       if (err) {
//         console.log("Something went wrong:", err);
//         callback([]);
//       }
//       else {
//         callback(result.rows);
//       }
//       client.end(); // Close db connection - if we don't do this the app doesn't close.
//     });
//   });
// }
//

const getPersonNames = (name, callback) => {

knex.select('*').from('famous_people')
.where('first_name', name)
.orWhere('last_name', name)
.asCallback(function(err, rows) {
  if (err) {
    return console.error(err);
  }
  console.log(rows);
  knex.destroy()
  //something that closes my connection???
});

}
// Add other query functions here and export them below

module.exports = {
getPersonNames: getPersonNames
};
