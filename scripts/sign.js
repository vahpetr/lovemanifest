
const createHmac = require('create-hmac')

const safeBase64 = (txt) => Buffer.from(txt)
  .toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')

const createHmacDigest = (salt, target, secret) => {
  const hmac = createHmac('sha256', Buffer.from(secret, 'hex'))
  hmac.update(Buffer.from(salt, 'hex'))
  hmac.update(target)
  return hmac.digest('base64url')
}

const sign = ({ uri, s3Url, key, salt }) => {

  // console.log({ s3Url, key, salt })

  if (!s3Url) {
    throw new Error("S3_URL not set!")
  }

  if (!key) {
    throw new Error("IMGPROXY_KEY not set!")
  }

  if (!salt) {
    throw new Error("IMGPROXY_SALT not set!")
  }

  const url = `${s3Url}/${uri}`
  const query = `/${safeBase64(url)}`
  const signature = createHmacDigest(salt, query, key)
  const signedImgUrl = `https://imgcdn.balkon.dev/${signature}${query}`

  // console.log({ uri, url, query, signature, signedImgUrl })

  return signedImgUrl
}

exports.default = sign
