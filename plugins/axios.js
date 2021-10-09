const nuxtAxios = ({ $axios, redirect }) => {
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setHeader('Cache-Control', 'no-cache')

  $axios.onRequest((config) => {})

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}

export default nuxtAxios
