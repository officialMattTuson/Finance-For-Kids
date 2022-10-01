const conn = require('./connection')

function getAccountBalance (user_id, db = conn) {
    return db('account')
    .join('users', 'users.auth0_id', 'user_id')
    .select(
        'id AS account_id',
        'users.auth0_id AS user_id',
        'username',
        'balance',
    ).where('user_id', user_id)

}

function getAllAccountBalances (db = conn) {
    return db('account')
    .join('users', 'users.auth0_id', 'user_id')
    .select(
        'id AS account_id',
        'users.auth0_id AS user_id',
        'username',
        'balance',
    )

}

module.exports = {
    getAccountBalance,
    getAllAccountBalances
}