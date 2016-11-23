
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function (table) {
      table
        .integer('famous_person_id')
        .unsigned()
        .references('id')
        .inTable('famous_people');
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};


// Add a foreign_key to table milestones pointing to the famous person: famous_person_id (integer)
