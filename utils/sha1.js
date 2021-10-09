import sha1 from 'crypto-js/sha1'

export const hashSHA1 = (str) => {
  const h = sha1(str).toString()
  return h
}
