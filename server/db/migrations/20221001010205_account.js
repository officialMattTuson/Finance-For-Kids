exports.up = function (knex) {
    return knex.schema.createTable('account', (table) => {
      table.increments('id').primary()
      table.integer('balance')
      table.string('user_id')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('account')
  }
  