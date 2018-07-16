let baseUrl=''
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://www.decio.io'
  baseUrl=''
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = ''
}
export default {
  baseUrl
}
