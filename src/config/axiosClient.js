import axios from 'axios'

const axiosClient = axios.create({
  baseURL:'https://vet-rolling.onrender.com'
})

export default axiosClient

// import axios from 'axios';

// const axiosClient = axios.create({
//   baseURL: 'http://localhost:4000',
// });

// export default axiosClient;