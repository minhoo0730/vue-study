// import { axiosService } from './index';
import axios from 'axios';
const prefixMenuUrl = 'http://localhost:8000/api/menu'

const menus = {
  list(){
    return axios.get(prefixMenuUrl);
  },
}
export default {
  menus
}
