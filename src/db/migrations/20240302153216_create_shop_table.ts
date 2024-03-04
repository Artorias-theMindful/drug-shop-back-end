import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('shops', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.float('latitude').notNullable();
        table.float('longitude').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('shops');
}

