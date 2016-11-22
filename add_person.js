
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

var add = process.argv[2];
var lastName = process.argv[3];
var birthdate = process.argv[4];
knex
  .insert({first_name: add, last_name: lastName, birthdate: birthdate})
  .into('famous_people')
  .then(function (rows) {
    console.log(rows);
  })
  .finally(function () {
    knex.destroy();
  })
