import * as AlveyinfoAPI from '@/services/alveyinfo-api'

class Misc {
  static info(options = {}) {
    return AlveyinfoAPI.get('/info', options)
  }

  static dailyTransactions(options = {}) {
    return AlveyinfoAPI.get('/stats/daily-transactions', options)
  }

  static blockInterval(options = {}) {
    return AlveyinfoAPI.get('/stats/block-interval', options)
  }

  static coinstake(options = {}) {
    return AlveyinfoAPI.get('/stats/coinstake', options)
  }

  static addressGrowth(options = {}) {
    return AlveyinfoAPI.get('/stats/address-growth', options)
  }

  static richList({from, to}, options = {}) {
    return AlveyinfoAPI.get(`/misc/rich-list`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }

  static biggestMiners({from, to}, options = {}) {
    return AlveyinfoAPI.get(`/misc/biggest-miners`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }
}

export default Misc
