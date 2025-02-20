import axios from 'axios'

if (!import.meta.env.VITE_TMDB_ACCESS_TOKEN) {
  throw new Error('VITE_TMDB_ACCESS_TOKEN is not defined')
}

const instance = axios.create({
  // baseURL: import.meta.env.VITE_BASE_API_URL,
  baseURL: import.meta.env.VITE_TMDB_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    // 'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
  timeout: 10000,
})

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      console.error('Error response:', error.response.data)
    } else if (error.request) {
      console.error('Error request:', error.request)
    } else {
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  }
)

export default instance
