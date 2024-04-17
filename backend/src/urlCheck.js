const protocol = 'http://'
const protocolSecure = 'https://'

export function isValid(url) {
  const result = (url.includes(protocol) || url.includes(protocolSecure))
  return result
}

export function fixUrl(url) {
  url = protocol.concat(url)
  return url
}