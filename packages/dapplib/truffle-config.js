require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad heavy arctic sun short'; 
let testAccounts = [
"0x2144afda7a06b8efe520bc8a634c6f14f92d146a485911a431ca211f7a9bbed3",
"0x20dc2da12e41a433131e03c17956ff2712d4083dfd318e6d0ad4ebf2ea4d4923",
"0x028d52423773443ff999f24bfd6a5d8ad44392238f3c6684712c4b5b7ad8045a",
"0xee9b8ffa19e8016199d5fa25f2e398ee7c167c4346431f6f24c89e7bd74f0b24",
"0x8a6a5cbac559c80c1f779ebd5026fed5ca16c5d108b8da5f9f72b175907d4ece",
"0x0b7d47dd68c9dc9976d28344e6079830fa73612344b9788ffdf89e5de782f13e",
"0x371b1f045435d639183f667bf265295ea8a1127e5f502091eb9aa285c870d9ae",
"0xd412c8bd6fdb441d448aa376c4ef9c8818726e13b83aa91b76b8120bea75bbc9",
"0x6784a17d9c8116ac42c8157616d9c86ad1b78e3a915be9ada15273a5cf17a115",
"0x866e7f40fcde7f1521896d0334e7d3b7d2f147a3bcff4a5f02647c314fbf0f3c"
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


