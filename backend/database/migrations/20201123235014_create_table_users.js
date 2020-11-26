
exports.up = knex => knex.schema.createTable('account', table =>{
    table.increments('id').unique().primary();
    table.string('username').unique().notNullable();
    table.string('password').unique().notNullable();
    table.string('email').unique().notNullable();

    // table.timestamp('crated_at').defaultTo(knex.fn.now());
    // table.timestamp('updated_at').defaultTo(knex.fn.now());
    });

exports.down = knex => knex.schema.dropTable('account');