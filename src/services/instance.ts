import axios from 'axios'

if (!import.meta.env.VITE_BASE_API_URL) {
  throw new Error('VITE_API_URL is not defined')
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
  },
  timeout: 10000,
})

export default instance
