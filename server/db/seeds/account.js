 exports.seed = async function(knex) {
  await knex('account').del()
  await knex('account').insert([
    {id: 1, balance: 100, user_id: 'auth0|123'},
    {id: 2, balance: 0, user_id: 'auth0|632d259b6aa7af87dfa37429'}
  ]);
};
