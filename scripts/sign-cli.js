const args = process.argv.slice(2);
if (!args.length) {
  throw new Error("Args not set!")
}

require('dotenv').config()

const s3Url = process.env.S3_URL
const key = process.env.IMGPROXY_KEY
const salt = process.env.IMGPROXY_SALT

const sign = require('./sign').default

const [uri, params] = args

const signedImgUrl = sign({ uri, params, s3Url, key, salt })

console.log({ signedImgUrl })
