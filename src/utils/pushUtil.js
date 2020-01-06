import router from '../router'

class pushUtil {
  toPage(url, params) {
  console.log(params)
    router.push({ path:url, query:params})
  }

}

export default new pushUtil()
