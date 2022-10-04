const conn = require('./connection')

function getAccounts (db = conn) {
    return db('account')
    // .join('users', 'users.auth0_id', 'account.auth0_id')
    .select()
}

function getOneAccount (id, db = conn) {
    return db('account').where('id', id)
}

function addAccount (data, db = conn) {
    return db('account').insert(data)
}

function deleteAccount (id, db = conn) {
    return db('account').where('id', id).del()
}


module.exports = {
    getAccounts,
    addAccount,
    deleteAccount,
    getOneAccount
}