import axios from 'axios'
const BASE_URL_API = process.env.VUE_APP_BASE_API_URL + '/api/v1'

export function getPosts (page = 1) {
  const url = `${BASE_URL_API}/posts?page=${page}`;

  return axios
    .get(url)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err));
}

export function getPost (postId) {
  const url = `${BASE_URL_API}/posts/${postId}`
  return axios.get(url)
    .then(res => {
      if (!res.data) return
      return res.data
    })
    .catch(err => {
      console.log(err)
      return false
    })
}
