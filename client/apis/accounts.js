import request from "superagent"
const accountURL = '/api/v1/accounts'

export async function getAccountListAPI () {
    const res = await request.get(`${accountURL}/name`)
    return res.body
}

export async function viewAccountBalancesAPI () {
    const res = await request.get(accountURL)
    return res.body
}

export async function addAccountAPI (newAccount) {
    const res = await request.post(accountURL).send(newAccount)
    return res.body
}