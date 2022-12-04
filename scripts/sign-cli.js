const args = process.argv.slice(2);
if (!args.length) {
  throw new Error("Args not set!");
}

require("dotenv").config();

const imgcdn_host = process.env.IMGCDN_HOST;
const s3Url = process.env.S3_URL;
const key = process.env.IMGPROXY_KEY;
const salt = process.env.IMGPROXY_SALT;

const sign = require("./sign");

const [uri, params] = args;

const imgUrl = sign({ host: imgcdn_host, uri, params, s3Url, key, salt });

console.log({ imgUrl });
