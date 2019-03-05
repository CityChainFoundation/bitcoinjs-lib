var bitcoin = require('../src')
const bip32 = require('bip32')
const { describe, it } = require('mocha')
const assert = require('assert')
const networks = require('../src/networks')

function getAddress (node, network) {
  return bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address
}

describe('wallet', function () {
  describe('generate and verify wallet service', function () {
    const network = networks['citycoin']
    var xpubkey = 'xpub6C4HAsYbVfua5qmGZjhFy31drGYZf5zVpkEXuvthw41bUvPUtBz2ZtNfdB4Majdn7vRTjFHb589NkKFfiwBnZA2Qx4Qu8yHiJG38bHEpTTr'
    var root = bip32.fromBase58(xpubkey, network)

    var address0 = getAddress(root.derivePath('0/0'), network)
    var address1 = getAddress(root.derivePath('0/1'), network)
    var address2 = getAddress(root.derivePath('0/2'), network)

    it('should return same address', function () {
      assert.equal(address0, 'CKUA7H4t6ruAZpTf9PQ6pPe5UogJbkHJzT')
      assert.equal(address1, 'CdmpDnhCkNWw9sWHeobydk5qFH1XE1nXAN')
      assert.equal(address2, 'CfFKNBi35GCc97X1uEkU1r8AhjRAwPptcm')
    })
  })
})
