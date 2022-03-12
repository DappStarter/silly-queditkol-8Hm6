require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strike rival night minor inner fork swallow gentle'; 
let testAccounts = [
"0x4b79b9a256cd09c3bd1709fafc753bd76b5538b22b7f0071b91e79d3ae167c1c",
"0x722575331d589561d30a273dc2bbad2c6feee9f9fce7cfb8d19675528498cb4b",
"0xc79dd7c830d9b75533993d02c150e082baa4b06944c3dcc4fa463f278c958821",
"0xbfe160f78804f0b7df5d7bc33bb8df1233b402f7836314c802cd47eaf669be06",
"0x678435f43e1efb6510fc3e36696b54bede27b12795ae80f3c0fd7d93629a92da",
"0x21dd169f4bff91d0356d7830aa9cec185a2aff30de5bebcaa2e572f0f35068ef",
"0x4bd0913ef39a7cca2a52d1b3a6c6e1e1a8924ad1190c162d4b2acd28b2b4847b",
"0x54287feb4283d952f4bb929dae28cd578237cda86829869d8fb57cd015338740",
"0x0adf0d81c0c9f4a1502cf17f3584140f6fb61055ff284efa24421177315cf5da",
"0x7e2f3fff7c2d07c6fdfc2712e630f45af038439a26ffb1d9d1e54502c8784f1c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


