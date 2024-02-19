const BitcoinP2P = require("./lib/index").default;
const Version = require("./lib/messages").Version;

const node = "161.97.164.31"; // ipv4 or ipv6 address
const port = 12972; // p2p port
const ticker = "BSV";
const segwit = false; // Set to true for BTC and other segwit coins
const validate = true; // Perform merkle root validation
const autoReconnect = false; // Attempt reconnect after disconnects
const magic = Buffer.from("ee88063f", "hex");
const disableExtmsg = false;
const version = 70220;
const DEBUG_LOG = false;
const mempoolTxs = true; // Receiving mempool tx announcements

const options = {
  node: node,
  port: port,
  ticker: ticker,
  segwit: segwit,
  validate: validate,
  autoReconnect: autoReconnect,
  magic: magic,
  disableExtmsg: disableExtmsg,
  version: version,
  DEBUG_LOG: DEBUG_LOG,
  mempoolTxs: mempoolTxs,
};

const peer = new BitcoinP2P(options);

const main = async () => {
  await peer.connect();
  peer.disconnect();
};

main();
