import * as AlveyinfoAPI from '@/services/alveyinfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return AlveyinfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return AlveyinfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return AlveyinfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return AlveyinfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return AlveyinfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return AlveyinfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction
