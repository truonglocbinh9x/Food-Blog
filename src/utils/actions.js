import axios from 'axios'
const BASE_URL_API = process.env.VUE_APP_BASE_API_URL + '/api/v1'

export default function getPosts () {
  const url = `${BASE_URL_API}/posts`;

  return axios
    .get(url)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err));
}
