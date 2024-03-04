import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('orders', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.string('address').notNullable();
        table.json('order_data').notNullable();
        table.integer('shop_id').notNullable()
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('orders');
}

