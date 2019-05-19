export default function({ $axios, store }) {
  $axios.onRequest(config => {
    // console.log('Request ' + config.method + ' to: ', config.url)
    if (config.method === 'post') {
      // console.log('set global post content type')
      $axios.setHeader('Content-Type', 'application/json', ['post'])
    }
    $axios.setHeader('Accept', 'application/json')
  })

  // $axios.onRequestError(error => {
  //   // console.warn('onRequestError to: ', error.response.data)
  // })

  $axios.onResponseError(error => {
    const code = parseInt(error.response && error.response.status)

    if (code === 401) {
      // console.warn('onResponseError: ', code)
      return code
    }
    if (code === 503) {
      // const alertMsg = {
      //   msg: 'API Server on maintenance.'
      // }
      return code
    }
  })
}
