const createHmac = require("create-hmac");

const safeBase64Url = (txt) =>
  Buffer.from(txt)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

const createHmacDigest = (salt, target, secret) => {
  const hmac = createHmac("sha256", Buffer.from(secret, "hex"));
  hmac.update(Buffer.from(salt, "hex"));
  hmac.update(target);
  return hmac.digest("base64url");
};

const sign = ({ host, uri, key, salt, params = "", s3Url = "" }) => {
  // console.log({ s3Url, key, salt })

  if (!host) {
    throw new Error("IMGCDN_HOST not set!");
  }

  const secure = key || salt;
  if (secure) {
    if (!key) {
      throw new Error("IMGPROXY_KEY not set!");
    }

    if (!salt) {
      throw new Error("IMGPROXY_SALT not set!");
    }
  }

  const url = `${s3Url}${uri}`;
  const query = `${params}/${safeBase64Url(url)}`;
  const signature = secure ? createHmacDigest(salt, query, key) : "insecure";

  let imgUrl = `https://${host}/${signature}${query}`;

  // console.log({ uri, url, query, signature, imgUrl })

  return imgUrl;
};

module.exports = sign;
