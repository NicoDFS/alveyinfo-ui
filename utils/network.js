export default {
  mainnet: {
    pubkey: 0x17,
    pubkeyhash: 0x17,
    scripthash: 0x32,
    witness_hrp: 'qc'
  },
  testnet: {
    pubkey: 0x58,
    pubkeyhash: 0x58,
    scripthash: 0x6e,
    witness_hrp: 'tq'
  }
}[process.env.network || 'mainnet']
