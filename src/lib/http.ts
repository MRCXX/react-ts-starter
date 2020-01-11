import axios from 'axios'
import qs from 'querystring'

const http = function (
  {
    url = '',
    method = 'post',
    api = '',
    params = {},
    paramType = 'requestPayload',
    lock = false
  }
) {
  if (!url) { return false }

  // if (paramType === 'formData') {
  //   let formData = new FormData()
  //   for (let key in input) {
  //     formData.append(
  //       key,
  //       typeof input[key] === 'object' ? JSON.stringify(input[key]) : input[key]
  //     )
  //   }
  //   input = formData
  // }
  // if (paramType === 'queryStringParams') {
  //   params = apiIn
  //   input = {}
  // }

  // if (lock) {}

  const head = {
    withCredentials: true
  }
  let _promise = new Promise((resolve, reject) => {
    try {
      axios({
        // ...head,
        url: url,
        method: 'post',
        data: qs.stringify(params)
        // params: params
      }).then((res: any) => {
          // if (lock) {
          //   Toast.clear()
          // }
          resolve(res)
        })
        .catch((res: any) => {
          reject(res)
        })
    } catch (e) {
      console.log(e)
    }
  })
  return _promise
}

export default http