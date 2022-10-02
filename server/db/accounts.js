const conn = require('./connection')

function getAccounts (db=conn) {
    return db('account')
}

function addAccount (data, db = conn) {
    return db('account')
    .insert(data)
}
function getAccountBalance (user_id, db = conn) {
    return db('account')
    .join('users', 'users.auth0_id', 'user_id')
    .select(
        'id AS account_id',
        'users.auth0_id AS user_id',
        'username',
        'balance',
        'name AS account_name'
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
        'name AS account_name'
    )
}

function deleteAccount (id, db = conn) {
    return db('account').where('id', id).del()
}


module.exports = {
    getAccounts,
    addAccount,
    getAccountBalance,
    getAllAccountBalances, 
    deleteAccount
}