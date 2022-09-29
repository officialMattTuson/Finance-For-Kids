 exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          auth0_id: 'auth0|123',
          username: 'Matt',
          email: 'mtuson1414@gmail.com',
        },
        {
          auth0_id: 'auth0|456',
          username: 'Tiao',
          email: 'tiaoli1998@gmail.com',
        },
        {
          auth0_id: 'auth0|632d259b6aa7af87dfa37429',
          username: 'Bellamy',
          email: 'fakekid@gmail.com',
        },
      ])
    )
}
