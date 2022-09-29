import request from 'superagent'
import { logError } from '../auth0-utils'


export function getUser(token) {
  return request
    .get(`/api/v1/users`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}

export function addUser(user, token) {
  return request
    .post('/api/v1/users')
    .set('Authorization', `Bearer ${token}`)
    .send(user)
    .catch(logError)
}

