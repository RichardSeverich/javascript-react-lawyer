import get from "./RequestGet.js"
import post from "./RequestPost.js"
import remove from "./RequestDelete.js"
import postAuth from "./RequestPostAuth.js"

const requestManager = {
  get,
  post,
  postAuth,
  remove
}

export default requestManager;
