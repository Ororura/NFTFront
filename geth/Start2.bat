if not exist geth geth --datadir "" init genesis.json
geth --datadir "" --http --http.api="web3,admin,eth,net,txpool,debug,miner,personal" --port 3030 --networkid 8545 --http.corsdomain * --allow-insecure-unlock --preload "preload.js" console