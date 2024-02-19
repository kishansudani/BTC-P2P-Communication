const BitcoinP2P = require("./lib/index").default;

const options = {
  node: "161.97.164.31", // ipv4 or ipv6 address
  port: 12972, // p2p port
  ticker: "BSV",
  segwit: false, // Set to true for BTC and other segwit coins
  validate: true, // Perform merkle root validation
  autoReconnect: false, // Attempt reconnect after disconnects
  magic: Buffer.from("ee88063f", "hex"),
  disableExtmsg: false,
  version: 70220,
  DEBUG_LOG: true,
  mempoolTxs: true, // Receiving mempool tx announcements
};

const peer = new BitcoinP2P(options);

const main = async () => {
  await peer.connect();
  peer.disconnect();
};

main();
