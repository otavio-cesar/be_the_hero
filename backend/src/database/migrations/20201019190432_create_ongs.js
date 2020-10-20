
exports.up = function(knex) {
  knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('email');
      table.string('cpf');
      table.string('whatsapp');
      table.string('estado');
      table.string('uf',2);
      table.string('city');
  })
};

exports.down = function(knex) {
    knex.schema.dropTable('ongs');
};
