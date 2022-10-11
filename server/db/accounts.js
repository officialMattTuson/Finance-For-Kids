const conn = require('./connection')

function getAccounts (db = conn) {
    return db('account')
    .join('users', 'users.auth0_id', 'account.auth0_id')
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

function updateAccountBalance (account,id, db = conn) {
    return db('account').update(account).where('id',id)
}

module.exports = {
    getAccounts,
    addAccount,
    deleteAccount,
    getOneAccount,
    updateAccountBalance
}