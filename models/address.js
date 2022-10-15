import * as AlveyinfoAPI from '@/services/alveyinfo-api'

class Address {
  static get(id, options = {}) {
    return AlveyinfoAPI.get(`/address/${id}`, options)
  }

  static getBalance(id, options = {}) {
    return AlveyinfoAPI.get(`/address/${id}/balance`, options)
  }

  static getUtxo(id, options = {}) {
    return AlveyinfoAPI.get(`/address/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return AlveyinfoAPI.get(`/address/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static getBalanceTransactions(id, {page, pageSize}, options = {}) {
    return AlveyinfoAPI.get(`/address/${id}/balance-history`, {params: {page, pageSize}, ...options})
  }

  static getTokenBalanceTransactions(id, {token, page, pageSize}, options = {}) {
    if (token) {
      return AlveyinfoAPI.get(`/address/${id}/arc20-balance-history/${token}`, {params: {page, pageSize}, ...options})
    } else {
      return AlveyinfoAPI.get(`/address/${id}/arc20-balance-history`, {params: {page, pageSize}, ...options})
    }
  }
}

export default Address
