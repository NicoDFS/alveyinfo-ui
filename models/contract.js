import * as AlveyinfoAPI from '@/services/alveyinfo-api'

class Contract {
  static get(id, options = {}) {
    return AlveyinfoAPI.get(`/contract/${id}`, options)
  }

  static getUtxo(id, options = {}) {
    return AlveyinfoAPI.get(`/contract/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return AlveyinfoAPI.get(`/contract/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static listTokens({page, pageSize}, options = {}) {
    return AlveyinfoAPI.get(`/arc20`, {params: {page, pageSize}, ...options})
  }

  static richList(id, {page, pageSize}, options = {}) {
    return AlveyinfoAPI.get(`/arc20/${id}/rich-list`, {params: {page, pageSize}, ...options})
  }
}

export default Contract
