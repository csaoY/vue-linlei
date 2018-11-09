import {urls} from './urls'
import axios from 'axios'

export function bannerImg(){
  return axios.post(urls.bannerImg, {
   position:'1',
    os:'all',
    channel:'1'
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
