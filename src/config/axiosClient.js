import axios from 'axios'


const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND
})

export default axiosClient

// import axios from 'axios';

// const axiosClient = axios.create({
//   baseURL: 'http://localhost:4000',
// });

// export default axiosClient;